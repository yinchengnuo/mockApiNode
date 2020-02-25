module.exports = router => {

    const list = []
    for(let i = 0; i < 2000; i ++) {
        list.push({
            id: i,
            time: 1571882092702 + Math.floor(Math.random() * 1000),
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572330350140&di=fc04b73a31e9005f9e660b10b4f62bcd&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170701%2F179f2cd0d70a446a82b2f31488cf94b9.png',
            hard: 1,
            simple: 0,
            old: 1,
            money: 123,
            order_num: 13256854582123,
            score: 20,
            nickname: '张三',
            phone: 18333333333,
            type: 0,
            remark: '时间不符合不符合'
        })
        if (i % 2 === 1) {
            list[i].img = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572330514178&di=3e9a23b880879d646cbaa262f020349f&imgtype=0&src=http%3A%2F%2Fwww.hi.chinanews.com.cn%2Fhnnew%2F2018-05-15%2FU57P16T1D462314F10DT20180515102808.jpg'
            list[i].type = '黄老邪'
        }
    }

    router.get('/upload/succ', async ctx => {
        ctx.body = {
            code: 200,
            message: '获取上传成功图片列表成功',
            data: {
                total: 2000,
                list: list.slice((ctx.query.page - 1) * 15, (ctx.query.page - 1) * 15 + 15)
            }
        }
    })

    router.get('/upload/fail', async ctx => {
        ctx.body = {
            code: 200,
            message: '获取上传失败图片列表成功',
            data: {
                total: 2000,
                list: list.slice((ctx.query.page - 1) * 15, (ctx.query.page - 1) * 15 + 15)
            }
        }
    })

    router.get('/upload/search', async ctx => {
        ctx.body = {
            code: 200,
            message: '搜索上传图片列表成功',
            data: {
                total: 5,
                list: list.slice(20, 25)
            }
        }
    })

    router.post('/upload/judge', async ctx => {
        ctx.body = {
            code: 200,
            message: '判定订单成功'
        }
    })

    router.post('/upload/adj_score', async ctx => {
        ctx.body = {
            code: 200,
            message: '修改学分成功'
        }
    })

    router.post('/humanreview/revirew', async ctx => {
        ctx.body = {
            code: 200
        }
    })

    const rank = []
    for(let i = 0; i < 2000; i ++) {
        rank.push({
            nickname: '张三' + i,
            phone: 18333333333 + i,
            up_name: '皇冠' + i,
            war_name: 'A' + i,
            hard: i,
            simple: i, 
            old: i,
            start: 1570723200000,
            end: 1570723200000
        })
    }

    router.get('/download/excel', async ctx => {
        ctx.body = {
            code: 200,
            data: {
                list: rank
            }
        }
    })

}