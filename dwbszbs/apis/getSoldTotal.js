module.exports = router => {  //获取季度卖货总量接口

    const code = 200

    router.get('/getSoldTotal', async(ctx) => {
        if (code === 200) {
            ctx.body = {
                code: 200,
                message: '获取季度卖货总量成功',
                    data: {
                        session: ctx.query.session ? ctx.query.session : 18,  //当前届数
                        sold_data: {
                            series: [
                                {
                                    name: '精装版',
                                    data: Math.floor(Math.random() * 10000)
                                }, 
                                {
                                    name: '简约版',
                                    data: Math.floor(Math.random() * 10000)
                                }, 
                                {
                                    name: '老人版',
                                    data: Math.floor(Math.random() * 10000)
                                },
                            ]
                        }
                }
            }
        } else if (code === 300) {  //否则
            ctx.body = {
                code: 300,
                message: '获取季度卖货总量失败',
                data: {
                    
                }
            }
        }
    })

}