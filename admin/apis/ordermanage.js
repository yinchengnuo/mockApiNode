module.exports = router => {

    const listnosend = []
    for(let i = 0; i < 2000; i ++) {
        listnosend.push({
            order_num: i + 1,
            time: 1571882092702 + Math.floor(Math.random() * 1000),
            gift_name: '华为p30',
            gift_num: 2,
            username: '李四',
            phone: 18333333333 + Math.floor(Math.random() * 1000),
            address: '河南省 郑州市 金水区-河南省郑州市金水区众旺路与祥盛街交叉口西北150米',
            addressid: 666,
            status: false,
            bonus: 1000
        })
    }

    const listsended = []
    for(let i = 0; i < 1000; i ++) {
        listsended.push({
            order_num: i + 1,
            time: 1571882092702 + Math.floor(Math.random() * 1000),
            gift_name: '华为p30',
            gift_num: 2,
            username: '李四',
            phone: 18333333333 + Math.floor(Math.random() * 1000),
            address: '河南省 郑州市 金水区-河南省郑州市金水区众旺路与祥盛街交叉口西北150米',
            status: true,
            express_order: 183325635968785 + Math.floor(Math.random() * 1000),
            bonus: 1000
        })
    }

    router.get('/order/nosend', async ctx => {
        ctx.body = {
            code: 200,
            message: '获取未发货列表成功',
            data: {
                total: 2000,
                list: listnosend.slice((ctx.query.page - 1) * 15, (ctx.query.page - 1) * 15 + 15)
            }
        }
    })

    router.get('/order/sended', async ctx => {
        ctx.body = {
            code: 200,
            message: '获取已发货列表成功',
            data: {
                total: 1000,
                list: listsended.slice((ctx.query.page - 1) * 15, (ctx.query.page - 1) * 15 + 15)
            }
        }
    })

    router.get('/order/search', async ctx => {
        let list = []
        if (+ctx.query.status === 0) {
            list = listnosend.slice(20, 26)
        } else {
            list = listsended.slice(20, 26)
        }
        ctx.body = {
            code: 200,
            message: '获取搜索列表成功',
            data: {
                total: 16,
                list
            }
        }
    })

    router.post('/order/send', async ctx => {
        ctx.body = {
            code: 200,
            message: '发货成功'
        }
    })

    router.post('/order/address_update', async ctx => {
        ctx.body = {
            code: 200,
            message: '修改地址成功'
        }
    })

}