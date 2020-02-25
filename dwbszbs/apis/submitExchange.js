module.exports = router => {  //提交礼品兑换

    const code = 200

    router.get('/submitExchange', async(ctx) => {
        if (code === 200) {
            ctx.body = {
                code: 200,
                message: '兑换成功',
            }
        } else if (code === 300) {  //否则
            ctx.body = {
                code: 300,
                message: '兑换失败',
                data: {
                    
                }
            }
        }
    })

}