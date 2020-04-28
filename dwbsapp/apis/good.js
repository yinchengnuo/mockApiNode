module.exports = router => {
  router.get("/goods/list", async ctx => {
    await new Promise(resolve => setTimeout(() => resolve(), 0));
    ctx.body = {
      code: 200,
      message: "获取商品列表成功",
      data: {
        list: [
          {
            id: 0,
            price: 999,
            storage: 111,
            name: "大卫博士精装款内裤",
            type: ["男款黑色", "男款白色"],
            type_id: [771, 772],
            img:
              "https://img.alicdn.com/imgextra/i4/40595992/O1CN012kjBGt1u8NnUCnx9p_!!0-saturn_solar.jpg_220x220.jpg_.webp"
          },
          {
            id: 1,
            price: 333,
            storage: 33,
            name: "大卫博士简约款内裤",
            type: ["男款黑色", "男款白色"],
            type_id: [773, 774],
            img:
              "https://img14.360buyimg.com/n7/jfs/t1/58382/32/4757/556896/5d27f33cE89c97b66/85ffb23daf13f59c.jpg"
          },
          {
            id: 2,
            price: 666,
            storage: 66,
            name: "大卫博士老人款内裤",
            type: ["男款黑色", "男款白色"],
            type_id: [775, 776],
            img:
              "https://img14.360buyimg.com/n7/jfs/t16519/285/2653381957/332101/291d66be/5ab9f122Ncf6bad38.jpg"
          }
        ]
      }
    };
  });

  router.get("/goods/detail", async ctx => {
    await new Promise(resolve => setTimeout(() => resolve(), 0));
    const data = {
      id: ctx.query.id,
      price: 234,
      name: "大卫博士精装款内裤",
      img:
        "http://img2.imgtn.bdimg.com/it/u=3693354119,1033618765&fm=26&gp=0.jpg",
      imgList: [
        "http://img10.360buyimg.com/imgzone/jfs/t1/95937/23/2305/363946/5dcd1379Ebf11b82e/b11db40e9faf461f.jpg",
        "https://img10.360buyimg.com/imgzone/jfs/t1/50917/26/5735/30357/5d35482eE2501a5a4/e2fe63d8e36680be.jpg",
        "https://img10.360buyimg.com/imgzone/jfs/t1/84418/8/5628/66413/5d3bfa87E624e4cc0/588427c7d813f20f.jpg"
      ],
      typeList: [
        {
          type_id: '0',
          name: "男款(黑色)",
          size: ["S", "M", "L", "XL", "XXL", "XXXL"],
          size_id: ["773", "774", "775", "776", "777", "777"]
        },
        {
          type_id: '1',
          name: "男款(白色)",
          size: ["S", "M", "L", "XL", "XXL", "XXXL"],
          size_id: ["773", "774", "775", "776", "777", "777"]
        },
        {
          type_id: '2',
          name: "男款(红色)",
          size: ["S", "M", "L", "XL", "XXL", "XXXL"],
          size_id: ["773", "774", "775", "776", "777", "777"]
        },
        {
          type_id: '3',
          name: "女款(黑色)",
          size: ["S", "M", "L", "XL"],
          size_id: ["773", "774", "775", "776"]
        },
        {
          type_id: '4',
          name: "女款(白色)",
          size: ["S", "M", "L", "XL", "XXL"],
          size_id: ["773", "774", "775", "776", "777"]
        },
        {
          type_id: '5',
          name: "女款(肉色)",
          size: ["S", "M", "L", "XL"],
          size_id: ["773", "774", "775", "776"]
        }
      ]
    };
    data.id = ctx.query.id;
    if (+ctx.query.id === 0) {
      data.price = 999;
      data.name = "大卫博士精装款内裤";
      data.img =
        "https://img.alicdn.com/imgextra/i4/40595992/O1CN012kjBGt1u8NnUCnx9p_!!0-saturn_solar.jpg_220x220.jpg_.webp";
    } else if (+ctx.query.id === 1) {
      data.price = 333;
      data.name = "大卫博士简约款内裤";
      data.img =
        "https://img14.360buyimg.com/n7/jfs/t1/58382/32/4757/556896/5d27f33cE89c97b66/85ffb23daf13f59c.jpg";
    } else if (+ctx.query.id === 2) {
      data.price = 666;
      data.name = "大卫博士老人款内裤";
      data.img =
        "https://img14.360buyimg.com/n7/jfs/t16519/285/2653381957/332101/291d66be/5ab9f122Ncf6bad38.jpg";
    } else if (+ctx.query.id === 3) {
      data.price = 1234;
      data.name = "大卫博士贺岁款内裤";
      data.img =
        "https://img14.360buyimg.com/n7/jfs/t1/63302/8/14325/254002/5dbbf3d6Ec39a4eba/ae837760f3f71fdb.jpg";
    }
    ctx.body = {
      code: 200,
      message: "获取商品详情成功",
      data
    };
  });

  router.get("/goods/list1", async ctx => {
    await new Promise(resolve => setTimeout(() => resolve(), 0));
    ctx.body = {
      code: 200,
      message: "获取商品列表成功",
      data: {
        list: [
          {
            id: 0,
            money: 999,
            name: "大卫博士精装款内裤",
            unit: '套',
            size: ['S', 'M', 'L', 'XL', 'XXL'],
            size_id: [1, 2, 3, 771, 772],
            main_img: "https://img.alicdn.com/imgextra/i4/40595992/O1CN012kjBGt1u8NnUCnx9p_!!0-saturn_solar.jpg_220x220.jpg_.webp",
            banner_img: [
              "http://img10.360buyimg.com/imgzone/jfs/t1/95937/23/2305/363946/5dcd1379Ebf11b82e/b11db40e9faf461f.jpg",
              "https://img10.360buyimg.com/imgzone/jfs/t1/50917/26/5735/30357/5d35482eE2501a5a4/e2fe63d8e36680be.jpg",
              "https://img10.360buyimg.com/imgzone/jfs/t1/84418/8/5628/66413/5d3bfa87E624e4cc0/588427c7d813f20f.jpg"
            ]
          },
          {
            id: 1,
            money: 333,
            name: "大卫博士简约款内裤",
            unit: '套',
            size: ['L', 'XL', 'XXL'],
            size_id: [4, 5, 6],
            main_img: "https://img14.360buyimg.com/n7/jfs/t1/58382/32/4757/556896/5d27f33cE89c97b66/85ffb23daf13f59c.jpg",
            banner_img: [
              "http://img10.360buyimg.com/imgzone/jfs/t1/95937/23/2305/363946/5dcd1379Ebf11b82e/b11db40e9faf461f.jpg",
              "https://img10.360buyimg.com/imgzone/jfs/t1/50917/26/5735/30357/5d35482eE2501a5a4/e2fe63d8e36680be.jpg",
              "https://img10.360buyimg.com/imgzone/jfs/t1/84418/8/5628/66413/5d3bfa87E624e4cc0/588427c7d813f20f.jpg"
            ]
          },
          {
            id: 2,
            money: 666,
            name: "大卫博士老人款内裤",
            unit: '套',
            size: ['L', 'XL', 'XXL'],
            size_id: [7, 8, 9],
            main_img: "https://img14.360buyimg.com/n7/jfs/t16519/285/2653381957/332101/291d66be/5ab9f122Ncf6bad38.jpg",
            banner_img: [
              "http://img10.360buyimg.com/imgzone/jfs/t1/95937/23/2305/363946/5dcd1379Ebf11b82e/b11db40e9faf461f.jpg",
              "https://img10.360buyimg.com/imgzone/jfs/t1/50917/26/5735/30357/5d35482eE2501a5a4/e2fe63d8e36680be.jpg",
              "https://img10.360buyimg.com/imgzone/jfs/t1/84418/8/5628/66413/5d3bfa87E624e4cc0/588427c7d813f20f.jpg"
            ]
          }
        ]
      }
    };
  });


};
