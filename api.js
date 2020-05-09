const company = require('./util/exoresscom')
const puppeteer = require('puppeteer');
const execSync = require('child_process').execSync;

module.exports = async router => {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox', '--ignore-certificate-errors'] })
    let page = await browser.newPage()
    await page.goto('https://www.kuaidi100.com/', { timeout: 0, waitUntil: 'networkidle2' }) // 557006432812950
    setInterval(async () => {
        const newPage = await browser.newPage()
        await newPage.goto('https://www.kuaidi100.com/', { timeout: 0, waitUntil: 'networkidle2' }) // 557006432812950
        const temp = page
        page = newPage
        temp.close()
    }, 1000 * 60 * 2) // 两分钟新建并销毁原页面防止查询失败
    
    router.post("/gitHook", async (ctx) => { // github hook
        console.log('gitHook')
        execSync('git reset --hard && git pull --force')
        ctx.body = ""
    })

    router.get("/express", async (ctx) => { // 物流单号查询
        ctx.body = await new Promise(async resolve => {
            const input = await page.$('#postid')
            await input.type(ctx.request.query.num)
            const query = await page.$('#query')
            await query.click()
            page.on('response', async res => {
                if (res._url.includes('/query')) {
                    const result = JSON.parse(await res.text())
                    if (result.com) {
                        result.comInfo = company.find(e => e.number == result.com)
                    }
                    resolve(result)
                }
            })
        })
    })

}
