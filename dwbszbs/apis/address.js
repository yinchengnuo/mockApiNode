module.exports = router => {  //获取地址列表

    const code = 200

    const list = [
        // {
        //     id: '_dsdffdafdfdahsdjfhalskdjhfla1',
        //     name: '久卫云1',
        //     tel: 18338112210,
        //     address: '河南省 郑州市 金水区-河南省 郑州市 金水区升龙广场A座904',
        //     status: 0
        // },
        // {
        //     id: '_dsdffdafdfdahsdjfhalgerge2',
        //     name: '久卫云2-默认地址',
        //     tel: 18338112210,
        //     address: '河南省 郑州市 金水区-河南省 郑州市 金水区升龙广场A座904',
        //     status: 1
        // },
        // {
        //     id: '_dsdffdafdfdahsdjfhalskdfvsda3',
        //     name: '久卫云3',
        //     tel: 18338112210,
        //     address: '河南省 郑州市 金水区-郑州市 金水区升龙广场A座904',
        //     status: 0
        // },
    ]

    router.get('/getAddress', async ctx => {
        if (code === 200) {
            ctx.body = {
                code: 200,
                message: '获取地址成功',
                data: {
                    list
                },
            }
        } else if (code === 300) {  //否则
            ctx.body = {
                code: 300,
                message: '获取地址失败'
            }
        }
    })

    router.post('/addAddress', async ctx => {
        if (code === 200) {
            list.push({
                id: '_dsdffdafddfsjfhalskdfvsda' + Math.floor(Math.random() * 10),
                name: ctx.request.body.name,
                tel: ctx.request.body.tel,
                address: ctx.request.body.address,
                status: ctx.request.body.status
            })
            ctx.body = {
                code: 200,
                message: '添加地址成功'
            }
        } else if (code === 300) {  //否则
            ctx.body = {
                code: 300,
                message: '添加地址失败'
            }
        }
    })

    router.get('/setDefaultAddress', async ctx => {  //设置默认地址
        if (code === 200) {
            ctx.body = {
                code: 200,
                message: '设置默认地址成功'
            }
        } else if (code === 300) {  //否则
            ctx.body = {
                code: 300,
                message: '设置默认地址失败'
            }
        }
    })
    
}