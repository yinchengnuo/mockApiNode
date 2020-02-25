module.exports = router => {

    router.get('/', async ctx => {
        ctx.body = {
            code: 100,
            message: 'Vue后台管理系统前端开发MOCK接口',
            data: {
                by: '尹成诺',
                tam: + new Date
            }
        }
    })

}