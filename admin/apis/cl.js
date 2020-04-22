module.exports = router => {

    const total = 200
    const size = 5
    const list = []
    for(let i = 0; i < total; i ++) {
        list.push({
            id: Date.now(),
            channel: i % 2 === 0 ? '大卫博士' : '渠道',
            sex: i % 2 === 0 ? 1 : 2,
            time: '2020-04-20 06 : 30',
            nickname: '张三',
            avatar: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3256100974,305075936&fm=26&gp=0.jpg',
            value: '这是一条建议',
            imgList: [
                'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2998671514,611303141&fm=26&gp=0.jpg',
                'https://t7.baidu.com/it/u=378254553,3884800361&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1588041384&t=4e98396b9ea3c2df9f505b4f5436b739',
            ],
            voice: i % 2 === 0 ? 'https://www.w3school.com.cn/i/horse.ogg' : '',
            voiceText: i % 2 === 0 ? '语音识别结果，语音识别结果，语音识别结果，语音识别结果。' : '',
            reply: '您好，您的建议我们已经收到，感谢您 的反馈。'
        })
    }

    router.get('/query/list', async ctx => {
        await new Promise(resolve => setTimeout(() => resolve(), 567))
        ctx.body = {
            code: 200,
            message: '获取意见反馈列表成功',
            data: {
                total,
                list: list.slice((ctx.query.page - 1) * size, (ctx.query.page - 1) * size + size)
            }
        }
    })

}