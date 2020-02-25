module.exports = router => {  //获取礼品兑换列表

    const code = 200

    router.get('/getExchangeList', async(ctx) => {
        if (code === 200) {
            ctx.body = {
                code: 200,
                message: '获取礼品兑换列表成功',
                data: {
                    list: [
                        {
                            name: '智能手表电话蓝牙手环',  //商品名
                            id: 'idididiididiiid',  //商品id
                            des: 'nathome/北欧欧慕 NSH1810泡茶壶电 烧水壶功夫茶电热家用煮水壶0',  //描述
                            img: 'http://img1.imgtn.bdimg.com/it/u=18050569,4044795402&fm=15&gp=0.jpg',  //商品图
                            price: 400,  //价格
                            total: 500,  //总量
                            surplus: 123,  //剩余
                            exchanged: false  //用户是否兑换过
                        },
                        {
                            name: '男士旅游背包出门背包',  //商品名
                            id: 'idididiididiiid',
                            des: 'nathome/北欧欧慕 NSH1810泡茶壶电 烧水壶功夫茶电热家用煮水壶1',
                            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1940778569,3722431633&fm=15&gp=0.jpg',  //商品图
                            price: 400,  //价格
                            total: 500,  //总量
                            surplus: 0,  //剩余
                            exchanged: true  //是否兑换过
                        },
                        {
                            name: '智能手表电话蓝牙手环',  //商品名
                            id: 'idididiididiiid',
                            des: 'nathome/北欧欧慕 NSH1810泡茶壶电 烧水壶功夫茶电热家用煮水壶2',
                            img: 'http://img1.imgtn.bdimg.com/it/u=18050569,4044795402&fm=15&gp=0.jpg',  //商品图
                            price: 400,  //价格
                            total: 500,  //总量
                            surplus: 123,  //剩余
                            exchanged: false  //是否兑换过
                        },
                        {
                            name: '男士旅游背包出门背包',  //商品名
                            id: 'idididiididiiid',
                            des: 'nathome/北欧欧慕 NSH1810泡茶壶电 烧水壶功夫茶电热家用煮水壶3',
                            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1940778569,3722431633&fm=15&gp=0.jpg',  //商品图
                            price: 400,  //价格
                            total: 500,  //总量
                            surplus: 123,  //剩余
                            exchanged: true  //是否兑换过
                        },
                        {
                            name: '智能手表电话蓝牙手环',  //商品名
                            id: 'idididiididiiid',
                            des: 'nathome/北欧欧慕 NSH1810泡茶壶电 烧水壶功夫茶电热家用煮水壶4',
                            img: 'http://img1.imgtn.bdimg.com/it/u=18050569,4044795402&fm=15&gp=0.jpg',  //商品图
                            price: 400,  //价格
                            total: 500,  //总量
                            surplus: 457,  //剩余
                            exchanged: true  //是否兑换过
                        },
                        {
                            name: '男士旅游背包出门背包',  //商品名
                            id: 'idididiididiiid',
                            des: 'nathome/北欧欧慕 NSH1810泡茶壶电 烧水壶功夫茶电热家用煮水壶5',
                            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1940778569,3722431633&fm=15&gp=0.jpg',  //商品图
                            price: 400,  //价格
                            total: 500,  //总量
                            surplus: 45,  //剩余
                            exchanged: false  //是否兑换过
                        },
                        {
                            name: '智能手表电话蓝牙手环',  //商品名
                            id: 'idididiididiiid',
                            des: 'nathome/北欧欧慕 NSH1810泡茶壶电 烧水壶功夫茶电热家用煮水壶6',
                            img: 'http://img1.imgtn.bdimg.com/it/u=18050569,4044795402&fm=15&gp=0.jpg',  //商品图
                            price: 400,  //价格
                            total: 500,  //总量
                            surplus: 0,  //剩余
                            exchanged: false  //是否兑换过
                        },
                        {
                            name: '男士旅游背包出门背包',  //商品名
                            id: 'idididiididiiid',
                            des: 'nathome/北欧欧慕 NSH1810泡茶壶电 烧水壶功夫茶电热家用煮水壶7',
                            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1940778569,3722431633&fm=15&gp=0.jpg',  //商品图
                            price: 400,  //价格
                            total: 500,  //总量
                            surplus: 1,  //剩余
                            exchanged: true  //是否兑换过
                        },
                        {
                            name: '智能手表电话蓝牙手环',  //商品名
                            id: 'idididiididiiid',
                            des: 'nathome/北欧欧慕 NSH1810泡茶壶电 烧水壶功夫茶电热家用煮水壶8',
                            img: 'http://img1.imgtn.bdimg.com/it/u=18050569,4044795402&fm=15&gp=0.jpg',  //商品图
                            price: 400,  //价格
                            total: 500,  //总量
                            surplus: 123,  //剩余
                            exchanged: false  //是否兑换过
                        },
                        {
                            name: '男士旅游背包出门背包',  //商品名
                            id: 'idididiididiiid',
                            des: 'nathome/北欧欧慕 NSH1810泡茶壶电 烧水壶功夫茶电热家用煮水壶9',
                            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1940778569,3722431633&fm=15&gp=0.jpg',  //商品图
                            price: 400,  //价格
                            total: 500,  //总量
                            surplus: 123,  //剩余
                            exchanged: false  //是否兑换过
                        },
                        {
                            name: '智能手表电话蓝牙手环',  //商品名
                            id: 'idididiididiiid',
                            des: 'nathome/北欧欧慕 NSH1810泡茶壶电 烧水壶功夫茶电热家用煮水壶10',
                            img: 'http://img1.imgtn.bdimg.com/it/u=18050569,4044795402&fm=15&gp=0.jpg',  //商品图
                            price: 400,  //价格
                            total: 500,  //总量
                            surplus: 123,  //剩余
                            exchanged: false  //是否兑换过
                        },
                        {
                            name: '男士旅游背包出门背包',  //商品名
                            id: 'idididiididiiid',
                            des: 'nathome/北欧欧慕 NSH1810泡茶壶电 烧水壶功夫茶电热家用煮水壶11',
                            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1940778569,3722431633&fm=15&gp=0.jpg',  //商品图
                            price: 400,  //价格
                            total: 500,  //总量
                            surplus: 123,  //剩余
                            exchanged: false  //是否兑换过
                        }
                    ]
                }
            }
        } else if (code === 300) {  //否则
            ctx.body = {
                code: 300,
                message: '获取礼品兑换列表失败',
                data: {
                    
                }
            }
        }
    })

}