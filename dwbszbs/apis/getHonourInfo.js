module.exports = router => {  //获取当前赛季用户荣誉信息

    const code = 200

    router.get('/getHonourInfo', async(ctx) => {
        if (code === 200) {
            ctx.body = {
                code: 200,
                message: '获取当前赛季用户荣誉信息成功',
                data: {
                    deg: 3,
                    timestamp: '1569304984556'
                }
            }
        } else if (code === 300) {  //否则
            ctx.body = {
                code: 300,
                message: '获取当前赛季用户荣誉信息失败',
                data: {
                    
                }
            }
        }
    })

}