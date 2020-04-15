const fs = require("fs");
const Koa = require("koa");
const https = require("https");
const body = require("koa-body");
const cors = require("koa-cors");
const route = require("koa-route");
const static = require("koa-static");
const router = require("koa-router")();
const compress = require("koa-compress");
const exec = require('child_process').exec; 
const { historyApiFallback } = require("koa2-connect-history-api-fallback");
const app = require("koa-websocket")(new Koa());

app.ws.use(
  route.all("/websocket", ctx => {
    // setInterval(() =>  ctx.websocket.send(i ++), 1234)
  })
);

app.use(cors()); //允许跨域
app.use(body({ multipart: true })) //获取post请求体中间件
app.use(static("./")); //静态文件中间件
app.use(compress({ threshold: 2048 })); //gzip中间件

router.post("/gitHook", async (ctx) => {
  exec('git pull', (err, stdout, stderr) => {
    if(err) {
      console.log('get weather api error:'+stderr)
    } else {
      console.log(JSON.parse(stdout))
    }
  })
  ctx.body = "312312"
})
app.use(router.routes()).use(router.allowedMethods()); //路由中间件

require("./dwbszbs/app")(app); //启动大卫博士争霸赛项目
require("./admin/app")(app); //启动vue后台管理系统项目
require("./dwbsapp/app")(app); //启动大卫博士手机App项目

if (process.env.NODE_ENV && process.env.NODE_ENV[0] === "d") {
  app.listen(80, () => console.log("服务器启动成功"))
} else {
  https.createServer({
    key: fs.readFileSync("../https/https.key"),
    cert: fs.readFileSync("../https/https.pem")
  }, app.callback()).listen(443, async () => console.log("服务器启动成功"))
}
