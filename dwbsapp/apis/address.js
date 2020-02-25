module.exports = router => {
  router.get("/user/show_address", async ctx => {
    await new Promise(resolve => setTimeout(() => resolve(), 0));
    ctx.body = {
      code: 200,
      message: "获取地址成功",
      data: {
        list: [
          {
            id: "1",
            con_name: "尹成诺",
            con_mobile: "18333333333",
            provice: "贵州省",
            city: "贵阳市",
            area: "南明区",
            address: "水水水水水水水水水水"
          },
          {
            id: "2",
            con_name: "尹成诺",
            con_mobile: "18333333333",
            provice: "贵州省",
            city: "贵阳市",
            area: "南明区",
            address: "红红火火恍恍惚惚"
          },
          {
            id: "3",
            con_name: "尹成诺",
            con_mobile: "18333333333",
            provice: "贵州省",
            city: "贵阳市",
            area: "南明区",
            address: "哈哈哈哈哈哈哈哈哈"
          }
        ]
      }
    };
  });

  router.post("/user/add_address", async ctx => {
    await new Promise(resolve => setTimeout(() => resolve(), 0));
    ctx.body = {
      code: 200,
      message: "新增地址成功",
      data: { id: 123 }
    };
  });
  router.get("/user/del_address", async ctx => {
    await new Promise(resolve => setTimeout(() => resolve(), 0));
    ctx.body = {
      code: 200,
      message: "删除地址成功"
    };
  });
  router.post("/user/update_address", async ctx => {
    await new Promise(resolve => setTimeout(() => resolve(), 0));
    ctx.body = {
      code: 200,
      message: "更新地址成功"
    };
  });
};

// const data = [
//   {
//     season: 20,
//     week1: {
//       join_per_num: 666,
//       sold_per_num: 555,
//       join_avergae: 6.54,
//       sold_avergae: 8.98,
//       sold_num: 6584,
//       sold_money: 695412
//     },
//     week2: {
//       join_per_num: 666,
//       sold_per_num: 555,
//       join_avergae: 6.54,
//       sold_avergae: 8.98,
//       sold_num: 6584,
//       sold_money: 695412
//     },
//     week3: {
//       join_per_num: 666,
//       sold_per_num: 555,
//       join_avergae: 6.54,
//       sold_avergae: 8.98,
//       sold_num: 6584,
//       sold_money: 695412
//     },
//     total: [413243, 373156, 454529, 439300, 498254, 407709, 401506, 402839, 401477, 415632, 409159, 455262, 360599, 473905, 435772, 516701, 61278, 0, 0, 0, 0]
//   },
//   {
//     season: 19,
//     week1: {
//       join_per_num: 666,
//       sold_per_num: 555,
//       join_avergae: 6.54,
//       sold_avergae: 8.98,
//       sold_num: 6584,
//       sold_money: 695412
//     },
//     week2: {
//       join_per_num: 666,
//       sold_per_num: 555,
//       join_avergae: 6.54,
//       sold_avergae: 8.98,
//       sold_num: 6584,
//       sold_money: 695412
//     },
//     week3: {
//       join_per_num: 666,
//       sold_per_num: 555,
//       join_avergae: 6.54,
//       sold_avergae: 8.98,
//       sold_num: 6584,
//       sold_money: 695412
//     },
//     total: [383889, 479883, 489280, 512301, 438184, 439086, 497523, 438486, 451212, 447782, 474046, 477906, 513130, 474260, 484086, 488137, 557169, 623033, 760885, 839077, 1219662]
//   }
// ];
