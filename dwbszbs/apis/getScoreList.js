module.exports = router => {  //获取学分账单接口

    const code = 200

    const list = [
        {
            timestamp: '1569476974596',
            type: 1,
            num: 30
        },
        {
            timestamp: '1569476974596',
            type: 2,
            num: 30
        },
        {
            timestamp: '1569476974596',
            type: 1,
            num: 30
        },
        {
            timestamp: '1569476974596',
            type: 2,
            num: 30
        },
        {
            timestamp: '1569476974596',
            type: 1,
            num: 30
        },
        {
            timestamp: '1569476974596',
            type: 2,
            num: 30
        },
        {
            timestamp: '1569476974596',
            type: 1,
            num: 30
        },
        {
            timestamp: '1569476974596',
            type: 2,
            num: 30
        },
        {
            timestamp: '1569476974596',
            type: 1,
            num: 30
        },
        {
            timestamp: '1569476974596',
            type: 2,
            num: 30
        },
        {
            timestamp: '1569476974596',
            type: 1,
            num: 30
        },
        {
            timestamp: '1569476974596',
            type: 1,
            num: 30
        },
        {
            timestamp: '1569476974596',
            type: 1,
            num: 30
        },
        {
            timestamp: '1569476974596',
            type: 1,
            num: 30
        },
        {
            timestamp: '1569476974596',
            type: 1,
            num: 30
        },
        {
            timestamp: '1569476974596',
            type: 1,
            num: 30
        },
        {
            timestamp: '1569476974596',
            type: 1,
            num: 30
        },
        {
            timestamp: '1569476974596',
            type: 1,
            num: 30
        },
        {
            timestamp: '1569476974596',
            type: 1,
            num: 30
        },
        {
            timestamp: '1569476974596',
            type: 1,
            num: 30
        },
        {
            timestamp: '1569476974596',
            type: 1,
            num: 30
        },
        {
            timestamp: '1569476974596',
            type: 1,
            num: 30
        }
    ]

    router.get('/getScoreList', async(ctx) => {
        if (ctx.query.page == 2) {
            list.pop()
            list.pop()
            list.pop()
            list.pop()
            list.pop()
            list.pop()
            list.pop()
            list.pop()
        }
        if (code === 200) {
            ctx.body = {
                code: 200,
                message: '获取学分账单',
                data: {
                    list
                },
            }
        } else if (code === 300) {  //否则
            ctx.body = {
                code: 300,
                message: '获取学分账单失败',
                data: {
                    list: []
                }
            }
        }
    })
    
}