const size = 15;
const total = 50;

module.exports = router => {
  router.get("/order/del", async ctx => {
    ctx.body = {
      code: 200,
      message: "删除订单成功"
    };
  });

  router.get("/order/order_sure_pay", async ctx => {
    ctx.body = {
      code: 200,
      message: "确认收款成功"
    };
  });

  router.get("/order/order_complete", async ctx => {
    ctx.body = {
      code: 200,
      message: "确认收货成功"
    };
  });

  router.post("/order/forward", async ctx => {
    console.log(JSON.stringify(ctx.request.body, null, 2));
    ctx.body = {
      code: 200,
      message: "发货/转单成功"
    };
  });

  router.post("/order/submit_order", async ctx => {
    console.log(JSON.stringify(ctx.request.body, null, 2));
    ctx.body = {
      code: 200,
      message: "订货下单成功",
      data: {
        order_num: '12345678901234567890'
      }
    };
  });

  const list = [];
  for (let i = 0; i < total; i++) {
    list.push({
      order_num: 1 + i,
      forward: i % 2 === 0 ? true : false,
      status: i % 2 === 0 ? 3 : 4,
      goodList: [
        {
          id: 0,
          price: 999,
          storage: 0,
          name: "大卫博士精装款内裤",
          img:
            "https://img.alicdn.com/imgextra/i4/40595992/O1CN012kjBGt1u8NnUCnx9p_!!0-saturn_solar.jpg_220x220.jpg_.webp",
          num: i + 1
        },
        {
          id: 2,
          price: 666,
          storage: 66,
          name: "大卫博士老人款内裤",
          img:
            "https://img14.360buyimg.com/n7/jfs/t16519/285/2653381957/332101/291d66be/5ab9f122Ncf6bad38.jpg",
          num: i + 1
        }
      ]
    });
  }

  router.get("/order/my_order", async ctx => {
    ctx.body = {
      code: 200,
      message: "获取我的订单成功(status 0 代付款，1待收货，2已完成)",
      data: {
        size,
        list: list.slice(
          (ctx.query.page - 1) * size,
          (ctx.query.page - 1) * size + size
        )
      }
    };
  });

  router.get("/order/order_lower", async ctx => {
    ctx.body = {
      code: 200,
      message: "获取下级订单成功(0 待付款 1 待发货 2 待收货 3 已完成)",
      data: {
        size,
        list: list.slice(
          (ctx.query.page - 1) * size,
          (ctx.query.page - 1) * size + size
        )
      }
    };
  });

  router.get("/order/order_turn", async ctx => {
    ctx.body = {
      code: 200,
      message: "下级订单-已转单",
      data: {
        size, list: list.slice(
          (ctx.query.page - 1) * size,
          (ctx.query.page - 1) * size + size
        )
      }
    };
  });

  router.get("/order/my_storage", async ctx => {
    ctx.body = {
      code: 200,
      message: "获取我的库存成功",
      data: {
        list: [
          {
            price: 666,
            name: "大卫博士精装款",
            img:
              "https://img.alicdn.com/imgextra/i4/40595992/O1CN012kjBGt1u8NnUCnx9p_!!0-saturn_solar.jpg_220x220.jpg_.webp",
            typeList: [
              {
                name: "男款（黑色）",
                size: ["S", "M", "L", "XL", "XXL"],
                num: ["1", "1", "1", "1", "1"]
              },
              {
                name: "男款（白色）",
                size: ["S", "M", "L", "XL", "XXL"],
                num: ["1", "1", "1", "1", "1"]
              },
              {
                name: "男款（蓝色）",
                size: ["S", "M", "L", "XL", "XXL"],
                num: ["0", "0", "0", "0", "0"]
              }
            ]
          },
          {
            price: 666,
            name: "大卫博士简约款",
            img:
              "https://img14.360buyimg.com/n7/jfs/t1/58382/32/4757/556896/5d27f33cE89c97b66/85ffb23daf13f59c.jpg",
            typeList: [
              {
                name: "男款（黑色）",
                size: ["S", "M", "L", "XL", "XXL"],
                num: ["1", "1", "1", "1", "1"]
              },
              {
                name: "男款（白色）",
                size: ["S", "M", "L", "XL", "XXL"],
                num: ["1", "1", "1", "1", "1"]
              }
            ]
          },
          {
            price: 666,
            name: "大卫博士老人款",
            img:
              "https://img14.360buyimg.com/n7/jfs/t16519/285/2653381957/332101/291d66be/5ab9f122Ncf6bad38.jpg",
            typeList: [
              {
                name: "男款（黑色）",
                size: ["S", "M", "L", "XL", "XXL"],
                num: ["1", "1", "1", "1", "1"]
              },
              {
                name: "男款（白色）",
                size: ["S", "M", "L", "XL", "XXL"],
                num: ["1", "1", "1", "1", "1"]
              }
            ]
          }
        ]
      }
    };
  });

  router.get("/order/detail", async ctx => {
    console.log(ctx.request.query)
    ctx.body = {
      code: 200,
      message: "获取订单详情成功",
      data: {
        order_num: "5675678901472583690",
        time: 1578046081093,
        status: 2,
        address: {
          id: "1",
          con_name: "尹成诺",
          con_mobile: "18333333333",
          provice: "贵州省",
          city: "贵阳市",
          area: "南明区",
          address: "水水水水水水水水水水"
        },
        remark:
          "备注备注备注备注备注备注备注备注备备注备注备注备注备注备注备注备注备注备注备注备注备注",
        goodList: [
          {
            id: 0,
            price: 999,
            storage: 0,
            name: "大卫博士精装款内裤",
            img:
              "https://img.alicdn.com/imgextra/i4/40595992/O1CN012kjBGt1u8NnUCnx9p_!!0-saturn_solar.jpg_220x220.jpg_.webp",
            typeList: [
              {
                type_id: 0,
                name: "男款（黑色）",
                size: ["XL", "XXL"],
                num: [10, 10],
                size_id: [774, 775]
              },
              {
                type_id: 1,
                name: "男款（白色）",
                size: ["XL", "XXL"],
                num: [10, 10],
                size_id: [774, 775]
              }
            ]
          },
          {
            id: 2,
            price: 666,
            storage: 66,
            name: "大卫博士老人款内裤",
            img:
              "https://img14.360buyimg.com/n7/jfs/t16519/285/2653381957/332101/291d66be/5ab9f122Ncf6bad38.jpg",
            typeList: [
              {
                type_id: 2,
                name: "男款（黑色）",
                size: ["XL", "XXL"],
                num: [10, 10],
                size_id: [774, 775]
              },
              {
                type_id: 3,
                name: "男款（白色）",
                size: ["XL", "XXL"],
                num: [10, 10],
                size_id: [774, 775]
              }
            ]
          }
        ]
      }
    };
  });
};
