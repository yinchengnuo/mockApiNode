module.exports = router => {  //首页

    router.get('/pay', async ctx => {
            ctx.body = {
                code: 200,
                message: 'paypaypaypaypaypaypaypay',
                data: {
                    by: '尹成诺',
                    tam: + new Date
                }
            }
    })
    
}