const puppeteer = require('puppeteer');
const exec = require('child_process').exec;

module.exports = router => {
    
    router.post("/gitHook", async (ctx) => { // github hook
        exec('git reset --hard && git pull --force')
        ctx.body = ""
    })

    router.get("/express", async (ctx) => { // github hook
        console.log(ctx.request.query.num)
        if (ctx.request.query.num.length >= 9) {
            ctx.body = await new Promise(async resolve => {
                const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })
                const page = await browser.newPage()
                page.goto(`https://www.baidu.com/s?wd=${ctx.request.query.num}`) // 557006432812950
                page.on('response', async res => {
                    if (res._url.includes('/express/api/express')) {
                        const jsonp = await res.text()
                        global[jsonp.match(/jQuery.+(?=\(\{)/g)] = async data => {
                            console.log(data)
                            resolve(data)
                            await page.close()
                            await browser.close()                
                        }
                        eval(jsonp)
                    }
                })
            })
        } else {
            ctx.body = { msg: '物流单号不合法' }
        }
    })

}
