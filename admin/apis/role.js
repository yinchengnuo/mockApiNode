const fs = require("fs");

module.exports = router => {

    const roleList = []
    const userList = []

    router.get('/role/all', async ctx => {
        ctx.body = {
            code: 200,
            message: '获取角色列表成功',
            data: {
                list: JSON.parse(fs.readFileSync('./admin/data/role.json').toString())
            }
        }
    })

    router.post('/role/add', async ctx => {
        const roleList = JSON.parse(fs.readFileSync('./admin/data/role.json').toString())
        if (roleList.find(e => e.name == ctx.request.body.name)) {
            ctx.body = { code: 300, message: '该角色已存在' }
        } else {
            ctx.request.body.id = Date.now().toString()
            roleList.push(ctx.request.body)
            fs.writeFileSync('./admin/data/role.json', JSON.stringify(roleList))
            ctx.body = {
                code: 200,
                message: '添加角色成功'
            }
        }
    })

    router.get('/role/del', async ctx => {
        const roleList = JSON.parse(fs.readFileSync('./admin/data/role.json').toString())
        roleList.splice(roleList.findIndex(e => e.id == ctx.request.query.id), 1)
        fs.writeFileSync('./admin/data/role.json', JSON.stringify(roleList))
        ctx.body = {
            code: 200,
            message: '删除账号成功'
        }
    })

    router.post('/role/update', async ctx => {
        const roleList = JSON.parse(fs.readFileSync('./admin/data/role.json').toString())
        delete ctx.request.body.title
        roleList[roleList.findIndex(e => e.id == ctx.request.body.id)] = ctx.request.body
        fs.writeFileSync('./admin/data/role.json', JSON.stringify(roleList))
        ctx.body = {
            code: 200,
            message: '修改角色权限成功'
        }
    })

    router.get('/account/all', async ctx => {
        ctx.body = {
            code: 200,
            message: '获取账号列表成功',
            data: {
                list: JSON.parse(fs.readFileSync('./admin/data/account.json').toString())
            }
        }
    })

    router.post('/account/add', async ctx => {
        const accountList = JSON.parse(fs.readFileSync('./admin/data/account.json').toString())
        if (accountList.find(e => e.name == ctx.request.body.name)) {
            ctx.body = { code: 300, message: '该账号已存在' }
        } else {
            accountList.push({
                id: Date.now().toString(),
                name: ctx.request.body.name,
                password: '123456',
                avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
                role: ctx.request.body.role
            })
            fs.writeFileSync('./admin/data/account.json', JSON.stringify(accountList))
            ctx.body = {
                code: 200,
                message: '添加账号成功'
            }
        }
    })

    router.post('/account/update', async ctx => {
        ctx.body = {
            code: 200,
            message: '修改账号权限成功'
        }
    })

    router.get('/account/del', async ctx => {
        const accountList = JSON.parse(fs.readFileSync('./admin/data/account.json').toString())
        accountList.splice(accountList.findIndex(e => e.id == ctx.request.query.id), 1)
        fs.writeFileSync('./admin/data/account.json', JSON.stringify(accountList))
        ctx.body = {
            code: 200,
            message: '删除账号成功'
        }
    })

}