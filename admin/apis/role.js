module.exports = router => {

    const roleList = []
    const userList = []

    router.get('/role/all', async ctx => {
        ctx.body = {
            code: 200,
            message: '获取用户列表成功',
            data: {
                list: roleList
            }
        }
    })

    router.post('/role/add', async ctx => {
        const add = ctx.request.body
        add.id = Math.floor(Math.random() * 100000)
        roleList.push(add)
        ctx.body = {
            code: 200,
            message: '添加用户成功'
        }
    })

    router.get('/role/del', async ctx => {
        ctx.body = {
            code: 200,
            message: '删除用户成功'
        }
    })

    router.post('/role/update', async ctx => {
        ctx.body = {
            code: 200,
            message: '修改用户权限成功'
        }
    })

    router.get('/user/all', async ctx => {
        ctx.body = {
            code: 200,
            message: '获取用户列表成功',
            data: {
                list: userList
            }
        }
    })

    router.post('/user/add', async ctx => {
        const add = ctx.request.body
        add.id = Math.floor(Math.random() * 100000)
        userList.push(add)
        ctx.body = {
            code: 200,
            message: '添加用户成功'
        }
    })

    router.get('/user/del', async ctx => {
        ctx.body = {
            code: 200,
            message: '删除用户成功'
        }
    })

    router.post('/user/update', async ctx => {
        ctx.body = {
            code: 200,
            message: '修改用户权限成功'
        }
    })

}