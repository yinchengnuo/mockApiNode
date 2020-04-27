module.exports = router => {

    const total = 1234
    const list = []
    for(let i = 0; i < total; i ++) {
        list.push({
            id: Date.now().toString().split('').sort(() => Math.random() - 0.5).join(''),
            order_num: Date.now().toString().split('').sort(() => Math.random() - 0.5).join(''),
            time: '2020-04-20 06 : 30',
            nickname: '张三',
            avatar: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3256100974,305075936&fm=26&gp=0.jpg',
            shop: '大SAO旗舰店',
            name: '大蒜',
            num: 20,
            unit: '吨',
            price: '999999',
            value: '初创期的产品，可能是1.0版本，甚至是0.1版本，这时期的产品，来源于产品经理对市场上存在的用户需求的理解，譬如说，工具类产品，手机上有摄像头，提供了用户可以拍照的场景，而用户拍照之后，就需要美化，所以滤镜类产品就是一个基本的用户需求，再往里挖，人像类的还需要磨皮、美白、红唇之类的效果。而你一旦看到一个简单产品开始叠加更多的功能，往往意味着产品结束了初创期，开始进入发展期。',
            imgList: [
                'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2998671514,611303141&fm=26&gp=0.jpg',
                'https://t7.baidu.com/it/u=378254553,3884800361&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1588041384&t=4e98396b9ea3c2df9f505b4f5436b739',
                'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2998671514,611303141&fm=26&gp=0.jpg',
                'https://t7.baidu.com/it/u=378254553,3884800361&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1588041384&t=4e98396b9ea3c2df9f505b4f5436b739',
                'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2998671514,611303141&fm=26&gp=0.jpg',
                'https://t7.baidu.com/it/u=378254553,3884800361&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1588041384&t=4e98396b9ea3c2df9f505b4f5436b739',
                'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2998671514,611303141&fm=26&gp=0.jpg',
                'https://t7.baidu.com/it/u=378254553,3884800361&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1588041384&t=4e98396b9ea3c2df9f505b4f5436b739'
            ],
            voice: i % 2 === 0 ? 'https://www.w3school.com.cn/i/horse.ogg' : '',
            voiceText: i % 2 === 0 ? '语音识别结果，语音识别结果，语音识别结果，语音识别结果。' : '',
            reply: '您好，您的建议我们已经收到，感谢您 的反馈。',
            address: '河南省郑州市',
            remark: '快发货，我要吃亿吨好的'
        })
    }

    router.get('/query/list', async ctx => {
        ctx.body = {
            code: 200,
            message: '获取意见反馈列表成功',
            data: {
                total,
                list: list.slice((ctx.query.page - 1) * ctx.query.size, (ctx.query.page - 1) * ctx.query.size + +ctx.query.size)
            }
        }
    })

}