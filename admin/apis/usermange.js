module.exports = router => {

    const list = []
    for(let i = 0; i < 2000; i ++) {
        list.push({
            id: i + 1,
            nickname: '张三' + (i + 1),
            phone: 18333333333 + i,
            level_name: '特级代理',
            up_name: '李四',
            up_phone: 18333333333,
            integral: 8888 - i,
            rank: 1 + i
        })
    }

    router.get('/admin/user_all', async ctx => {
        ctx.body = {
            code: 200,
            message: '获取用户列表成功',
            data: {
                total: 2000,
                list: list.slice((ctx.query.page - 1) * 15, (ctx.query.page - 1) * 15 + 15)
            }
        }
    })

    router.get('/admin/user_search', async ctx => {
        ctx.body = {
            code: 200,
            message: '获取用户列表成功',
            data: {
                total: 1,
                list: [
                    {
                        id: 666,
                        nickname: '王五',
                        phone: ctx.query.phone,
                        level_name: '特级代理',
                        up_name: '李四',
                        integral: 6543,
                        rank: 1245
                    }
                ]
            }
        }
    })

    router.post('/admin/user_update', async ctx => {
        ctx.body = {
            code: 200,
            message: '编辑成功'
        }
    })

    router.get('/userindex/info', async ctx => {
        ctx.body = {
            code: 200,
            message: '获取用户信息成功',
            data: {
                id: ctx.query.id,
                nickname: '命中注定',
                avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
                name: '尹成诺',
                phone: 18338112210,
                level_name: '特级代理',
                up_name: '李四'
            }
        }
    })

    router.get('/userindex/sold', async ctx => {
        ctx.body = {
            code: 200,
            message: '获取用户数据成功',
            data: {
                total_order: 30,
                total_sales: 6000,
                total_score: 3000,
                today_score: 1000,
                yes_score: 2100,
                hard_num: 10,
                simple_num: 60,
                old_num: 30,
                today_num: 5,
                yes_num: 8
            }
        }
    })

    router.get('/userindex/address', async ctx => {
        ctx.body = {
            code: 200,
            message: '获取用户地址成功',
            data: {
                list: [
                    {
                        id: 1,
                        phone: 18338112210,
                        name: '尹成诺',
                        address: '河南省 郑州市 金水区-河南省郑州市金水区众旺路与祥盛街交叉口西北150米',
                        status: 1
                    },
                    {
                        id: 2,
                        phone: 18338112210,
                        name: '尹成诺',
                        address: '河南省 郑州市 金水区-客文一街与七里河围合处',
                        status: 0
                    },
                    {
                        id: 3,
                        phone: 18338112210,
                        name: '尹成诺',
                        address: '河南省 郑州市 金水区-金水东路21号',
                        status: 0
                    }
                ]
            }
        }
    })

    router.get('/userindex/order', async ctx => {
        ctx.body = {
            code: 200,
            message: '获取用户订单成功',
            data: {
                list: [
                    {
                        id: 123,
                        time: 1571882092702 + Math.floor(Math.random() * 1000),
                        gift_name: '华为p30',
                        gift_num: 2,
                        username: '李四',
                        phone: 18333333333 + Math.floor(Math.random() * 1000),
                        address: '河南省 郑州市 金水区-河南省郑州市金水区众旺路与祥盛街交叉口西北150米',
                        status: true,
                        express_order: 183325635968785 + Math.floor(Math.random() * 1000)
                    },
                    {
                        id: 456,
                        time: 1571882092702 + Math.floor(Math.random() * 1000),
                        gift_name: '华为p30',
                        gift_num: 2,
                        username: '李四',
                        phone: 18333333333 + Math.floor(Math.random() * 1000),
                        address: '河南省 郑州市 金水区-河南省郑州市金水区众旺路与祥盛街交叉口西北150米',
                        status: false
                    },
                    {
                        id: 789,
                        time: 1571882092702 + Math.floor(Math.random() * 1000),
                        gift_name: '华为p30',
                        gift_num: 2,
                        username: '李四',
                        phone: 18333333333 + Math.floor(Math.random() * 1000),
                        address: '河南省 郑州市 金水区-河南省郑州市金水区众旺路与祥盛街交叉口西北150米',
                        status: true,
                        express_order: 183325635968785 + Math.floor(Math.random() * 1000)
                    },
                ]
            }
        }
    })

}