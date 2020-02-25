module.exports = router => {

    const list = [
        {
            id: 1,
            integral: 20,
            name: '华为M20',
            introduction: '华为，你值得拥有',
            gift_num: 100 ,
            imgurl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3377305619,2392780715&fm=26&gp=0.jpg',
            exchange_num: 30,
            status: true
        },
        {
            id: 2,
            integral: 20,
            name: '华为M20',
            introduction: '华为，你值得拥有',
            gift_num: 100 ,
            imgurl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3377305619,2392780715&fm=26&gp=0.jpg',
            exchange_num: 30,
            status: true
        },
        {
            id: 3,
            integral: 20,
            name: '华为M20',
            introduction: '华为，你值得拥有',
            gift_num: 100 ,
            imgurl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3377305619,2392780715&fm=26&gp=0.jpg',
            exchange_num: 30,
            status: true
        },
    ]

    router.get('/gift/show_gift', async ctx => {
        ctx.body = {
            code: 200,
            message: '获取礼品列表成功',
            data: {
                list
            }
        }
    })

    router.get('/gift/del_gift', async ctx => {
        ctx.body = {
            code: 200,
            message: '删除礼品成功'
        }
    })

    router.post('/gift/add_gift', async ctx => {
        list.push({
            id: Math.floor(Math.random() * 10),
            integral: 20,
            name: '华为M20',
            introduction: '华为，你值得拥有',
            gift_num: 100 ,
            imgurl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3377305619,2392780715&fm=26&gp=0.jpg',
            exchange_num: 30,
            status: true
        })
        ctx.body = {
            code: 200,
            message: '添加礼品成功',

        }
    })

    router.post('/gift/update_gift', async ctx => {
        ctx.body = {
            code: 200,
            message: '礼品修改成功',
        }
    })

}