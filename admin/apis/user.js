const fs = require("fs");

module.exports = router => {
    router.post('/user/login', async ctx => {
        const result = JSON.parse(fs.readFileSync('./admin/data/account.json').toString()).find(e => e.username == ctx.request.body.username)
        if (result && result.password == ctx.request.body.password) {
            ctx.body = {
                code: 200,
                message: '登陆成功',
                data: { token: encodeURIComponent(ctx.request.body.username) }
            }
        } else {
            ctx.body = {
                code: 300,
                message: '用户名或者密码错误'
            }
        }
    })

    router.get('/user/info', async ctx => {
        const username = decodeURIComponent(ctx.request.header.authorization.split(' ')[1])
        const user = JSON.parse(fs.readFileSync('./admin/data/account.json').toString()).find(e => e.username == username)
        user.routes = JSON.parse(fs.readFileSync('./admin/data/role.json').toString()).find(e => e.name === user.role).routes
        ctx.body = {
            code: 200,
            message: '获取用户信息成功',
            data: {
                id: user.id,
                name: user.username,
                avatar: user.avatar,
                role: user.role,
                routes: user.routes
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