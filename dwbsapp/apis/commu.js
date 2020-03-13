const total = 12;
const size = 15;

module.exports = router => {
  const list = [];
  for (let i = 0; i < total / 2; i++) {
    list.push({
      type: 0, // 文章
      id: Math.floor(Math.random() * 1000000) + '',
      title: "常来微聊背后的逻辑",
      avatar:
        "https://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1582962246&t=76ddb9aebe627c4a5bebc91cba9fab84",
      author: "大卫博士官方",
      off: 1, // 官方
      summary:
        "很多人都有自己的梦想！很多人都有自己的使命！很多人都想在某个领域尽情地释放自己，就像他一样!很多人都想在某个领域尽情地释放自己，就像他一样",
      created_at: "1575111955739",
      imgurl: [
        "https://upload-images.jianshu.io/upload_images/2743354-2d9e04b6170d7bc1.JPG?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp",
        "https://upload-images.jianshu.io/upload_images/2743354-a5978835106beaf8.JPG?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp",
        "https://upload-images.jianshu.io/upload_images/2743354-5bfd6e4cd6c253a3.JPG?imageMogr2/auto-orient/strip|imageView2/2/w/663/format/webp",
      ],
      like: i % 2 === 0 ? true : false,
      collection: i % 2 === 0 ? false : true
    });
    list.push({
      type: 1, // 视频
      id: Math.floor(Math.random() * 1000000) + '',
      title: "uni-app视频介绍",
      author: "大卫博士官方",
      off: 1, // 官方
      avatar:
        "https://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1582962246&t=76ddb9aebe627c4a5bebc91cba9fab84",
      summary:
        "我们精心准备了一个简单的十分钟介绍视频，方便你快速了解uni-app的主要特征：",
      created_at: '1575111955739',
      imgurl: [
        "https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/poster.png",
        "https://upload-images.jianshu.io/upload_images/2743354-a5978835106beaf8.JPG?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp",
        "https://upload-images.jianshu.io/upload_images/2743354-5bfd6e4cd6c253a3.JPG?imageMogr2/auto-orient/strip|imageView2/2/w/663/format/webp"
      ],
      like: i % 2 === 0 ? true : false,
      collection: i % 2 === 0 ? false : true
    });
  }

  router.get("/article/show_list", async ctx => {
    await new Promise(resolve => setTimeout(() => resolve(), 0));
    ctx.body = {
      code: 200,
      message: "获取社区推荐/最新/常来微聊成功",
      data: {
        total,
        size,
        list: ctx.query.page == 1 && ctx.query.type == 0 ? [
          {
            url: 'https://www.huya.com/',
            type: 2,
            title: '大卫博士跨年联欢会正在抽奖快来观看大卫博士跨年联欢会正在抽奖快来观看',
            created_at: '1575111955739',
            imgurl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3662286034,1560101814&fm=26&gp=0.jpg',
          }, ...list.slice(
            (ctx.query.page - 1) * size,
            (ctx.query.page - 1) * size + size
          )] : list.slice(
            (ctx.query.page - 1) * size,
            (ctx.query.page - 1) * size + size
          )
      }
    };
  });

  router.get("/article/mycollection", async ctx => {
    await new Promise(resolve => setTimeout(() => resolve(), 0));
    ctx.body = {
      code: 200,
      message: "获取社区收藏成功",
      data: {
        total,
        size,
        // list: list.slice(
        //   (ctx.query.page - 1) * size,
        //   (ctx.query.page - 1) * size + size
        // )
        list: []
      }
    };
  });

  router.get("/article/like", async ctx => {
    console.log(ctx.query)
    ctx.body = {
      code: 200,
      message: "点赞收藏成功"
    };
  });
};
