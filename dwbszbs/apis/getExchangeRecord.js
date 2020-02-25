module.exports = router => {  //获取礼品兑换记录

    const code = 200

    router.get('/getExchangeRecord', async(ctx) => {
        if (code === 200) {
            ctx.body = {
                code: 200,
                message: '获取礼品兑换记录成功',
                data: {
                    list: [
                        {
                            cost: 600, //花费的奖励金
                            timestamp: '1567466974596',
                            name: '智能手表电话蓝牙手环'
                        },
                        {
                            cost: 600, //花费的奖励金
                            timestamp: '1567466974596',
                            name: '智能手表电话蓝牙手环'
                        },
                        {
                            cost: 600, //花费的奖励金
                            timestamp: '1567466974596',
                            name: '智能手表电话蓝牙手环'
                        },
                        {
                            cost: 600, //花费的奖励金
                            timestamp: '1567466974596',
                            name: '智能手表电话蓝牙手环'
                        },
                        {
                            cost: 600, //花费的奖励金
                            timestamp: '1567466974596',
                            name: '智能手表电话蓝牙手环'
                        }
                    ]
                }
            }
        } else if (code === 300) {  //否则
            ctx.body = {
                code: 300,
                message: '获取礼品兑换记录失败',
                data: {
                    
                }
            }
        }
    })

}