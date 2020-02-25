module.exports = router => {

    const list = []
    for(let i = 0; i < 2000; i ++) {
        list.push({
            id: i + 1,
            nickname: '张三' + (i + 1),
            phone: 18333333333 + i,
            level_name: '特级代理',
            up_name: '上级代理',
            war_name: 'A',
            status: 0,
            time: 1352658745123,
            refunded: true,
            pay_order_num: 1853658458951,
            refund_order_num: 1853658458951
        })
        if (i % 2 === 0) {
            list[i].status = 2
            list[i].refunded = !list[i].refunded
            list[i].refund_order_num = ''
        }
    }



    router.get('/signup/user_all', async ctx => {
        ctx.body = {
            code: 200,
            message: '获取用户列表成功',
            data: {
                total: 2000,
                list: list.slice((ctx.query.page - 1) * 15, (ctx.query.page - 1) * 15 + 15)
            }
        }
    })

    router.get('/signup/download', async ctx => {
        ctx.body = {
            code: 200,
            message: '获取所有列表成功',
            data: {
                total: 2000,
                list
            }
        }
    })

    router.get('/signup/user_search', async ctx => {
        ctx.body = {
            code: 200,
            message: '获取用户列表成功',
            data: {
                total: 1,
                list: [
                    {
                        id: 666,
                        nickname: '张三666',
                        phone: 18333333333,
                        level_name: '特级代理',
                        disq: false,
                        time: 1352658745123,
                        refunded: true,
                        pay_order_num: 1853658458951,
                        refund_order_num: 1853658458951
                    }
                ]
            }
        }
    })

    router.get('/signup/user_update', async ctx => {
        ctx.body = {
            code: 200,
            message: '取消用户比赛资格成功'
        }
    })

    router.get('/signup/user_refund', async ctx => {
        ctx.body = {
            code: 200,
            message: '退款成功'
        }
    })

}