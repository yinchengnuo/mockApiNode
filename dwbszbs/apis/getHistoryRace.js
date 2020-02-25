module.exports = router => {  //获取用户历史参赛信息

    const code = 200

    router.get('/getHistoryRace', async(ctx) => {
        if (code === 200) {
            ctx.body = {
                code: 200,
                message: '获取成功',
                    data: {
                        per_data: {
                            times: 2,  //参赛次数
                            rank: 60,  //当前排名
                            score: 2000,  //当前学分
                            sold_total: 200  //当前销售总数
                        },
                        list: [
                            {
                                season: 17,  //届数
                                score: 600,  //此届获得学分
                                rank: 100  //此届排名
                            },
                            {
                                season: 16,  //届数
                                score: 600,  //此届获得学分
                                rank: 100  //此届排名
                            }
                        ]
                    }
            }
        } else if (code === 300) {  //否则
            ctx.body = {
                code: 300,
                message: '获取失败',
                data: {
                    
                }
            }
        }
    })

}