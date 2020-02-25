const fs = require('fs');
const path = require('path');
const util = require('util');
const readdirPromise = util.promisify(fs.readdir);

module.exports = router => {
  router.get("/user/per_data", async ctx => {
    ctx.body = {
      code: 200,
      message: "获取用户信息成功",
      data: {
        id: 18,
        uuid: 851553114,
        nickname: "忙着长大",
        mobile: 18338112210,
        store: true,
        level: "顶级代理", // 用户等级
        level_change: 1, // 用户等级变化情况
        order_num1: 11,
        order_num2: 22,
        order_num3: 33,
        avatar:
          "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1467242771,949293240&fm=26&gp=0.jpg"
      }
    };
  });

  router.get("/user/getinfo", async ctx => {
    ctx.body = {
      code: 200,
      message: "获取用户状态成功",
      data: {
        status: 1,
        cert_status: 6,
        wechatname: '忙着长大',
        reject_reason: "微信昵称不符",
        recom_nickname: "可乐啊",
        recom_mobile: "15236877164"
      }
    };
  });


  router.get("/user/submit_user", async ctx => {
    ctx.body = {
      code: 200,
      message: "提交身份认证成功"
    };
  });

  router.get("/user/user_cert", async ctx => {
    ctx.body = {
      code: 200,
      message: "确认身份认证完成"
    };
  });

  router.get("/user/confirm_level", async ctx => {
    ctx.body = {
      code: 200,
      message: "确认等级变动完成"
    };
  });

  router.get("/user/auth_code", async ctx => {
    ctx.body = {
      code: 200,
      message: "获取用户授权码信息成功",
      data: {
        code: "DWBS0096512JanJan0112584563254",
        time: "1578624473840",
        url: 'http://img4.imgtn.bdimg.com/it/u=3209370120,2008812818&fm=26&gp=0.jpg'
      }
    };
  });

  router.post("/user/auth_share", async ctx => {
    const num = (await readdirPromise(path.join(__dirname, '../../static/images/'))).length;
console.log(ctx.request.body)
    const reader = fs.createReadStream(ctx.request.files.img.path);
    const writer = fs.createWriteStream(path.join(__dirname, `../../static/images/${num}.jpg`));
    reader.pipe(writer);
    ctx.body = {
      code: 200,
      message: "提交授权证书",
      data: {
        url: "https://yinchengnuo.com/static/gif.gif"
      }
    };
  });

  router.get("/proxy/updata", async ctx => {
    ctx.body = {
      code: 200,
      message: "获取代理升级状态成功",
      data: {
        status: 0,
        isActive: true,
        updata: 1,
        start: '1578656660523',
        end: '1587609413221',
        top_money: 2000,
        crown_money: 200000,
      }
    };
  });

  router.post("/proxy/upload", async ctx => {
    const num = (await readdirPromise(path.join(__dirname, '../../static/images/'))).length;
    const type = ctx.request.files.img.name.split('.')[ctx.request.files.img.name.split('.').length - 1];
    const reader = fs.createReadStream(ctx.request.files.img.path);
    const writer = fs.createWriteStream(path.join(__dirname, `../../static/images/${num}.${type}`));
    reader.pipe(writer);
    ctx.body = {
      code: 200,
      message: "上传付款截图成功",
      data: {
        url: 'http://www.dfsdfsd.dffff....png'
      }
    };
  });


  router.post("/proxy/updata_urls", async ctx => {
    console.log(ctx.request.body)
    ctx.body = {
      code: 200,
      message: "上传付款截图 urls 成功"
    };
  });
};
