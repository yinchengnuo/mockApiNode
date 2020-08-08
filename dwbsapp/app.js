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
        {
          family: 'Pacifico',
          source: 'url("https://static-5fefd627-e113-49d6-81a0-f65e160fb88b.bspapp.com/Pacifico.ttf")',
          lang: 'en',
          size: '10KB',
          preview: 'https://static-5fefd627-e113-49d6-81a0-f65e160fb88b.bspapp.com/preview/Pacifico.png' 
        },
        {
          family: 'LeftoversII2',
          source: 'url("https://static-5fefd627-e113-49d6-81a0-f65e160fb88b.bspapp.com/LeftoversII2.ttf")',
          lang: 'en',
          size: '10KB',
          preview: 'https://static-5fefd627-e113-49d6-81a0-f65e160fb88b.bspapp.com/preview/LeftoversII2.png' 
        },
        {
          family: 'Monkeyboy',
          source: 'url("https://static-5fefd627-e113-49d6-81a0-f65e160fb88b.bspapp.com/Monkeyboy.ttf")',
          lang: 'en',
          size: '10KB',
          preview: 'https://static-5fefd627-e113-49d6-81a0-f65e160fb88b.bspapp.com/preview/Monkeyboy.png' 
        },
        {
          family: '米芾字体',
          source: 'url("https://static-5fefd627-e113-49d6-81a0-f65e160fb88b.bspapp.com/米芾字体.ttf")',
          lang: 'zh',
          size: '10KB',
          preview: 'https://static-5fefd627-e113-49d6-81a0-f65e160fb88b.bspapp.com/preview/米芾字体.png' 
        },
        {
          family: '书体坊兰亭体',
          source: 'url("https://static-5fefd627-e113-49d6-81a0-f65e160fb88b.bspapp.com/书体坊兰亭体.ttf")',
          lang: 'zh',
          size: '10KB',
          preview: 'https://static-5fefd627-e113-49d6-81a0-f65e160fb88b.bspapp.com/preview/书体坊兰亭体.png' 
        },
        {
          family: '书体坊颜体',
          source: 'url("https://static-5fefd627-e113-49d6-81a0-f65e160fb88b.bspapp.com/书体坊颜体.ttf")',
          lang: 'zh',
          size: '10KB',
          preview: 'https://static-5fefd627-e113-49d6-81a0-f65e160fb88b.bspapp.com/preview/书体坊颜体.png' 
        },
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
