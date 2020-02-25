const router = require("koa-router")({ prefix: "/dwbsapp" });

module.exports = app => {
  router.get("/", async ctx => {
    ctx.body = {
      code: 200,
      message: "大卫博士手机App前端开发MOCK接口",
      data: {
        by: "尹成诺",
        tam: +new Date()
      }
    };
  });

  require("./apis/app")(router); // app 升级信息相关
  require("./apis/user")(router); // 用户信息相关
  require("./apis/good")(router); // 商品相关
  require("./apis/team")(router); // 团队相关
  require("./apis/order")(router); // 订单相关
  require("./apis/commu")(router); // 社区相关
  require("./apis/verify")(router); // 登陆验证相关
  require("./apis/fortune")(router); // 财富相关
  require("./apis/address")(router); // 地址相关

  app.use(router.routes()).use(router.allowedMethods());
};
