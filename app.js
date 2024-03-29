'use strict'

const fs = require("fs");
const Koa = require("koa");
const apis = require("./api");
const https = require("https");
const axios = require('axios');
const body = require("koa-body");
const cors = require("koa-cors");
const route = require("koa-route");
const staticm = require("koa-static");
const router = require("koa-router")();
const CronJob = require('cron').CronJob;
const compress = require("koa-compress");
const app = require("koa-websocket")(new Koa());
const cacheControl = require('koa-cache-control');

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
app.use(cacheControl({ maxAge: 31536000 })) // 协商缓存
app.use(staticm("./")); //静态文件中间件
app.use(compress({ threshold: 2048 })); //gzip中间件

apis(router) // 一些方法自定义接口
// require('./util/api.js')(app) //api接口

app.use(router.routes()).use(router.allowedMethods()); //路由中间件

require('./util/api.js')(app) //直播视频接口
require("./dwbszbs/app")(app); //启动大卫博士争霸赛MOCK
require("./dwbsszy/app")(app); //启动大卫博士实战营MOCK
require("./admin/app")(app); //启动vue后台管理系统MOCK
require("./dwbsapp/app")(app); //启动大卫博士手机AppMOCK

if (process.env.NODE_ENV && process.env.NODE_ENV[0] === "d") {
  app.listen(80, () => console.log("服务器启动成功"))
} else {
  https.createServer({
    key: fs.readFileSync("./https/https.key"),
    cert: fs.readFileSync("./https/https.crt")
  }, app.callback()).listen(443, async () => console.log("服务器启动成功"))

  const app80 = new Koa();

  app80.use(cors());  //开启跨域
  app80.use(body()); //获取post请求体中间件
  app80.use(compress({ threshold: 2048 })); //gzip中间件
  
  const router80 = require('koa-router')()
  // router80.get('/', async(ctx) => ctx.redirect('https://yinchengnuo.com'))
  app80.use(router80.routes()).use(router80.allowedMethods())
  
  require('./util/api.js')(app80) //api接口
  require('./fuliaoLiveWithoutFlash/app')(app80) //富聊后台视频聊优化建议方案
  require('./livePlayingSchemes/app')(app80) //web前端常用直播流播放方案（PC端）
  require('./fuliaoWebappVue/app')(app80) //富聊webapp移动端Vue开发版
  
  app80.listen(81)
}

// {
//   // const AppID = 'wxbdbf2fb2abc393d3'
// 	// const AppSecret = '3c6647ce3dd48678e8bff7ad5c54a210'
//   const AppID = 'wx6e5894d8644269cd'
// 	const AppSecret = 'fd72aeeb8f8f77811248b6e9fc3d3ee2'
//   const access_token = () => {
//     axios.get(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${AppID}&secret=${AppSecret}`).then(({ data: { access_token }}) => {
//       axios.get(`https://9ce169de-f8e3-40f2-a6df-c391d61a7ef5.bspapp.com/http/access_token/access_token?access_token=${access_token}`)
//     })
//   }
//   access_token()
//   setInterval(access_token, 1000 * 60 * 10)
// }

{
  const hour = 7
  const minite = 30
  const second = 0

  ;(new CronJob(`${second} ${minite} ${hour} * * *`, () => {
    const ak = '8B6386AC-4513-497D-AB30-73CA55568574'
    const akregid = '140fe1da9e115ee8c46'
    const pgid = '3207'
    const kid = '1208'
    const jxcarid = '1520'
    const timer = setInterval(() => {
      const today = new Date();
      const tomorrow = new Date(Date.now() + 86400000)
      const query = `{"jxcarid":"${jxcarid}","jtorq":"2020/${tomorrow.getMonth() + 1}/${tomorrow.getDate()} 0:00:00","jtosjq":"14:30:00", "jtosjz":"15:00:00","jtolx":"0","nomsg":"1"}`
      const url = `http://yc.xiaocheku.cn/ajax/app.ashx?tm=${Date.now()}&ak=${ak}&akregid=${akregid}&cf=3&pgid=${pgid}&kid=${kid}&cmd=ckTimeOrder_add_proc&para=`
      if (today.getHours() == hour && today.getMinutes() == minite && today.getSeconds() == second) {
        if (today.getMilliseconds() < 300) {
          axios.get(`${url}${encodeURIComponent(query)}`).then(({ data }) => {
            console.log(data)
            if (data.Data.id) {
              axios.get(`http://yc.xiaocheku.cn/ajax/app.ashx?tm=${Date.now()}&ak=${ak}&akregid=${akregid}&cf=3&pgid=3207&kid=1210&cmd=ckTimeOrder_add_procpay&para=%7b%22id%22%3a%22${data.Data.id}%22%2c%22coupid%22%3a%22%22%2c+%22cbdkje%22%3a%220%22%2c%22paytype%22%3a%22%e6%8a%b5%e6%89%a3%22%2c%22nomsg%22%3a%221%22%7d`)
            }
          })
        } else {
          clearInterval(timer)
        }
      }
    }, 10)
  }, null, true)) .start()
}

