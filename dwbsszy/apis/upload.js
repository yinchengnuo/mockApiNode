const fs = require('fs');
const path = require('path');
const util = require('util');
const readdirPromise = util.promisify(fs.readdir);

module.exports = router => {  //获取学分账单接口

    const code = 200

    router.post('/upload', async ctx => {
        console.log(ctx.request.body)
        const num = (await readdirPromise(path.join(__dirname, '../static/upload/'))).length;
        const type = ctx.request.files.img.name.split('.')[ctx.request.files.img.name.split('.').length - 1];
        const reader = fs.createReadStream(ctx.request.files.img.path);
        const writer = fs.createWriteStream(path.join(__dirname, `../static/upload/upload${num}.${type}`));
        reader.pipe(writer);
        if (code === 200) {
            ctx.body = {
                code: 200,
                message: '上传成功',
                data: {
                    score: 50
                }
            }
        } else if (code === 300) {  //否则
            ctx.body = {
                code: 300,
                message: '图片重复'
            }
        } else if (code === 400) {  //否则
            ctx.body = {
                code: 400,
                message: '截图不符'
            }
        } else if (code === 500) {  //否则
            ctx.body = {
                code: 500,
                message: '填写信息与收款截图信息不符'
            }
        }
    })
    
}