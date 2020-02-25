module.exports = router => {
    router.post('/user/login', async ctx => {
        // const result = await new Promise((resolve, reject) => {
        //     global.User.find(ctx.request.body, (err, data) => {
        //         if (err) reject()
        //         resolve(data)
        //     })
        // })
        // if (result.length) {
        //     ctx.body = {
        //         code: 200,
        //         message: 'token签发成功',
        //         data: {
        //             token: 'token.token.token-token-token'
        //         }
        //     }
        // } else {
        //     ctx.body = {
        //         code: 100,
        //         message: '用户名或密码错误'
        //     }
        // }
        ctx.body = {
            code: 200,
            message: 'token签发成功',
            data: {
                token: 'token.token.token-token-token'
            }
        }
    })

    router.get('/user/info', async ctx => {
        ctx.body = {
            code: 200,
            message: '获取用户信息成功',
            data: {
                routes: '["admin"]',
                avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
                name: '大卫博士后台超级管理员',
                season_list: [
                    {
                        season: 18,
                        start: 1570204800000,
                        end: 1572364799000
                    },
                    {
                        season: 17,
                        start: 1567612800000,
                        end: 1569427199000
                    },
                ]
            }
        }
    })

    router.post('/user/changepsw', async ctx => {
        ctx.body = {
            code: 200,
            message: '修改密码成功'
        }
    })
}