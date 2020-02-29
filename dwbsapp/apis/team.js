const size = 15;
const total = 50;

module.exports = router => {
  const list = [];
  for (let i = 0; i < total; i++) {
    list.push({
      id: i,
      avatar:
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2396422245,934122690&fm=26&gp=0.jpg",
      nickname: i + "代理名字代理名字代理名字代理名字代理名字",
      level: "特级代理",
      money: 100000 - i,
      created_at: "2019-12-06-12:50"
    });
  }

  router.get("/team/list", async ctx => {
    await new Promise(resolve => setTimeout(() => resolve(), 0));
    ctx.body = {
      code: 200,
      message: "获取直属代理/下级代理列表成功",
      data: {
        size,
        total,
        today_new: 50, // 本日日新增人数
        month_new: 500, // 本月新增人数
        list: list.slice(
          (ctx.query.page - 1) * size,
          (ctx.query.page - 1) * size + size
        )
      }
    };
  });

  router.get("/team/per_info", async ctx => {
    await new Promise(resolve => setTimeout(() => resolve(), 0));
    ctx.body = {
      code: 200,
      message: "获取个人名片信息成功",
      data: {
        id: 654,
        team_num: 666,
        nickname: "昵称",
        level: "特级代理",
        real_name: "尹成诺",
        mobile: "18338112210",
        up_nickname: "可乐啊",
        recom_nickname: "可乐啊",
        avatar: "http://img3.imgtn.bdimg.com/it/u=1107263072,1224997471&fm=26&gp=0.jpg"
      }
    };
  });

  router.get("/team/money", async ctx => {
    await new Promise(resolve => setTimeout(() => resolve(), 0));
    ctx.body = {
      code: 200,
      message: "获取团队销售业绩成功",
      data: {
        size,
        total,
        money: 666666,
        list: list.slice(
          (ctx.query.page - 1) * size,
          (ctx.query.page - 1) * size + size
        )
      }
    };
  });

  router.get("/team/invite", async ctx => {
    await new Promise(resolve => setTimeout(() => resolve(), 0));
    ctx.body = {
      code: 200,
      message: "获取我的邀请已激活/未激活成功",
      data: {
        size,
        total,
        list: list.slice(
          (ctx.query.page - 1) * size,
          (ctx.query.page - 1) * size + size
        )
      }
    };
  });

  router.get("/team/examine_list", async ctx => {
    await new Promise(resolve => setTimeout(() => resolve(), 0));
    let list;
    if (+ctx.query.type === 0) {
      list = [
        {
          id: 1,
          apply_name: "注册申请人昵称1",
          apply_phone: 18338112210,
          invite_name: "某邀请代理昵称1",
          apply_time: "2020-01-01-55",
          intive_status: 0, // 邀请人审核进度 0 未审核 1 通过 2 驳回
          intive_cause: '', // 邀请人驳回原因
          up_status: 0, // 上级审核进度 0 未审核 1 通过 2 驳回
          up_cause: "", // 上级驳回原因
          real_name: "尹成诺",
          id_card_num: "123542569854512365",
          level: ""
        },
        {
          id: 2,
          apply_name: "注册申请人昵称2",
          apply_phone: 18338112210,
          invite_name: "某邀请代理昵称1",
          apply_time: "2020-01-01-55",
          intive_status: 1, // 邀请人审核进度 0 未审核 1 通过 2 驳回
          intive_cause: '', // 邀请人驳回原因
          up_status: 0, // 上级审核进度 0 未审核 1 通过 2 驳回
          up_cause: "", // 上级驳回原因
          real_name: "尹成诺",
          id_card_num: "123542569854512365",
          level: ""
        },
        {
          id: 7,
          apply_name: "注册申请人昵称7",
          apply_phone: 18338112210,
          invite_name: "某邀请代理昵称1",
          apply_time: "2020-01-01-55",
          intive_status: 1, // 邀请人审核进度 0 未审核 1 通过 2 驳回
          intive_cause: '', // 邀请人驳回原因
          up_status: 1, // 上级审核进度 0 未审核 1 通过 2 驳回
          up_cause: "", // 上级驳回原因
          real_name: "尹成诺",
          id_card_num: "123542569854512365",
          level: ""
        },
        {
          id: 8,
          apply_name: "注册申请人昵称8",
          apply_phone: 18338112210,
          invite_name: "某邀请代理昵称1",
          apply_time: "2020-01-01-55",
          intive_status: 1, // 邀请人审核进度 0 未审核 1 通过 2 驳回
          intive_cause: '', // 邀请人驳回原因
          up_status: 2, // 上级审核进度 0 未审核 1 通过 2 驳回
          up_cause: "大夫士大夫发生大法师的法", // 上级驳回原因
          real_name: "尹成诺",
          id_card_num: "123542569854512365",
          level: ""
        },
        {
          id: 3,
          apply_name: "注册申请人昵称3",
          apply_phone: 18338112210,
          invite_name: "某邀请代理昵称1",
          apply_time: "2020-01-01-55",
          intive_status: 2, // 邀请人审核进度 0 未审核 1 通过 2 驳回
          intive_cause: '邀请人驳回原因', // 邀请人驳回原因
          up_status: 0, // 上级审核进度 0 未审核 1 通过 2 驳回
          up_cause: "", // 上级驳回原因
          real_name: "尹成诺",
          id_card_num: "123542569854512365",
          level: ""
        }
      ]
    } else if (+ctx.query.type === 1) {
      list = [
        {
          id: 4,
          apply_name: "注册申请人昵称4",
          apply_phone: 18338112210,
          invite_name: "某邀请代理昵称1",
          apply_time: "2020-01-01-55",
          intive_status: 1, // 邀请人审核进度 0 未审核 1 通过 2 驳回
          intive_cause: '', // 邀请人驳回原因
          up_status: 0, // 上级审核进度 0 未审核 1 通过 2 驳回
          up_cause: "", // 上级驳回原因
          real_name: "尹成诺",
          id_card_num: "123542569854512365",
          level: "特级代理"
        },
        {
          id: 5,
          apply_name: "注册申请人昵称5",
          apply_phone: 18338112210,
          invite_name: "某邀请代理昵称1",
          apply_time: "2020-01-01-55",
          intive_status: 1, // 邀请人审核进度 0 未审核 1 通过 2 驳回
          intive_cause: '', // 邀请人驳回原因
          up_status: 1, // 上级审核进度 0 未审核 1 通过 2 驳回
          up_cause: "", // 上级驳回原因
          real_name: "尹成诺",
          id_card_num: "123542569854512365",
          level: "特级代理"
        },
        {
          id: 6,
          apply_name: "注册申请人昵称6",
          apply_phone: 18338112210,
          invite_name: "某邀请代理昵称1",
          apply_time: "2020-01-01-55",
          intive_status: 1, // 邀请人审核进度 0 未审核 1 通过 2 驳回
          intive_cause: '', // 邀请人驳回原因
          up_status: 2, // 上级审核进度 0 未审核 1 通过 2 驳回
          up_cause: "上级驳回原因", // 上级驳回原因
          real_name: "尹成诺",
          id_card_num: "123542569854512365",
          level: "特级代理"
        }
      ]
    }
    ctx.body = {
      code: 200,
      message: "获取获取 注册审核 我的邀请成功",
      data: {
        size,
        total,
        list
      }
    };
  });

  router.get("/team/examine", async ctx => {
    console.log(ctx.query)
    await new Promise(resolve => setTimeout(() => resolve(), 0));
    ctx.body = {
      code: 200,
      message: "审核通过/驳回成功"
    };
  });

  router.get("/team/invite_code", async ctx => {
    console.log(ctx.query)
    await new Promise(resolve => setTimeout(() => resolve(), 0));
    ctx.body = {
      code: 200,
      message: "获取邀请码",
      data: {
        invite_code: 'F51E12', 
        invite_num: 50,
        team_num: 233
      }
    };
  });
};
