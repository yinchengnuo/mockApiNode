const fs = require("fs");

module.exports = router => {
    router.post('/user/login', async ctx => {
        const result = JSON.parse(fs.readFileSync('./admin/data/account.json').toString()).find(e => e.name == ctx.request.body.username)
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
        const name = decodeURIComponent(ctx.request.header.authorization.split(' ')[1])
        const user = JSON.parse(fs.readFileSync('./admin/data/account.json').toString()).find(e => e.name == name)
        user.routes = JSON.parse(fs.readFileSync('./admin/data/role.json').toString()).find(e => e.name === user.role).routes
        ctx.body = {
            code: 200,
            message: '获取用户信息成功',
            data: {
                id: user.id,
                name: user.name,
                avatar: user.avatar,
                role: user.role,
                routes: user.routes
            }
        }
    })

    router.post('/user/password', async ctx => {
        const name = decodeURIComponent(ctx.request.header.authorization.split(' ')[1])
        const accountList = JSON.parse(fs.readFileSync('./admin/data/account.json').toString())
            if (accountList.find(e => e.name == name).password == ctx.request.body.old) {
                accountList.find(e => e.name == name).password = ctx.request.body.new
                fs.writeFileSync('./admin/data/account.json', JSON.stringify(accountList))
                ctx.body = {
                    code: 200,
                    message: '修改密码成功'
                }
            } else {
                ctx.body = {
                    code: 300,
                    message: '原密码错误'
                }
            }
    })
}