module.exports = router => {  //获取参赛人数

    const code = 200

    router.get('/getTotalJoinNum', async(ctx) => {
        if (code === 200) {   //获取当前赛季所有参赛人数信息
            ctx.body = {
                code: 200,
                message: '获取当前赛季所有参赛人数信息成功',
                data: {
                    top_num: Math.floor(Math.random() * 10000),  //顶级代理参赛数量
                    super_num: Math.floor(Math.random() * 10000)  //特级代理参赛数量
                }
            }
        } else if (code === 300) {  //否则
            ctx.body = {
                code: 300,
                message: '获取当前赛季所有参赛人数信息成功失败'
            }
        }
    })

    router.get('/getTeamJoinNum', async(ctx) => {
        if (code === 200) {  //获取团队参赛数量信息
            ctx.body = {
                code: 200,
                message: '获取团队参赛数量信息成功',
                data: {
                    crown_num: 88,  //皇冠团队数量
                    top_num: Math.floor(Math.random() * 1000),  //顶级代理参赛数量
                    super_num: Math.floor(Math.random() * 1000)  //特级代理参赛数量
                }
            }
        } else if (code === 300) {  //否则
            ctx.body = {
                code: 300,
                message: '获取团队参赛数量信息失败',
                data: {
                    tel: ctx.request.body.tel
                }
            }
        }
    })
    
}