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

    router.get('/team/all', async ctx => {
        ctx.body = {
            code: 200,
            message: '获取战区皇冠成功',
            data: {
                list: [
                    {
                        war_name: 'A',
                        service: '小龙女',
                        crowns: [ // 战区所有的皇冠
                            {
                                id: '0',
                                name: '皇冠名称A1',
                                phone: 18333323443
                            },
                            {
                                id: '1',
                                name: '皇冠名称A2',
                                phone: 18333323432
                            }
                        ]
                    },
                    {
                        war_name: 'B',
                        service: '杨过',
                        crowns: [ // 战区所有的皇冠
                            {
                                id: '1423',
                                name: '皇冠名称B1',
                                phone: 18333342344
                            },
                            {
                                id: '444',
                                name: '皇冠名称B2',
                                phone: 183333234234
                            }
                        ]
                    }
                ]
            }
        }
    })

    router.get('/team/list', async ctx => {
        ctx.body = {
            code: 200,
            message: '获取团队列表成功',
            data: {
                total: 200,
                top_num: Math.floor(Math.random() * 10000),
                super_num: Math.floor(Math.random() * 10000),
                list: list.slice((ctx.query.page - 1) * 15, (ctx.query.page - 1) * 15 + 15)
            }
        }
    })

}