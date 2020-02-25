const router = require('koa-router')({ prefix: '/admin' });

module.exports = app => {

    require('./apis/index')(router);  //首页
    require('./apis/role')(router);
    require('./apis/user')(router);
    require('./apis/tongji')(router);
    require('./apis/usermange')(router);
    require('./apis/giftmanage')(router);
    require('./apis/teammanage')(router);
    require('./apis/bonusDetail')(router);
    require('./apis/scoreDetail')(router);
    require('./apis/ordermanage')(router);
    require('./apis/honnerDetail')(router);
    require('./apis/signupmanage')(router);
    require('./apis/uploadmanage')(router);
    require('./apis/seasonsetting')(router);

    app.use(router.routes()).use(router.allowedMethods());

}