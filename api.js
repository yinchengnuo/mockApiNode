const URL = require('url')
const events = require('events');
const puppeteer = require('puppeteer');
const company = require('./util/exoresscom')
const execSync = require('child_process').execSync;

const event = new events.EventEmitter();

module.exports = async router => {
    const pageNum = 3 // 无头浏览器 tab 数量
    let nowPageNum = 0
    const requestList = [] // 待处理单号
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox', '--ignore-certificate-errors'] })
    const pageList = [] // page 实例列表
    for(let i = 0; i < pageNum; i ++) { // 初始化指定数量的 page 配置
        const page = await browser.newPage() // 生成 page 实例
        page.goto('https://www.kuaidi100.com/', { timeout: 0, waitUntil: 'networkidle2' }).then(() => nowPageNum ++) // 页面加载完成后推入 pageList
        page.on('response', async res => { // 监听网页网络请求响应数据
            if (res._url.includes('/query?')) { // 监听指定 url
                const result = JSON.parse(await res.text()) // 取到数据
                result.com ? result.comInfo = company.find(e => e.number == result.com) : '' // 查询到结果后绑定快递公司名称
                pageList[i].requesting = false // 将状态标记为空闲
                !result.nu ? result.nu = URL.parse(res.url(), true).query.postid : '' // 查询无无结果时将物流单号赋值给 nu 便于从队列删除
                event.emit('REQUEST_OK', result) // 将数据发送到全局
            }
        })
        pageList.push({ 
            page, // page 实例
            requesting: false, // 状态是否在请求中
            async request(order_num) { // 请求方法
                this.requesting = true // 将状态标记为请求中
                const input = await this.page.$('#postid') // 获取输入框
                await input.type(order_num) // 填入物流单号
                const query = await this.page.$('#query') // 获取按钮
                await query.click() // 触发按钮点击
            }
        })
    }

    setInterval(async () => { // 定时重启页面，防止停留时间过长失效
        for(let i = 0; i < pageNum; i ++) {
            pageList[i].requesting = true
            const newPage = await browser.newPage()
            await newPage.goto('https://www.kuaidi100.com/', { timeout: 0, waitUntil: 'networkidle2' })
            const temp = pageList[i]
            pageList[i].page = newPage
            await temp.page.close()
            pageList[i].requesting = false
        }
    }, 1000 * 60 * 2) // 两分钟新建并销毁原页面防止查询失败

    const distribute = order_num => {
        if (!requestList.includes(order_num)) {
            const free = pageList.find(e => !e.requesting)
            free ? free.request(order_num) : requestList.push(order_num)
        }
    }

    event.on('REQUEST_OK', () => {
        if (requestList.length) {
            distribute(requestList.splice(0, 1)[0])
        }
    })

    router.get("/express", async (ctx) => { // 物流单号查询
        if (ctx.request.query.num) { // 检查物流单号
            if (nowPageNum) { // 爬虫页面是否开启
                distribute(ctx.request.query.num) // 分发请求
                try {
                    ctx.body = await new Promise(resolve => event.on('REQUEST_OK', data => data.nu == ctx.request.query.num && resolve(data))) // 等待请求成功响应请求    
                } catch (error) {
                    ctx.body = { msg: '爬取失败' }
                }
            } else {
                ctx.body = { msg: '爬虫启动中' }
            }
        } else {
            ctx.body = { msg: '订单号不合法' }
        }
    })

    router.post("/gitHook", async (ctx) => { // github hook
        execSync('git reset --hard && git pull --force')
        ctx.body = ""
    })

}
