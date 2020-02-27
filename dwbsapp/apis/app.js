module.exports = router => {

  router.get("/app/index", async ctx => {
    console.log(ctx.request.header)
    await new Promise(resolve => setTimeout(() => resolve(), 0));
    ctx.body = {
      code: 200,
      message: "获取index首页数据成功",
      data: {
        news: [{
            contents: "恭喜尹成诺加入大卫博士团队恭喜尹成诺加入大卫博士团队恭喜尹成诺加入大卫博士团队",
          },
          {
            contents: "恭喜张奇加入大卫博士团队恭喜张奇加入大卫博士团队恭喜张奇加入大卫博士团队",
          },
          {
            contents: "恭喜魏石磊加入大卫博士团队恭喜张奇加入大卫博士团队"
          }
        ],
        swiper: [{
            url: "http://www.baidu.com",
            is_jump: 1,
            imgurl: "https://t9.baidu.com/it/u=3363001160,1163944807&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1582472327&t=1ff5138c6bec5579dbe14f15f5e871df"
          },
          {
            url: "",
            is_jump: 0,
            imgurl: "https://t8.baidu.com/it/u=2247852322,986532796&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1582472327&t=077371c3044bf526fecb8d1d6a577ffc"
          },
          {
            url: "",
            is_jump: 0,
            imgurl: "https://t9.baidu.com/it/u=583874135,70653437&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1582472327&t=5180ab50f0e6f988a055e91070c8cbda"
          }
        ],
        article: {
          type: 0, // 文章
          id: Math.floor(Math.random() * 1000000),
          title: "常来微聊背后的逻辑常来微聊背后的逻辑常来微聊背后的逻辑",
          avatar: "http://img2.imgtn.bdimg.com/it/u=1225597740,615370700&fm=11&gp=0.jpg",
          author: "大卫博士官方",
          off: 1, // 官方
          summary: "很多人都有自己的梦想！很多人都有自己的使命！很多人都想在某个领域尽情地释放自己，就像他一样很多人都有情地释放自己，就像他一样很多人都有",
          created_at: '1575111955739',
          imgurl: [
            "https://upload-images.jianshu.io/upload_images/2743354-2d9e04b6170d7bc1.JPG?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp",
            "https://upload-images.jianshu.io/upload_images/2743354-a5978835106beaf8.JPG?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp",
            "https://upload-images.jianshu.io/upload_images/2743354-5bfd6e4cd6c253a3.JPG?imageMogr2/auto-orient/strip|imageView2/2/w/663/format/webp"
          ],
          like: true,
          collection: true
        }
      }
    };
  });

  router.get("/app/data", async ctx => {
    console.log(ctx.request.header)
    await new Promise(resolve => setTimeout(() => resolve(), 0));
    ctx.body = {
      code: 200,
      message: "获取indexa数据数据成功",
      data: {
        total_income: 5210,
        my_storage: 120,
        down_storage: 322,
        month_income: 2000,
        month_order_income: 1600,
        month_sold_income: 400,
        total_team_num: 346,
        month_team_num: 23,
        month_super_num: 23,
        month_top_num: 23,
        month_direct_num: 23,
        team_rank: [{
            avatar: "https://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1582962246&t=76ddb9aebe627c4a5bebc91cba9fab84",
            level: "顶级代理",
            nickname: "代理昵称代理昵称代理昵称代理昵称代理昵称代理昵称代理昵称",
            money: 5210,
          },
          {
            avatar: "https://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1582962246&t=76ddb9aebe627c4a5bebc91cba9fab84",
            level: "顶级代理",
            nickname: "代理昵称",
            money: 5000,
          },
          {
            avatar: "https://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1582962246&t=76ddb9aebe627c4a5bebc91cba9fab84",
            level: "顶级代理",
            nickname: "代理昵称",
            money: 1234,
          },
        ]
      }
    };
  });
  router.get("/app/updata", async ctx => {
    await new Promise(resolve => setTimeout(() => resolve(), 0));
    ctx.body = {
      code: 200,
      message: "获取版本更新链接成功",
      data: {
        version: "1.0.1",
        message: "修复若干BUG，并杀了一个程序员祭天。修复若干BUG，并杀了一个程序员祭天。修复若干BUG，并杀了一个程序员祭天。修复若干BUG，并杀了一个程序员祭天。修复若干BUG，并杀了一个程序员祭天。。修复若干BUG，并杀了一个程序员祭天。。修复若干BUG，并杀了一个程序员祭天。。修复若干BUG，并杀了一个程序员祭天。。修复若干BUG，并杀了一个程序员祭天。。修复若干BUG，并杀了一个程序员祭天。。修复若干BUG，并杀了一个程序员祭天。。修复若干BUG，并杀了一个程序员祭天。。修复若干BUG，并杀了一个程序员祭天。。修复若干BUG，并杀了一个程序员祭天。",
        url: "https://yinchengnuo.com/static/new.apk"
      }
    };
  });

  router.get("/app/feedback", async ctx => {
    console.log(ctx.request.query)
    await new Promise(resolve => setTimeout(() => resolve(), 3456));
    ctx.body = {
      code: 200,
      message: "问题反馈成功"
    };
  });

  router.get("/app/message_read", async ctx => {
    await new Promise(resolve => setTimeout(() => resolve(), 2333));
    ctx.body = {
      code: 200,
      message: "设置消息已读成功"
    };
  });

  router.get("/app/message", async ctx => {
    await new Promise(resolve => setTimeout(() => resolve(), 123));
    ctx.body = {
      code: 200,
      message: "获取系统信息成功",
      data: {
        system: [{
            title: "学位争霸赛新赛季开启",
            time: 1577962676384,
            message: "新赛季开启时间暂定为2019年12月1日开启，报名时间 为12月1日-12月4日",
            url: "https://www.taobao.com/"
          },
          {
            title: "学位争霸赛新赛季开启",
            time: 1577962676384,
            message: "新赛季开启时间暂定为2019年12月1日开启，报名时间 为12月1日-12月4日",
            url: "https://www.taobao.com/"
          }
        ],
        myOrder: [{
            order_num: "12345678912345678900",
            status: 1,
            time: 1577962676384,
            goodList: [{
                price: 999,
                name: "大卫博士精装款内裤",
                img: "https://img.alicdn.com/imgextra/i4/40595992/O1CN012kjBGt1u8NnUCnx9p_!!0-saturn_solar.jpg_220x220.jpg_.webp",
                num: 20
              },
              {
                price: 666,
                name: "大卫博士老人款内裤",
                img: "https://img14.360buyimg.com/n7/jfs/t16519/285/2653381957/332101/291d66be/5ab9f122Ncf6bad38.jpg",
                num: 30
              }
            ]
          },
          {
            order_num: "12345678912345678900",
            status: 3,
            time: 1577000000000,
            goodList: [{
                id: 0,
                price: 999,
                storage: 0,
                name: "大卫博士精装款内裤",
                img: "https://img.alicdn.com/imgextra/i4/40595992/O1CN012kjBGt1u8NnUCnx9p_!!0-saturn_solar.jpg_220x220.jpg_.webp",
                num: 20
              },
              {
                id: 2,
                price: 666,
                storage: 66,
                name: "大卫博士老人款内裤",
                img: "https://img14.360buyimg.com/n7/jfs/t16519/285/2653381957/332101/291d66be/5ab9f122Ncf6bad38.jpg",
                num: 30
              }
            ]
          }
        ],
        downOrder: [{
            order_num: "12345678912345678900",
            price: 678,
            nickname: "下单者",
            phone: "18333333333",
            time: 1577962676384
          },
          {
            order_num: "12345678912345678900",
            price: 678,
            nickname: "下单者",
            phone: "18333333333",
            time: 1577000000000
          }
        ]
      }
    };
  });

  router.get("/app/chart", async ctx => {
    await new Promise(resolve => setTimeout(() => resolve(), 567));
    let data = {};
    if (+ctx.query.type === 0) {
      if (+ctx.query.day === 30) {
        data = {
          date: [
            "10/30",
            "10/31",
            "11/01",
            "11/02",
            "11/03",
            "11/04",
            "11/05",
            "11/06",
            "11/07",
            "11/08",
            "11/09",
            "11/10",
            "11/11",
            "11/12",
            "11/13",
            "10/30",
            "10/31",
            "11/01",
            "11/02",
            "11/03",
            "11/04",
            "11/05",
            "11/06",
            "11/07",
            "11/08",
            "11/09",
            "11/10",
            "11/11",
            "11/12",
            "11/13"
          ],
          data: [
            350,
            300,
            250,
            370,
            400,
            200,
            350,
            280,
            250,
            370,
            640,
            200,
            350,
            560,
            250,
            350,
            300,
            250,
            370,
            400,
            200,
            350,
            280,
            250,
            370,
            640,
            200,
            350,
            560,
            250
          ]
        };
      } else if (+ctx.query.day === 15) {
        data = {
          date: [
            "10/30",
            "10/31",
            "11/01",
            "11/02",
            "11/03",
            "11/04",
            "11/05",
            "11/06",
            "11/07",
            "11/08",
            "11/09",
            "11/10",
            "11/11",
            "11/12",
            "11/13"
          ],
          data: [
            350,
            300,
            250,
            370,
            400,
            200,
            350,
            280,
            250,
            370,
            640,
            200,
            350,
            560,
            250
          ]
        };
      } else {
        data = {
          date: [
            "11/07",
            "11/08",
            "11/09",
            "11/10",
            "11/11",
            "11/12",
            "11/13"
          ],
          data: [250, 370, 640, 200, 350, 560, 250]
        };
      }
    } else if (+ctx.query.type === 1) {
      if (+ctx.query.day === 30) {
        data = {
          date: [
            "10/30",
            "10/31",
            "11/01",
            "11/02",
            "11/03",
            "11/04",
            "11/05",
            "11/06",
            "11/07",
            "11/08",
            "11/09",
            "11/10",
            "11/11",
            "11/12",
            "11/13",
            "10/30",
            "10/31",
            "11/01",
            "11/02",
            "11/03",
            "11/04",
            "11/05",
            "11/06",
            "11/07",
            "11/08",
            "11/09",
            "11/10",
            "11/11",
            "11/12",
            "11/13"
          ],
          data: [
            35,
            30,
            25,
            37,
            40,
            20,
            35,
            28,
            25,
            37,
            64,
            20,
            35,
            56,
            25,
            35,
            30,
            25,
            37,
            40,
            20,
            35,
            28,
            25,
            37,
            64,
            20,
            35,
            56,
            25
          ]

        };
      } else if (+ctx.query.day === 15) {
        data = {
          date: [
            "10/30",
            "10/31",
            "11/01",
            "11/02",
            "11/03",
            "11/04",
            "11/05",
            "11/06",
            "11/07",
            "11/08",
            "11/09",
            "11/10",
            "11/11",
            "11/12",
            "11/13"
          ],
          data: [35, 30, 25, 37, 40, 20, 35, 28, 25, 37, 64, 20, 35, 56, 25]
        };
      } else {
        data = {
          date: [
            "11/07",
            "11/08",
            "11/09",
            "11/10",
            "11/11",
            "11/12",
            "11/13"
          ],
          data: [25, 37, 64, 20, 35, 56, 25]
        };
      }
    } else if (+ctx.query.type === 2) {
      if (+ctx.query.day === 30) {
        data = {
          date: [
            "10/30",
            "10/31",
            "11/01",
            "11/02",
            "11/03",
            "11/04",
            "11/05",
            "11/06",
            "11/07",
            "11/08",
            "11/09",
            "11/10",
            "11/11",
            "11/12",
            "11/13",
            "10/30",
            "10/31",
            "11/01",
            "11/02",
            "11/03",
            "11/04",
            "11/05",
            "11/06",
            "11/07",
            "11/08",
            "11/09",
            "11/10",
            "11/11",
            "11/12",
            "11/13"
          ],
          data: [
            3500,
            3000,
            2500,
            3700,
            4000,
            2000,
            3500,
            2800,
            2500,
            3700,
            6400,
            2000,
            3500,
            5600,
            2500,
            3500,
            3000,
            2500,
            3700,
            4000,
            2000,
            3500,
            2800,
            2500,
            3700,
            6400,
            2000,
            3500,
            5600,
            2500
          ]

        };
      } else if (+ctx.query.day === 15) {
        data = {
          date: [
            "10/30",
            "10/31",
            "11/01",
            "11/02",
            "11/03",
            "11/04",
            "11/05",
            "11/06",
            "11/07",
            "11/08",
            "11/09",
            "11/10",
            "11/11",
            "11/12",
            "11/13"
          ],
          data: [
            3500,
            3000,
            2500,
            3700,
            4000,
            2000,
            3500,
            2800,
            2500,
            3700,
            6400,
            2000,
            3500,
            5600,
            2500
          ]

        };
      } else {
        data = {
          date: [
            "11/07",
            "11/08",
            "11/09",
            "11/10",
            "11/11",
            "11/12",
            "11/13"
          ],
          data: [2500, 3700, 6400, 2000, 3500, 5600, 2500]
        };
      }
    }
    await new Promise(resolve => setTimeout(() => resolve(), 0));
    ctx.body = {
      code: 200,
      message: "获取财富管理图表数据成功",
      data
    };
  });
};