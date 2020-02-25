const fs = require("fs");
const Koa = require("koa");
const util = require("util");
const https = require("https");
const axios = require("axios");
const body = require("koa-body");
const cors = require("koa-cors");
const route = require("koa-route");
const static = require("koa-static");
const router = require("koa-router")();
const compress = require("koa-compress");
const readdirPromise = util.promisify(fs.readdir);
const readFilePromise = util.promisify(fs.readFile);

const readSrc = async dirname => {
  //读取项目代码
  const dir = {
    name: dirname.replace("./", ""), //项目名
    app: (await readFilePromise(`${dirname}/app.js`)).toString(), //项目启动文件
    apis: {} //项目接口
  };
  const apis = await readdirPromise(`${dirname}/apis`);
  for (let i = 0; i < apis.length; i++) {
    dir.apis[apis[i]] = (
      await readFilePromise(`${dirname}/apis/${apis[i]}`)
    ).toString();
  }
  return dir;
};
const app = require("koa-websocket")(new Koa());

app.ws.use(
  route.all("/websocket", ctx => {
    // setInterval(() =>  ctx.websocket.send(i ++), 1234)
  })
);

app.use(cors()); //允许跨域
app.use(body({ multipart: true })); //获取post请求体中间件
app.use(static("./")); //静态文件中间件
app.use(compress({ threshold: 2048 })); //gzip中间件
app.use(router.routes()).use(router.allowedMethods()); //路由中间件

require("./dwbszbs/app")(app); //启动大卫博士争霸赛项目
require("./admin/app")(app); //启动vue后台管理系统项目
require("./dwbsapp/app")(app); //启动大卫博士手机App项目


if (process.env.NODE_ENV && process.env.NODE_ENV[0] === "d") {
  app.listen(80, e => {
    console.log("服务器启动成功");
  });
} else {
  https
    .createServer(
      {
        key: fs.readFileSync("../https/https.key"),
        cert: fs.readFileSync("../https/https.pem")
      },
      app.callback()
    )
    .listen(443, async () => {
      console.log("服务器启动成功");
      // if (process.env.NODE_ENV && process.env.NODE_ENV[0] === "d") {
      //   console.log("本地服务器已启动！！！");
      //   const app = (await readFilePromise("./app.js")).toString();
      //   // const dir =  await readSrc('./dwbszbs');  //读取大卫博士争霸赛项目代码
      //   // const dir =  await readSrc('./admin');  //读取vue后台管理系统项目
      //   const dir = await readSrc("./dwbsapp"); //读取大卫博士手机App项目
      //   axios
      //     .post("http://yinchengnuo.com/keeppace", {
      //       app,
      //       dir
      //     })
      //     .then(
      //       e => {
      //         if (e.data.code === 200) {
      //           console.log("服务器代码同步完毕！！！");
      //         }
      //       },
      //       () => {
      //         console.log("同步失败");
      //       }
      //     );
      // }
    });
}
