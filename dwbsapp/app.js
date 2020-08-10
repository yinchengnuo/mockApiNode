const axios = require('axios')
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

  // axios.get(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${'wxb0566d7e65e76589'}&secret=${'18a564e87cc37cd62d58f3f40fcc6500'}`).then(({ data }) => console.log(data))

  router.get("/fonts", async ctx => {
    ctx.body = {
      code: 200,
      message: "字体列表",
      data: [
        { family: 'licorice', source: 'url("https://yinchengnuo.com/static/templateWxappUniapp/fonts/licorice.ttf")' },
        { family: 'Machinegun', source: 'url("https://yinchengnuo.com/static/templateWxappUniapp/fonts/Machinegun.ttf")' },
        { family: 'MaximalBeasts', source: 'url("https://yinchengnuo.com/static/templateWxappUniapp/fonts/MaximalBeasts.ttf")' },
        { family: 'Nugsoth', source: 'url("https://yinchengnuo.com/static/templateWxappUniapp/fonts/Nugsoth.ttf")' },
        { family: 'realpol', source: 'url("https://yinchengnuo.com/static/templateWxappUniapp/fonts/realpol.ttf")' },
        { family: 'RO', source: 'url("https://yinchengnuo.com/static/templateWxappUniapp/fonts/ro.ttf")' },
        { family: 'RumBubber', source: 'url("https://yinchengnuo.com/static/templateWxappUniapp/fonts/RumBubber.ttf")' },
        { family: 'Xlines', source: 'url("https://yinchengnuo.com/static/templateWxappUniapp/fonts/Xlines.ttf")' },
        { family: 'Yerevan', source: 'url("https://yinchengnuo.com/static/templateWxappUniapp/fonts/Yerevan.ttf")' },
        { family: 'zx81', source: 'url("https://yinchengnuo.com/static/templateWxappUniapp/fonts/zx81.ttf")' },
      ]
    };
  });

  router.get("/check", async ctx => {
    const access_token = (await axios.get(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${'wxb0566d7e65e76589'}&secret=${'18a564e87cc37cd62d58f3f40fcc6500'}`)).data.access_token
    const data = (await axios.post(`https://api.weixin.qq.com/wxa/msg_sec_check?access_token=${access_token}`, { content: ctx.query.content })).data
    ctx.body = {
      code: 200,
      message: "检查一段文本是否含有违法违规内容。",
      data
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
