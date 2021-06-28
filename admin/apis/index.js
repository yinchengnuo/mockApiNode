module.exports = router => {

    router.get('/', async ctx => {
        ctx.body = {
            code: 200,
            message: 'Vue后台管理系统前端开发MOCK接口',
            data: {
                by: '尹成诺',
                tam: + new Date,
                test: '周天德'
            }
        }
    })

}