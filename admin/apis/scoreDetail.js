module.exports = router => {

    const list = []
    for(let i = 0; i < 2000; i ++) {
        list.push({
            time: 1571882092702 + Math.floor(Math.random() * 1000),hard: 1, // 学分生成时间
            type: 1, // 学分类型
            score: 20, // 数量
            nickname: '张三',
            phone: 18333333333,
            level_name: '顶级代理'
        })
        if (i % 3 === 0) {
            list[i].type = 1
        } else if (i % 3 === 1) {
            list[i].type = 2
        } else if (i % 3 === 2) {
            list[i].type = 3
            list[i].score *= -1
        }
    }

    router.get('/score/all', async ctx => {
        ctx.body = {
            code: 200,
            message: '获取学分列表成功',
            data: {
                total: 2000,
                list: list.slice((ctx.query.page - 1) * 15, (ctx.query.page - 1) * 15 + 15)
            }
        }
    })

    router.get('/score/search', async ctx => {
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