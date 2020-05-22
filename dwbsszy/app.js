const router = require('koa-router')({ prefix: '/dwbsszy' });

module.exports = app => {

    require('./apis/rank')(router); //排名
    require('./apis/login')(router); //登陆
    require('./apis/signup')(router); //报名
    require('./apis/upload')(router); //上传

    app.use(router.routes()).use(router.allowedMethods());

}