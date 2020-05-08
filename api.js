const puppeteer = require('puppeteer');
const exec = require('child_process').exec;

module.exports = router => {
    
    router.post("/gitHook", async (ctx) => { // github hook
        exec('git reset --hard && git pull --force')
        ctx.body = ""
    })

    router.get("/express", async (ctx) => { // 物流单号查询
        ctx.body = await new Promise(async resolve => {
            const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })
            const page = await browser.newPage()
            await page.setExtraHTTPHeaders({ 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36' })
            await page.goto('https://www.kuaidi100.com/', { timeout: 0 }) // 557006432812950
            const input = await page.$('#postid')
            await input.type(ctx.request.query.num)
            const query = await page.$('#query')
            await query.click()
            page.on('request', async req => {
                // console.log(req._url)
            })
            page.on('response', async res => {
                if (res._url.includes('/query')) {
                    resolve(JSON.parse(await res.text()))
                    // await page.close()
                    // await browser.close()
                }
            })
        })
    })

}
