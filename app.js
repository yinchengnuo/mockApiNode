const fs = require("fs");
const Koa = require("koa");
const apis = require("./api")
const https = require("https");
const body = require("koa-body");
const cors = require("koa-cors");
const route = require("koa-route");
const static = require("koa-static");
const router = require("koa-router")();
const compress = require("koa-compress");
const app = require("koa-websocket")(new Koa());

app.ws.use(
  route.all("/websocket", ctx => {
    // setInterval(() =>  ctx.websocket.send(i ++), 1234)
  })
);

app.use(cors()); //允许跨域
app.use(body({ multipart: true })) //获取post请求体中间件
app.use(async (ctx, next) => { // history 中间件
  const path = '/adminVueElement/' // 需要判断的路径
  await next() // 等待请求执行完毕
  if (ctx.response.status === 404 && ctx.request.url.includes(path)) { // 判断是否符合条件
    ctx.type = 'text/html; charset=utf-8' // 修改响应类型
    ctx.body= fs.readFileSync('.' + path + 'index.html') // 修改响应体
  }
})
app.use(async (ctx, next) => { // history 中间件
  const path = '/learnReact/' // 需要判断的路径
  await next() // 等待请求执行完毕
  if (ctx.response.status === 404 && ctx.request.url.includes(path)) { // 判断是否符合条件
    ctx.type = 'text/html; charset=utf-8' // 修改响应类型
    ctx.body= fs.readFileSync('.' + path + 'index.html') // 修改响应体
  }
})
app.use(static("./")); //静态文件中间件

app.use(async (ctx, next) => { // cdn 加速中间件
  await next() // 等待请求执行完毕
    ctx.set('Cache-Control', ' ')
  }
)

app.use(compress({ threshold: 2048 })); //gzip中间件

apis(router) // 一些方法自定义接口
require('./util/api.js')(app) //api接口

app.use(router.routes()).use(router.allowedMethods()); //路由中间件

require("./dwbszbs/app")(app); //启动大卫博士争霸赛MOCK
require("./dwbsszy/app")(app); //启动大卫博士实战营MOCK
require("./admin/app")(app); //启动vue后台管理系统MOCK
require("./dwbsapp/app")(app); //启动大卫博士手机AppMOCK

if (process.env.NODE_ENV && process.env.NODE_ENV[0] === "d") {
  app.listen(80, () => console.log("服务器启动成功"))
} else {
  https.createServer({
    key: fs.readFileSync("../https/https.key"),
    cert: fs.readFileSync("../https/https.pem")
  }, app.callback()).listen(443, async () => console.log("服务器启动成功"))

  const app80 = new Koa();

  app80.use(cors());  //开启跨域
  app80.use(body()); //获取post请求体中间件
  app80.use(compress({ threshold: 2048 })); //gzip中间件
  
  const router80 = require('koa-router')()
  router80.get('/', async(ctx) => ctx.redirect('https://yinchengnuo.com'))
  app80.use(router80.routes()).use(router80.allowedMethods())
  
  require('./util/api.js')(app80) //api接口
  require('./fuliaoLiveWithoutFlash/app')(app80) //富聊后台视频聊优化建议方案
  require('./livePlayingSchemes/app')(app80) //web前端常用直播流播放方案（PC端）
  require('./fuliaoWebappVue/app')(app80) //富聊webapp移动端Vue开发版
  
  app80.listen(81)
}
