module.exports = router => {

    const list = []
    for(let i = 0; i < 2000; i ++) {
        list.push({
            nickname: '张三',
            phone: 18333333333,
            bonus_all: 3000, // 奖学金总数
            bonus_sup: 3000, // 奖学金剩余
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

    router.get('/bonus/all', async ctx => {
        ctx.body = {
            code: 200,
            message: '获取奖学金列表成功',
            data: {
                total: 2000,
                list: list.slice((ctx.query.page - 1) * 15, (ctx.query.page - 1) * 15 + 15)
            }
        }
    })

    router.get('/bonus/search', async ctx => {
        ctx.body = {
            code: 200,
            message: '搜索奖学金列表成功',
            data: {
                total: 5,
                list: list.slice(20, 25)
            }
        }
    })

}