const puppeteer = require('puppeteer');
const exec = require('child_process').exec;

module.exports = router => {
    
    router.post("/gitHook", async (ctx) => { // github hook
        exec('git reset --hard && git pull --force')
        ctx.body = ""
    })

    router.get("/express", async (ctx) => { // 物流单号查询
        console.log('query:', ctx.request.query.num)
        ctx.body = await new Promise(async resolve => {
            const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })
            console.log('browser')
            const page = await browser.newPage()
            console.log('page')
            await new Promise(resolve => setTimeout(() => resolve()))
            await page.goto('https://www.kuaidi100.com') // 557006432812950
            console.log('https://www.kuaidi100.com')
            const input = await page.$('#postid')
            console.log('input')
            await input.type(ctx.request.query.num)
            console.log(ctx.request.query.num)
            const query = await page.$('#query')
            console.log('query')
            await query.click()
            console.log('click')
            page.on('request', async req => {
                console.log(req._url)
            })
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
