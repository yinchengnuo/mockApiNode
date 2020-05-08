const puppeteer = require('puppeteer');
const exec = require('child_process').exec;

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
    }, 1000 * 60 * 3)
    
    router.post("/gitHook", async (ctx) => { // github hook
        exec('git reset --hard && git pull --force')
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
                    resolve(JSON.parse(await res.text()))
                }
            })
        })
    })

}
