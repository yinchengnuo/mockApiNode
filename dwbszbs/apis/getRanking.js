module.exports = router => {  //获取排行榜

    const max = 700
    const size = 20
    const user = {
        rank: 123,
        score: 2000,
        float: 10
    }
    const random = () => Math.floor(Math.random() * 100)
    const makeList = name => {
        const list = new Array(max).fill(0);
        list.forEach((e, i) => {
            list[i] = {
                id: Date.now() + '' + Math.floor(Math.random() * 1000000),
                name: name + (i + 1),
                score: list.length - i,
                avatar: 'https://img.52z.com/upload/news/image/20190220/20190220020008_83722.jpg',
                float: (Math.random() - 0.5 > 0) ? 0 - random() : 0 + random()
            }
        })
        return list
    }

    const Tperson = makeList('今日个人榜')
    const Tcrown = makeList('今日皇冠榜')
    const Tteam = makeList('今日团队榜')
    const Twar = makeList('今日战区榜')
    const Yperson = makeList('昨日个人榜')
    const Ycrown = makeList('昨日皇冠榜')
    const Yteam = makeList('昨日团队榜')
    const Ywar = makeList('昨日战区榜')

    router.get('/todayPerson', async ctx => {
        const page = ctx.query.page;
        ctx.body = {
            code: 200,
            message: '获取今日个人榜成功',
            data: {
                per_data: user,
                list: Tperson.slice(size * (page - 1), size * (page - 1) + 20)
            },
        }
    })

    router.get('/todayCrown', async ctx => {
        const page = ctx.query.page;
        ctx.body = {
            code: 200,
            message: '获取今日皇冠榜成功',
            data: {
                per_data: user,
                list: Tcrown.slice(size * (page - 1), size * (page - 1) + 20)
            },
        }
    })

    router.get('/todayTeam', async ctx => {
        const page = ctx.query.page;
        ctx.body = {
            code: 200,
            message: '获取今日团队榜成功',
            data: {
                per_data: user,
                list: Tteam.slice(size * (page - 1), size * (page - 1) + 20)
            },
        }
    })

    router.get('/todayWar', async ctx => {
        const page = ctx.query.page;
        ctx.body = {
            code: 200,
            message: '获取今日战区榜成功',
            data: {
                per_data: user,
                list: Twar.slice(size * (page - 1), size * (page - 1) + 20)
            },
        }
    })

    router.get('/yesterdayPerson', async ctx => {
        const page = ctx.query.page;
        ctx.body = {
            code: 200,
            message: '获取昨日个人榜成功',
            data: {
                per_data: user,
                list: Yperson.slice(size * (page - 1), size * (page - 1) + 20)
            },
        }
    })

    router.get('/yesterdayCrown', async ctx => {
        const page = ctx.query.page;
        ctx.body = {
            code: 200,
            message: '获取昨日皇冠榜成功',
            data: {
                per_data: user,
                list: Ycrown.slice(size * (page - 1), size * (page - 1) + 20)
            },
        }
    })

    router.get('/yesterdayTeam', async ctx => {
        const page = ctx.query.page;
        ctx.body = {
            code: 200,
            message: '获取昨日团队榜成功',
            data: {
                per_data: user,
                list: Yteam.slice(size * (page - 1), size * (page - 1) + 20)
            },
        }
    })

    router.get('/yesterdayWar', async ctx => {
        const page = ctx.query.page;
        ctx.body = {
            code: 200,
            message: '获取昨日战区榜成功',
            data: {
                per_data: user,
                list: Ywar.slice(size * (page - 1), size * (page - 1) + 20)
            },
        }
    })
    
}