const axios = require('axios')

module.exports = router => {  //app初始化接口

    const code = 200

    router.get('/onLaunch', async(ctx) => {
        // const session = await axios.get(`https://api.weixin.qq.com/sns/jscode2session?appid=wx0348d5a266f867a3&secret=7863739406f9e491225a94fe4bea17f0&js_code=${ctx.request.body.code}&grant_type=authorization_code`)
        if (code === 200) {  //如果微信已经绑定手机号
            ctx.body = {
                code: 200,
                message: '登陆成功',
                // data: {  //已报名的普通用户
                //     token: 'sdasfasfsdfgsdafdfsa',
                //     id: 'idididididididiidididi',
                //     season: 18,  //届数
                //     name: '久卫云已报名',  //用户名
                //     type: 1,  //用户类型
                //     grade: '大学班',  //我的年级
                //     level_name: '顶级代理',  //用户等级
                //     super_name: '久卫云已报名上级',  //皇冠代理信息

                //     progress: 2345,  //经验进度条进度
                //     total: 3000,  //经验进度条总数

                //     signuped: true,  //当前用户是否已经参加比赛

                //     score: 2000,  //我的学分
                //     rank: 500,  //我的排名

                //     bonus: 2000,  //我的奖学金
                //     status: 3,  //当前赛季状态  1 报名阶段  2 比赛阶段  3 兑换礼品阶段
                // },
                data: {  //未报名的普通用户
                    token: 'sdasfasfsdfgsdafdfsa',
                    id: 'idididididididiidididi',
                    season: 18,  //届数
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
                },
                // data: {  //皇冠用户
                //     token: 'sdasfasfsdfgsdafdfsa',
                //     id: 'idididididididiidididi',
                //     season: 18,  //届数
                //     name: '久卫云皇冠',  //用户名
                //     type: 2,  //用户类型
                //     grade: '',  //我的年级
                //     level_name: '皇冠代理',  //用户等级
                //     super_name: '',  //皇冠代理信息

                //     progress: 0,  //经验进度条进度
                //     total: 0,  //经验进度条总数

                //     signuped: false,  //当前用户是否已经参加比赛

                //     score: 2345,  //我的学分
                //     rank: 54,  //我的排名

                //     bonus: 0,  //我的奖学金
                //     status: 1,  //当前赛季状态  1 报名阶段  2 比赛阶段  3 兑换礼品阶段
                // },
                // data: {  //政委
                //     token: 'sdasfasfsdfgsdafdfsa',
                //     id: 'idididididididiidididi',
                //     season: 18,  //届数
                //     name: '久卫云政委',  //用户名
                //     type: 3,  //用户类型
                //     grade: '',  //我的年级
                //     level_name: '政委',  //用户等级
                //     super_name: '',  //皇冠代理信息

                //     progress: 0,  //经验进度条进度
                //     total: 0,  //经验进度条总数

                //     signuped: false,  //当前用户是否已经参加比赛

                //     score: 0,  //我的学分
                //     rank: 0,  //我的排名

                //     bonus: 0,  //我的奖学金
                //     status: 2,  //当前赛季状态  1 报名阶段  2 比赛阶段  3 兑换礼品阶段
                // }
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