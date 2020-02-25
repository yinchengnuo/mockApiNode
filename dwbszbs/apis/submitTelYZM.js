module.exports = router => {  //提交手机号和验证码接口

    const code = 200

    router.post('/submitTelYZM', async(ctx) => {  //提交手机验证码接口
        if (code === 200) {  //如果该手机号和验证码匹配正确，生成token返回，同时返回用户信息
            ctx.body = {
                code: 200,
                message: '验证成功',
                data: {  //未报名的普通用户
                    token: 'sdasfasfsdfgsdafdfsa',
                    id: 'idididididididiidididi',
                    session: 18,  //届数
                    name: '久卫云未报名',  //用户名
                    type: 1,  //用户类型
                    grade: '',  //我的年级
                    level_name: '顶级代理',  //用户等级
                    super_name: '久卫云未报名皇冠',  //皇冠代理信息

                    progress: 0,  //经验进度条进度
                    total: 0,  //经验进度条总数

                    signuped: false,  //当前用户是否已经参加比赛

                    score: 0,  //我的学分
                    rank: 0,  //我的排名

                    bonus: 0,  //我的奖学金
                    status: 1,  //当前赛季状态  1 报名阶段  2 比赛阶段  3 兑换礼品阶段
                }
            }
        } else if (code === 300) {  //否则
            ctx.body = {
                code: 300,
                message: '验证码错误'
            }
        } else if (code === 400) {
            ctx.body = {
                code: 400,
                message: '验证码超时'
            }
        }
    })
    
}