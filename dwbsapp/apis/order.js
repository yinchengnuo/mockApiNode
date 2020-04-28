const size = 15;
const total = 50;
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
        num: i + 1,
      },
      {
        id: 2,
        price: 666,
        storage: 66,
        name: "大卫博士老人款内裤",
        img:
          "https://img14.360buyimg.com/n7/jfs/t16519/285/2653381957/332101/291d66be/5ab9f122Ncf6bad38.jpg",
        num: i + 1,
      },
    ],
  });
}

module.exports = (router) => {
  router.get("/order/pay", async (ctx) => {
    ctx.body = {
      code: 200,
      message: "订单付款成功",
    };
  });

  router.get("/order/again", async (ctx) => {
    ctx.body = {
      code: 200,
      message: "再次购买成功",
      data: {
        order_num: "12345678901234567890",
      }
    };
  });

  router.get("/order/my_order1", async (ctx) => {
    await new Promise((resolve) => setTimeout(() => resolve(), 0));
    const size = 15;
    const total = 50;
    const list = [];
    for (let i = 0; i < total; i++) {
      list.push(
        ...[
          {
            id:
              Date.now()
                .toString()
                .split("")
                .sort(() => Math.random() - 0.5)
                .join("") + "",
            order: [
              {
                main_img:
                  "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=173548212,2966830153&fm=15&gp=0.jpg",
              },
              {
                main_img:
                  "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=14457317,2686115627&fm=26&gp=0.jpg",
              },
              {
                main_img:
                  "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=173548212,2966830153&fm=15&gp=0.jpg",
              },
              {
                main_img:
                  "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=14457317,2686115627&fm=26&gp=0.jpg",
              },
              {
                main_img:
                  "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=173548212,2966830153&fm=15&gp=0.jpg",
              },
              {
                main_img:
                  "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=14457317,2686115627&fm=26&gp=0.jpg",
              },
            ],
            type: "3",
            total: 10,
            is_deleted: false,
            pay_status: false,
            status: 0,
            order_num:
              Date.now()
                .toString()
                .split("")
                .sort(() => Math.random() - 0.5)
                .join("") + "",
            money: 5200,
            created_at: "2020-04-25 10:53:15",
          },
          {
            id:
              Date.now()
                .toString()
                .split("")
                .sort(() => Math.random() - 0.5)
                .join("") + "",
            order: [
              {
                main_img:
                  "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=173548212,2966830153&fm=15&gp=0.jpg",
              },
              {
                main_img:
                  "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=14457317,2686115627&fm=26&gp=0.jpg",
              },
              {
                main_img:
                  "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=173548212,2966830153&fm=15&gp=0.jpg",
              },
              {
                main_img:
                  "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=14457317,2686115627&fm=26&gp=0.jpg",
              },
              {
                main_img:
                  "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=173548212,2966830153&fm=15&gp=0.jpg",
              },
              {
                main_img:
                  "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=14457317,2686115627&fm=26&gp=0.jpg",
              },
            ],
            type: "3",
            total: 10,
            is_deleted: false,
            pay_status: true,
            status: 0,
            order_num:
              Date.now()
                .toString()
                .split("")
                .sort(() => Math.random() - 0.5)
                .join("") + "",
            money: 5200,
            created_at: "2020-04-25 10:53:15",
          },
          {
            id:
              Date.now()
                .toString()
                .split("")
                .sort(() => Math.random() - 0.5)
                .join("") + "",
            order: [
              {
                main_img:
                  "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=173548212,2966830153&fm=15&gp=0.jpg",
              },
              {
                main_img:
                  "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=14457317,2686115627&fm=26&gp=0.jpg",
              },
              {
                main_img:
                  "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=173548212,2966830153&fm=15&gp=0.jpg",
              },
              {
                main_img:
                  "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=14457317,2686115627&fm=26&gp=0.jpg",
              },
              {
                main_img:
                  "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=173548212,2966830153&fm=15&gp=0.jpg",
              },
              {
                main_img:
                  "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=14457317,2686115627&fm=26&gp=0.jpg",
              },
            ],
            type: "3",
            total: 10,
            is_deleted: true,
            pay_status: false,
            status: 0,
            order_num:
              Date.now()
                .toString()
                .split("")
                .sort(() => Math.random() - 0.5)
                .join("") + "",
            money: 5200,
            created_at: "2020-04-25 10:53:15",
          },
          {
            id:
              Date.now()
                .toString()
                .split("")
                .sort(() => Math.random() - 0.5)
                .join("") + "",
            order: [
              {
                main_img:
                  "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=173548212,2966830153&fm=15&gp=0.jpg",
              },
              {
                main_img:
                  "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=14457317,2686115627&fm=26&gp=0.jpg",
              },
              {
                main_img:
                  "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=173548212,2966830153&fm=15&gp=0.jpg",
              },
              {
                main_img:
                  "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=14457317,2686115627&fm=26&gp=0.jpg",
              },
              {
                main_img:
                  "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=173548212,2966830153&fm=15&gp=0.jpg",
              },
              {
                main_img:
                  "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=14457317,2686115627&fm=26&gp=0.jpg",
              },
            ],
            type: "3",
            total: 10,
            is_deleted: false,
            pay_status: true,
            status: 2,
            order_num:
              Date.now()
                .toString()
                .split("")
                .sort(() => Math.random() - 0.5)
                .join("") + "",
            money: 5200,
            created_at: "2020-04-25 10:53:15",
          },
          {
            id:
              Date.now()
                .toString()
                .split("")
                .sort(() => Math.random() - 0.5)
                .join("") + "",
            order: [
              {
                main_img:
                  "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=173548212,2966830153&fm=15&gp=0.jpg",
              },
              {
                main_img:
                  "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=14457317,2686115627&fm=26&gp=0.jpg",
              },
              {
                main_img:
                  "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=173548212,2966830153&fm=15&gp=0.jpg",
              },
              {
                main_img:
                  "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=14457317,2686115627&fm=26&gp=0.jpg",
              },
              {
                main_img:
                  "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=173548212,2966830153&fm=15&gp=0.jpg",
              },
              {
                main_img:
                  "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=14457317,2686115627&fm=26&gp=0.jpg",
              },
            ],
            type: "3",
            total: 10,
            is_deleted: false,
            pay_status: true,
            status: 3,
            order_num:
              Date.now()
                .toString()
                .split("")
                .sort(() => Math.random() - 0.5)
                .join("") + "",
            money: 5200,
            created_at: "2020-04-25 10:53:15",
          },
          {
            id:
              Date.now()
                .toString()
                .split("")
                .sort(() => Math.random() - 0.5)
                .join("") + "",
            order: [
              {
                main_img:
                  "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=173548212,2966830153&fm=15&gp=0.jpg",
              },
              {
                main_img:
                  "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=14457317,2686115627&fm=26&gp=0.jpg",
              },
              {
                main_img:
                  "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=173548212,2966830153&fm=15&gp=0.jpg",
              },
              {
                main_img:
                  "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=14457317,2686115627&fm=26&gp=0.jpg",
              },
              {
                main_img:
                  "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=173548212,2966830153&fm=15&gp=0.jpg",
              },
              {
                main_img:
                  "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=14457317,2686115627&fm=26&gp=0.jpg",
              },
            ],
            type: "3",
            total: 10,
            is_deleted: false,
            pay_status: true,
            status: 4,
            order_num:
              Date.now()
                .toString()
                .split("")
                .sort(() => Math.random() - 0.5)
                .join("") + "",
            money: 5200,
            created_at: "2020-04-25 10:53:15",
          },
        ]
      );
    }
    ctx.body = {
      code: 200,
      message: "获取我的订单成功",
      data: {
        size,
        list: list.slice(
          (ctx.query.page - 1) * size,
          (ctx.query.page - 1) * size + size
        ),
      },
    };
  });

  router.get("/order/detail1", async (ctx) => {
    console.log(ctx.request.query);
    ctx.body = {
      code: 200,
      message: "获取订单详情成功",
      data: {
        address: {
          id: "1",
          con_name: "尹成诺",
          con_mobile: "18333333333",
          provice: "贵州省",
          city: "贵阳市",
          area: "南明区",
          address: "水水水水水水水水水水",
        },
        remark:
          "备注备注备注备注备注备注备注备注备备注备注备注备注备注备注备注备注备注备注备注备注备注",
        list: [
          {
            id: '0',
            name: "大卫博士精装款内裤男款",
            size: ["L", "XL", "XXL"],
            size_id: [1, 2, 3],
            num: [1, 2, 3],
            money: 520,
            unit: "件",
            main_img:
              "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=753780376,2620165281&fm=26&gp=0.jpg",
            banner_img: [],
            sec_attr: "男款",
          },
          {
            id: '1',
            name: "大卫博士简约款内裤男款",
            size: ["L", "XL", "XXL"],
            size_id: [4, 5, 6],
            num: [1, 2, 3],
            money: 520,
            unit: "件",
            main_img:
              "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=753780376,2620165281&fm=26&gp=0.jpg",
            banner_img: [],
            sec_attr: "男款",
          },
          {
            id: '2',
            name: "大卫博士老人款内裤男款",
            size: ["L", "XL", "XXL"],
            size_id: [7, 8, 9],
            num: [1, 2, 3],
            money: 520,
            unit: "件",
            main_img:
              "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=753780376,2620165281&fm=26&gp=0.jpg",
            banner_img: [],
            sec_attr: "男款",
          },
        ],
      },
    };
  });

  router.get("/order/del", async (ctx) => {
    ctx.body = {
      code: 200,
      message: "删除订单成功",
    };
  });

  router.get("/order/order_sure_pay", async (ctx) => {
    ctx.body = {
      code: 200,
      message: "确认收款成功",
    };
  });

  router.get("/order/order_complete", async (ctx) => {
    ctx.body = {
      code: 200,
      message: "确认收货成功",
    };
  });

  router.post("/order/forward", async (ctx) => {
    console.log(JSON.stringify(ctx.request.body, null, 2));
    ctx.body = {
      code: 200,
      message: "发货/转单成功",
    };
  });

  router.post("/order/submit_order", async (ctx) => {
    console.log(JSON.stringify(ctx.request.body, null, 2));
    ctx.body = {
      code: 200,
      message: "订货下单成功",
      data: {
        order_num: "12345678901234567890",
      },
    };
  });

  router.get("/order/my_order", async (ctx) => {
    ctx.body = {
      code: 200,
      message: "获取我的订单成功(status 0 代付款，1待收货，2已完成)",
      data: {
        size,
        list: list.slice(
          (ctx.query.page - 1) * size,
          (ctx.query.page - 1) * size + size
        ),
      },
    };
  });

  router.get("/order/order_lower", async (ctx) => {
    ctx.body = {
      code: 200,
      message: "获取下级订单成功(0 待付款 1 待发货 2 待收货 3 已完成)",
      data: {
        size,
        list: list.slice(
          (ctx.query.page - 1) * size,
          (ctx.query.page - 1) * size + size
        ),
      },
    };
  });

  router.get("/order/order_turn", async (ctx) => {
    ctx.body = {
      code: 200,
      message: "下级订单-已转单",
      data: {
        size,
        list: list.slice(
          (ctx.query.page - 1) * size,
          (ctx.query.page - 1) * size + size
        ),
      },
    };
  });

  router.get("/order/my_storage", async (ctx) => {
    ctx.body = {
      code: 200,
      message: "获取我的库存成功",
      data: {
        list: [
          {
            price: 666,
            name: "大卫博士精装款内裤",
            img:
              "https://img.alicdn.com/imgextra/i4/40595992/O1CN012kjBGt1u8NnUCnx9p_!!0-saturn_solar.jpg_220x220.jpg_.webp",
            typeList: [
              {
                name: "男款（黑色）",
                size: ["S", "M", "L", "XL", "XXL"],
                num: ["1", "1", "1", "1", "1"],
              },
              {
                name: "男款（白色）",
                size: ["S", "M", "L", "XL", "XXL"],
                num: ["1", "1", "1", "1", "1"],
              },
              {
                name: "男款（蓝色）",
                size: ["S", "M", "L", "XL", "XXL"],
                num: ["0", "0", "0", "66", "0"],
              },
              {
                name: "男款（黑色）",
                size: ["S", "M", "L", "XL", "XXL"],
                num: ["1", "1", "1", "1", "1"],
              },
              {
                name: "男款（白色）",
                size: ["S", "M", "L", "XL", "XXL"],
                num: ["1", "1", "1", "1", "1"],
              },
              {
                name: "男款（蓝色）",
                size: ["S", "M", "L", "XL", "XXL"],
                num: ["0", "0", "0", "66", "0"],
              },
              {
                name: "男款（黑色）",
                size: ["S", "M", "L", "XL", "XXL"],
                num: ["1", "1", "1", "1", "1"],
              },
              {
                name: "男款（白色）",
                size: ["S", "M", "L", "XL", "XXL"],
                num: ["1", "1", "1", "1", "1"],
              },
              {
                name: "男款（蓝色）",
                size: ["S", "M", "L", "XL", "XXL"],
                num: ["0", "0", "0", "66", "0"],
              },
            ],
          },
          {
            price: 666,
            name: "大卫博士简约款内裤",
            img:
              "https://img14.360buyimg.com/n7/jfs/t1/58382/32/4757/556896/5d27f33cE89c97b66/85ffb23daf13f59c.jpg",
            typeList: [
              {
                name: "男款（黑色）",
                size: ["S", "M", "L", "XL", "XXL"],
                num: ["1", "1", "1", "1", "1"],
              },
              {
                name: "男款（白色）",
                size: ["S", "M", "L", "XL", "XXL"],
                num: ["1", "1", "1", "1", "1"],
              },
            ],
          },
          {
            price: 666,
            name: "大卫博士老人款内裤",
            img:
              "https://img14.360buyimg.com/n7/jfs/t16519/285/2653381957/332101/291d66be/5ab9f122Ncf6bad38.jpg",
            typeList: [
              {
                name: "男款（黑色）",
                size: ["S", "M", "L", "XL", "XXL"],
                num: ["1", "1", "1", "1", "1"],
              },
              {
                name: "男款（白色）",
                size: ["S", "M", "L", "XL", "XXL"],
                num: ["1", "1", "1", "1", "1"],
              },
            ],
          },
        ],
      },
    };
  });

  router.get("/order/detail", async (ctx) => {
    console.log(ctx.request.query);
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
          address: "水水水水水水水水水水",
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
                size_id: [771, 772],
              },
              {
                type_id: 1,
                name: "男款（白色）",
                size: ["XL", "XXL"],
                num: [10, 10],
                size_id: [773, 774],
              },
            ],
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
                size_id: [775, 776],
              },
              {
                type_id: 3,
                name: "男款（白色）",
                size: ["XL", "XXL"],
                num: [10, 10],
                size_id: [777, 778],
              },
            ],
          },
        ],
      },
    };
  });
};
