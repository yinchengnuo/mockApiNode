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

  router.get("/fonts", async ctx => {
    ctx.body = {
      code: 200,
      message: "字体列表",
      data: [
        { family: 'Pacifico', source: 'url("https://yinchengnuo.com/static/templateWxappUniapp/fonts/Pacifico.ttf")' },
        { family: 'LeftoversII2', source: 'url("https://yinchengnuo.com/static/templateWxappUniapp/fonts/LeftoversII2.ttf")' },
        { family: 'Monkeyboy', source: 'url("https://yinchengnuo.com/static/templateWxappUniapp/fonts/Monkeyboy.ttf")' },
        { family: '赵九江钢笔楷书体', source: 'url("https://yinchengnuo.com/static/templateWxappUniapp/fonts/书体坊赵九江钢笔楷书体.ttf")' },
        { family: '米芾字体', source: 'url("https://yinchengnuo.com/static/templateWxappUniapp/fonts/米芾字体.ttf")' },
        { family: '书体坊兰亭体', source: 'url("https://yinchengnuo.com/static/templateWxappUniapp/fonts/书体坊兰亭体.ttf")' },
        { family: '书体坊颜体', source: 'url("https://yinchengnuo.com/static/templateWxappUniapp/fonts/书体坊颜体.ttf")' },
      ]
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
