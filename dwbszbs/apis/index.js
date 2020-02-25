module.exports = router => {  //首页

    router.get('/', async ctx => {
            ctx.body = {
                code: 200,
                message: '大卫博士卖货争霸赛前端开发MOCK接口  ',
                data: {
                    by: '尹成诺',
                    tam: + new Date
                }
            }
    })
    
}