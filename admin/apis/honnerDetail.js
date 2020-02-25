module.exports = router => {

    const list = []
    for(let i = 0; i < 2000; i ++) {
        list.push({
            type: 1, // 荣誉类型
            rank: i + 1,
            score: 20, // 学分
            bonus: 123,
            nickname: '张三',
            phone: 18333333333,
            level_name: '顶级代理'
        })
        if (i % 6 === 0) {
            list[i].type = 1
        } else if (i % 6 === 1) {
            list[i].type = 2
        } else if (i % 6 === 2) {
            list[i].type = 3
        } else if (i % 6 === 3) {
            list[i].type = 4
        } else if (i % 6 === 4) {
            list[i].type = 5
        } else if (i % 6 === 5) {
            list[i].type = 6
        }
    }

    router.get('/glory/all', async ctx => {
        ctx.body = {
            code: 200,
            message: '获取学分列表成功',
            data: {
                total: 2000,
                list: list.slice((ctx.query.page - 1) * 15, (ctx.query.page - 1) * 15 + 15)
            }
        }
    })

    router.get('/glory/search', async ctx => {
        ctx.body = {
            code: 200,
            message: '搜索学分列表成功',
            data: {
                total: 5,
                list: list.slice(20, 25)
            }
        }
    })

}