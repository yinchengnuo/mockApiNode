const puppeteer = require('puppeteer');
const exec = require('child_process').exec;

module.exports = router => {
    
    router.post("/gitHook", async (ctx) => { // github hook
        exec('git reset --hard && git pull --force')
        ctx.body = ""
    })

    router.get("/express", async (ctx) => { // github hook
        ctx.body = await new Promise(async resolve => {
            const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })
            const page = await browser.newPage()
            await page.goto('https://www.kuaidi100.com/') // 557006432812950
            const input = await page.$('#postid')
            await input.type(ctx.request.query.num)
            const query = await page.$('#query')
            await query.click()
            page.on('response', async res => {
                if (res._url.includes('/query')) {
                    resolve(JSON.parse(await res.text()))
                    await page.close()
                    await browser.close()
                }
            })
        })
    })

}
