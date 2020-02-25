const router = require('koa-router')({ prefix: '/dwbszbs' });

module.exports = app => {

    require('./apis/pay')(router); //pay
    require('./apis/index')(router);  //首页接口
    require('./apis/signup')(router);  //报名
    require('./apis/upload')(router);  //上传图片接口
    require('./apis/getYZM')(router);  //获取验证码接口
    require('./apis/address')(router);  //地址接口
    require('./apis/onLaunch')(router);  //登录接口
    require('./apis/getRanking')(router);  //获取排行榜接口
    require('./apis/getJoinNum')(router);  //获取参赛人数接口
    require('./apis/getSoldTotal')(router);  //获取季度卖货总量接口
    require('./apis/getScoreList')(router);  //获取学分账单接口
    require('./apis/submitTelYZM')(router);  //提交验证码接口
    require('./apis/getHonourInfo')(router);  //获取当前赛季用户荣誉信息
    require('./apis/submitExchange')(router);  //提交商品兑换结果
    require('./apis/getHistoryRace')(router);  //获取历史赛季信息接口
    require('./apis/getExchangeList')(router);  //获取礼品兑换列表
    require('./apis/getExchangeRecord')(router);  //获取礼品兑换记录接口
    require('./apis/getCurrentSoldInfo')(router);  //获取当前季度卖货情况接口
    require('./apis/getPersonalSoldInfo')(router);  //获取个人卖货数据接口
    require('./apis/getHistoryHonourList')(router);  //获取历史赛季用户荣誉信息

    app.use(router.routes()).use(router.allowedMethods());

}