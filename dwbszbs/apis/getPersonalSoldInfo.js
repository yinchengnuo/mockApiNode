module.exports = router => {  //获取个人卖货信息接口

    const code = 200

    router.get('/getPersonalSoldInfo', async(ctx) => {
        if (code === 200) {  
            ctx.body = {
                code: 200,
                message: '登陆成功',
                    data: {  
                        name: '久卫云卖货数据',  //用户名
                        avatar: 'https://wx.qlogo.cn/mmopen/vi_32/tBzhvjhRp2ZFqw1RDX1riaqvY8NoHyS4JMmPDMibtOZ9PNgg36jVvCrDFCN8zoiaXicSfOoXqIoGenLcN5BXjvKHXQ/132',
                        grade: '大学班',  //我的年级
                        level_name: '顶级代理',  //用户等级
                        
                        progress: 2345,  //经验进度条进度
                        total: 3000,  //经验进度条总数
                        score: 2000,  //学分

                        score_today: 600,  //今日获得学分
                        score_send: 100,  //奖励学分
                        sold_today: 20,  //今日销售数量

                        rank: 500,  //排名
                        sold_data: {
                            categories: ['9/1', '9/2', '9/3', '9/4', '9/5', '9/6', '9/7', '9/8', '9/9', '9/10', '9/11', '9/12', '9/13', '9/14', '9/15', '9/16', '9/17', '9/18', '9/19'],
                            series: [
                                {
                                    data: [20, 15, 31, 14, 10, 24, 12, 16, 34, 28, 13, 12, 12, 24, 28, 10, 17, 26, 27]
                                }
                            ]
                        }
                }
            }
        } else if (code === 300) {  //否则
            ctx.body = {
                code: 300,
                message: '该微信用户未绑定手机',
                data: {
                    'access_token': ''
                }
            }
        }
    })

}