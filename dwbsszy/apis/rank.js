module.exports = router => {  //获取排行榜

    const total = 123
    const size = 20
    const user = {
        rank: 123,
        num: 2000,
        float: 10
    }
    const random = () => Math.floor(Math.random() * 100)
    const makeList = name => {
        const list = new Array(total).fill(0);
        list.forEach((e, i) => {
            list[i] = {
                id: String(Date.now() + Math.floor(Math.random() * (10 ** 16))),
                nickname: name + (i + 1),
                num: list.length - i,
                avatar: 'https://img.52z.com/upload/news/image/20190220/20190220020008_83722.jpg',
                float: (Math.random() - 0.5 > 0) ? 0 - random() : 0 + random()
            }
        })
        return list
    }

    const rank = makeList('排行榜')

    router.get('/rank', async ctx => {
        const page = ctx.query.page;
        ctx.body = {
            code: 200,
            message: '获取排行榜成功',
            data: {
                per_data: user,
                total,
                size,
                list: rank.slice(size * (page - 1), size * (page - 1) + 20)
            },
        }
    })
    
}