module.exports = router => {
    router.get('/data/type_num', async ctx => {
        ctx.body = {
            code: 200,
            message: '获取参赛用户总览',
            data: {
                super_join: Math.floor(Math.random() * 1234),
                super_total: 1234,
                top_join: Math.floor(Math.random() * 1357),
                top_total: 1357,
                crown_join: Math.floor(Math.random() * 234),
                crown_total: 234, 
            }
        }
    })

    router.get('/data/day_num', async ctx => {
        const data = {
            hard: 0,
            simple: 0,
            old: 0
        }
        data.hard = Math.floor(Math.random() * 1000)
        data.simple = Math.floor(Math.random() * 1000)
        data.old = Math.floor(Math.random() * 1000)
        ctx.body = {
            code: 200,
            message: '获取当日销售量成功',
            data
        }
    })

    router.get('/data/order_count', async ctx => {
        const hard = [320, 332, 301, 334, 390, 320, 332, 301, 334, 390, 320, 332, 301, 334, 390, 320, 332, 301, 334, 390, 390]
        const simple = [220, 182, 191, 234, 290, 220, 182, 191, 234, 290, 220, 182, 191, 234, 290, 220, 182, 191, 234, 290, 365]
        const old = [150, 232, 201, 154, 190, 150, 232, 201, 154, 190, 150, 232, 201, 154, 190, 150, 232, 201, 154, 190, 123]
        const date = ['10/01', '10/02', '10/03', '10/04', '10/05', '10/06', '10/07', '10/08', '10/09', '10/10', '10/11', '10/12', '10/13', '10/14', '10/15', '10/16', '10/17', '10/18', '10/19', '10/20']
        const random = Math.floor(Math.random() * 20)
        const data = {
            hard: hard.slice(random),
            simple: simple.slice(random),
            old: old.slice(random),
            date: date.slice(random)
        }
        data.date.push('10/XX')
        ctx.body = {
            code: 200,
            message: '获取销售量统计图成功',
            data
        }
    })

    router.get('/data/sales', async ctx => {
        const data = {
            hard: 123 * 350,
            simple: 345 * 175,
            old: 234 * 250
        }
        if (ctx.query.day) {
            data.hard = Math.floor(Math.random() * 1000) * 350
            data.simple = Math.floor(Math.random() * 1000) * 175
            data.old = Math.floor(Math.random() * 1000) * 250
        }
        ctx.body = {
            code: 200,
            message: '获取当日销售额成功',
            data
        }
    })

    router.get('/data/sales_all', async ctx => {
        const hard = [320 * 350, 332 * 350, 301 * 350, 334 * 350, 390 * 350, 320 * 350, 332 * 350, 301 * 350, 334 * 350, 390 * 350, 320 * 350, 332 * 350, 301 * 350, 334 * 350, 390 * 350, 320 * 350, 332 * 350, 301 * 350, 334 * 350, 390 * 350, 390 * 350]
        const simple = [220 * 175, 182 * 175, 191 * 175, 234 * 175, 290 * 175, 220 * 175, 182 * 175, 191 * 175, 234 * 175, 290 * 175, 220 * 175, 182 * 175, 191 * 175, 234 * 175, 290 * 175, 220 * 175, 182 * 175, 191 * 175, 234 * 175, 290 * 175, 365 * 175]
        const old = [150 * 250, 232 * 250, 201 * 250, 154 * 250, 190 * 250, 150 * 250, 232 * 250, 201 * 250, 154 * 250, 190 * 250, 150 * 250, 232 * 250, 201 * 250, 154 * 250, 190 * 250, 150 * 250, 232 * 250, 201 * 250, 154 * 250, 190 * 250, 123 * 250]
        const date = ['10/01', '10/02', '10/03', '10/04', '10/05', '10/06', '10/07', '10/08', '10/09', '10/10', '10/11', '10/12', '10/13', '10/14', '10/15', '10/16', '10/17', '10/18', '10/19', '10/20']
        const random = Math.floor(Math.random() * 20)
        const data = {
            hard: hard.slice(random),
            simple: simple.slice(random),
            old: old.slice(random),
            date: date.slice(random)
        }
        ctx.body = {
            code: 200,
            message: '获取销售额统计图成功',
            data
        }
    })
}