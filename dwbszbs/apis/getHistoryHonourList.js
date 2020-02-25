module.exports = router => {  //获取历史赛季用户荣誉信息

    const code = 200

    router.get('/getHistoryHonourList', async(ctx) => {
        if (code === 200) {
            ctx.body = {
                code: 200,
                message: '获取历史赛季用户荣誉信息成功',
                data: {
                    list: [
                        {
                            season: 17,
                            score: 2000,
                            rank: 500,
                            deg: 6,
                            timestamp: 1569304984556
                        },
                        {
                            season: 16,
                            score: 2000,
                            rank: 500,
                            deg: 5,
                            timestamp: 1569304984556
                        }
                    ]
                }
            }
        } else if (code === 300) {  //否则
            ctx.body = {
                code: 300,
                message: '获取历史赛季用户荣誉信息失败',
                data: {
                    
                }
            }
        }
    })

}