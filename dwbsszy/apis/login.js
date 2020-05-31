module.exports = router => {  //登陆接口

    router.get('/login/wechat_login', async ctx => {
        ctx.body = {
            // code: 200,
            // message: '登陆成功',
            code: 200,
            message: '登陆成功',
            data: {
                token: 'sdfsdfsd'
            }
        }
    })

    router.get('/user/get_info', async ctx => {
        ctx.body = {
            // code: 200,
            // message: '登陆成功',
            code: 300,
            message: '手机号未绑定',
            data: {
                avatar: "https://wx.qlogo.cn/mmopen/vi_32/VOicldicvPVADT9wV9JHPia2hTib1DUjWU5d8C39FBOBaWibTomskLM4Z4IadC9gWP37ib1Ie3GZzdS9joXrVkuMJc7g/132",
                code: "521520521520",
                end_time: "2020-05-23 17:57:41",
                level: "销售主管",
                link: "sssssssssss",
                link_img: "https://api.szy.jiuweiyun.cn/img.png",
                live_end_time: "2020-02-11 00:00:00",
                live_start_time: "2020-02-11 00:00:00",
                money: 0.01,
                nickname: "忙着长大",
                openid: "opUPJ5fl9SGO2xtUvu6AkrozDqJU",
                phone: "18338112210",
                season: 1,
                sign_end_time: "2020-05-21 00:00:00",
                sign_start_time: "2020-05-20 00:00:00",
                sign_up: true,
                start_time: "2020-05-21 17:57:41",
                status: 3,
            }
        }
    })

    router.get('/code', async ctx => {
        ctx.body = {
            code: 200,
            message: '获取成功'
        }
    })

    router.get('/bind', async ctx => {
        ctx.body = {
            code: 200,
            message: '手机绑定成功',
            data: {
                openid: '02303k1L0xdsTb2GTv2L0Llh1L003k1w',
                token: 'dsfsdfsd',
                nickname: '忙着长大',
                avatar: '',
                phone: '18333333333',
                level: '皇冠代理',
                sign_up: false,
                sign_start_time: '2020-15-20',
                sign_end_time: '2020-15-22',
                start_time: '2020-15-24',
                end_time: '2020-15-26',
                live_start_time: '2020-15-29',
                live_end_time: '2020-15-31',
                status: 0,
                money: '39',
                link: 'https://baidu.com',
                link_img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2352327419,3530228194&fm=11&gp=0.jpg',
                code: 'Y25312T4552'
            }
        }
    })
    
}