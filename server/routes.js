const koaRouter = require('koa-router')
const YueQue = require("./yuqueApi")
const config = require("../config")

let yuQue = new YueQue(config.yuQue)

const Router = new koaRouter()

Router.prefix('/api')


// 获取列表
Router.get('/articles', async ctx => {
    try {
        let r = await yuQue.getList()
        ctx.body = {
            code: 200,
            data: r.data.data
        }
    } catch (e) {
        console.log("出错了")
        ctx.body = {
            code: 500,
            data: null
        }
    }
})

// 渲染网页
Router.get('/page', async ctx => {
    try {
        let r = await yuQue.getDoc(ctx.query.slug)
        let text = r.data.data.body.match(/```html([\W\w]*)```/i)[1]
        ctx.type = "html";
        ctx.body = text
    }catch (e) {
        console.log("出错了？？",e)
        ctx.body = "出错了"
    }
})

// 获取配置
Router.get('/config', async ctx => {
    ctx.body = {
        code: 200,
        data: {
            userName: config.yuQue.userName,
            zone: config.yuQue.zone
        }
    }
})


module.exports = Router
