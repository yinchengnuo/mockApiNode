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
        ctx.request.body.id = Date.now().toString()
        roleList.push(ctx.request.body)
        fs.writeFileSync('./admin/data/role.json', JSON.stringify(roleList))
        ctx.body = {
            code: 200,
            message: '添加角色成功'
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
        console.log(roleList.findIndex(e => e.id == ctx.request.body.id))
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
        const add = ctx.request.body
        add.id = Math.floor(Math.random() * 100000)
        userList.push(add)
        ctx.body = {
            code: 200,
            message: '添加账号成功'
        }
    })

    router.get('/account/del', async ctx => {
        ctx.body = {
            code: 200,
            message: '删除账号成功'
        }
    })

    router.post('/account/update', async ctx => {
        ctx.body = {
            code: 200,
            message: '修改账号权限成功'
        }
    })

}