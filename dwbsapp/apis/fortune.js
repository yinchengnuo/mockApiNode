const size = 15;
const total = 50;

module.exports = router => {
  const list = [];
  for (let i = 0; i < total; i++) {
    list.push({
      type: Math.floor(Math.random() * 5),
      money: i + 1,
      created_at: "2018-02-03 11:20:37"
    });
  }

  router.get("/income/income", async ctx => {
    await new Promise(resolve => setTimeout(() => resolve(), 0));
    ctx.body = {
      code: 200,
      message: "获取收入流水成功",
      data: {
        size,
        total,
        all_money: 666666,
        list: list.slice(
          (ctx.query.page - 1) * size,
          (ctx.query.page - 1) * size + size
        )
      }
    };
  });

  router.get("/income/detail", async ctx => {
    await new Promise(resolve => setTimeout(() => resolve(), 123));
    ctx.body = {
      code: 200,
      message: "获取奖励收入/支出详情",
      data: {
        all_money: Math.floor(Math.random() * 10000000),
        money: Math.floor(Math.random() * 1000000)
      }
    };
  });

  router.get("/inventory/record", async ctx => {
    await new Promise(resolve => setTimeout(() => resolve(), 0));
    ctx.body = {
      code: 200,
      message: "零售录单成功"
    };
  });

  router.get("/inventory/record_his", async ctx => {
    await new Promise(resolve => setTimeout(() => resolve(), 0));
    const his_list = list.slice(
      (ctx.query.page - 1) * size,
      (ctx.query.page - 1) * size + size
    );
    his_list.forEach(e => (e.type = 1));
    ctx.body = {
      code: 200,
      message: "获取零售录单历史记录成功",
      data: {
        size,
        total,
        all_money: 666666,
        list: his_list
      }
    };
  });
};
