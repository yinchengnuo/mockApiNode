module.exports = router => {
  router.get("/login/judge_login", async ctx => {
    await new Promise(resolve => setTimeout(() => resolve(), 5678));
    ctx.body = {
      code: 200,
      message: "获取手机验证码成功",
      data: { status: 0 } // 0 登录 1 注册
    };
  });

  router.get("/login/login", async ctx => {
    await new Promise(resolve => setTimeout(() => resolve(), 0));
    ctx.body = {
      code: 200, // 200 成功 // 300 绑定 // 400 冻结
      message: "手机登录成功",
      data: {
        token:
          "28_c-2cckjX66_T0cexCq4kGPka2TeW4VJLWZigCt4rED0H-D3812CozhXJYJs-D4OBix3Ge2wYpuJRCZKa0ot0rhN-VqbUooPPeRbA2PhotbY"
      }
    };
  });

  router.get("/login/wechat_login", async ctx => {
    await new Promise(resolve => setTimeout(() => resolve(), 0));
    ctx.body = {
      code: 200, // 200 成功 // 300 绑定
      message: "微信登录成功",
      data: {
        token:
          "28_c-2cckjX66_T0cexCq4kGPka2TeW4VJLWZigCt4rED0H-D3812CozhXJYJs-D4OBix3Ge2wYpuJRCZKa0ot0rhN-VqbUooPPeRbA2PhotbY"
      }
    };
  });

  router.get("/login/register", async ctx => {
    await new Promise(resolve => setTimeout(() => resolve(), 0));
    ctx.body = {
      code: 200,
      message: "注册成功",
      data: {
        token:
          "28_c-2cckjX66_T0cexCq4kGPka2TeW4VJLWZigCt4rED0H-D3812CozhXJYJs-D4OBix3Ge2wYpuJRCZKa0ot0rhN-VqbUooPPeRbA2PhotbY"
      }
    };
  });
};
