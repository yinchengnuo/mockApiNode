module.exports = router => {

    router.get('/setting/status', async ctx => {
        ctx.body = {
            code: 200,
            message: '获取赛季状态成功',
            data: {
                set: true,
                season: 18
            }
        }
    })

    router.post('/setting/time', async ctx => {
        ctx.body = {
            code: 200,
            message: '设置赛季基本情况成功'
        }
    })

    let list = [
        'https://api.jiuweiyun.cn/public/uploads/banner/banner_1.png',
        'https://api.jiuweiyun.cn/public/uploads/banner/banner_2.png',
        'https://api.jiuweiyun.cn/public/uploads/banner/banner_3.png',
        'https://api.jiuweiyun.cn/public/uploads/banner/banner_4.png'
    ]
    router.get('/setting/bannerlist', async ctx => {
        ctx.body = {
            code: 200,
            message: '获取banner列表成功',
            data: {
                list
            }
        }
    })

    router.post('/setting/bannerset', async ctx => {
        list.reverse()
        ctx.body = {
            code: 200,
            message: '更改banner图成功'
        }
    })

}