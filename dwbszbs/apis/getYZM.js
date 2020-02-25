module.exports = router => {  //获取手机验证码接口

    const code = 200

    router.get('/getYZM', async(ctx) => {
        if (code === 200) {  //如果该手机号用户是代理
            ctx.body = {
                code: 200,
                message: '发送成功'
            }
        } else if (code === 300) {  //否则
            ctx.body = {
                code: 300,
                message: '该用户不是代理'
            }
        }
    })
    
}