{
  const hour = 7
  const minite = 30
  const second = 0

  ;(new CronJob(`${second} ${minite} ${hour} * * *`, () => {
    const ak = '8B6386AC-4513-497D-AB30-73CA55568574'
    const akregid = '140fe1da9e115ee8c46'
    const pgid = '3207'
    const kid = '1208'
    const jxcarid = '1520'
    const timer = setInterval(() => {
      const today = new Date();
      const tomorrow = new Date(Date.now() + 86400000)
      const query = `{"jxcarid":"${jxcarid}","jtorq":"2020/${tomorrow.getMonth() + 1}/${tomorrow.getDate()} 0:00:00","jtosjq":"15:00:00", "jtosjz":"15:30:00","jtolx":"0","nomsg":"1"}`
      const url = `http://yc.xiaocheku.cn/ajax/app.ashx?tm=${Date.now()}&ak=${ak}&akregid=${akregid}&cf=3&pgid=${pgid}&kid=${kid}&cmd=ckTimeOrder_add_proc&para=`
      if (today.getHours() == hour && today.getMinutes() == minite && today.getSeconds() == second) {
        if (today.getMilliseconds() < 300) {
          axios.get(`${url}${encodeURIComponent(query)}`).then(({ data }) => {
            console.log(data)
            if (data.Data.id) {
              axios.get(`http://yc.xiaocheku.cn/ajax/app.ashx?tm=${Date.now()}&ak=${ak}&akregid=${akregid}&cf=3&pgid=3207&kid=1210&cmd=ckTimeOrder_add_procpay&para=%7b%22id%22%3a%22${data.Data.id}%22%2c%22coupid%22%3a%22%22%2c+%22cbdkje%22%3a%220%22%2c%22paytype%22%3a%22%e6%8a%b5%e6%89%a3%22%2c%22nomsg%22%3a%221%22%7d`)
            }
          })
        } else {
          clearInterval(timer)
        }
      }
    }, 10)
  }, null, true)) .start()
}

{
  const hour = 7
  const minite = 30
  const second = 0

  ;(new CronJob(`${second} ${minite} ${hour} * * *`, () => {
    const ak = '59B4E432-D50E-4DAB-A8D0-A224EAE8E467'
    const akregid = '190e35f7e0fbf0a3930'
    const pgid = '3207'
    const kid = '1208'
    const jxcarid = '1520'
    const timer = setInterval(() => {
      const today = new Date();
      const tomorrow = new Date(Date.now() + 86400000)
      const query = `{"jxcarid":"${jxcarid}","jtorq":"2020/${tomorrow.getMonth() + 1}/${tomorrow.getDate()} 0:00:00","jtosjq":"14:00:00", "jtosjz":"14:30:00","jtolx":"0","nomsg":"1"}`
      const url = `http://yc.xiaocheku.cn/ajax/app.ashx?tm=${Date.now()}&ak=${ak}&akregid=${akregid}&cf=3&pgid=${pgid}&kid=${kid}&cmd=ckTimeOrder_add_proc&para=`
      if (today.getHours() == hour && today.getMinutes() == minite && today.getSeconds() == second) {
        if (today.getMilliseconds() < 300) {
          axios.get(`${url}${encodeURIComponent(query)}`).then(({ data }) => {
            console.log(data)
            if (data.Data.id) {
              axios.get(`http://yc.xiaocheku.cn/ajax/app.ashx?tm=${Date.now()}&ak=${ak}&akregid=${akregid}&cf=3&pgid=3207&kid=1210&cmd=ckTimeOrder_add_procpay&para=%7b%22id%22%3a%22${data.Data.id}%22%2c%22coupid%22%3a%22%22%2c+%22cbdkje%22%3a%220%22%2c%22paytype%22%3a%22%e6%8a%b5%e6%89%a3%22%2c%22nomsg%22%3a%221%22%7d`)
            }
          })
        } else {
          clearInterval(timer)
        }
      }
    }, 10)
  }, null, true)) .start()
}


{
  const hour = 20
  const minite = 0
  const second = 0

  ;(new CronJob(`${second} ${minite} ${hour} * * *`, () => {
    const ak = 'CAD5CBE3-5719-4377-A803-887963031A92'
    const akregid = '1517bfd3f74e3c6ac69'
    const pgid = '3207'
    const kid = '1008'
    const jxcarid = '1109'
    const timer = setInterval(() => {
      const today = new Date();
      const tomorrow = new Date(Date.now() + 86400000)
      const query = `{"jxcarid":"${jxcarid}","jtorq":"2020/${tomorrow.getMonth() + 1}/${tomorrow.getDate()} 0:00:00","jtosjq":"09:00:00", "jtosjz":"10:00:00","jtolx":"0","nomsg":"1"}`
      const url = `http://yc.xiaocheku.cn/ajax/app.ashx?tm=${Date.now()}&ak=${ak}&akregid=${akregid}&cf=3&pgid=${pgid}&kid=${kid}&cmd=ckTimeOrder_add_proc&para=`
      if (today.getHours() == hour && today.getMinutes() == minite && today.getSeconds() == second) {
        if (today.getMilliseconds() < 200) {
          axios.get(`${url}${encodeURIComponent(query)}`).then(({ data }) => {
            console.log(data)
            if (data.Data.id) {
              axios.get(`http://yc.xiaocheku.cn/ajax/app.ashx?tm=${Date.now()}&ak=${ak}&akregid=${akregid}&cf=3&pgid=3207&kid=1210&cmd=ckTimeOrder_add_procpay&para=%7b%22id%22%3a%22${data.Data.id}%22%2c%22coupid%22%3a%22%22%2c+%22cbdkje%22%3a%220%22%2c%22paytype%22%3a%22%e6%8a%b5%e6%89%a3%22%2c%22nomsg%22%3a%221%22%7d`)
            }
          })
        } else {
          clearInterval(timer)
        }
      }
    }, 10)
  }, null, true)) .start()
}