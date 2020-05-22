module.exports = router => {  //报名缴费接口

    const code = 200

    router.get('/signup', async(ctx) => {  //提交手机验证码接口
        if (code === 200) {
            ctx.body = {
                code: 200,
                message: '报名成功',
                data: {  
                    package: "prepay_id=wx20180101abcdefg",
                    paySign: "22D9B4E54AB1950F51E0649E8810ACD6..."
                }
            }
        } else if (code === 300) {  //否则
            ctx.body = {
                code: 300,
                message: '报名失败'
            }
        }
    })
    
}