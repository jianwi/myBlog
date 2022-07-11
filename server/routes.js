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
            data: r.data
        }
    } catch (e) {
        console.log("出错了")
        ctx.body = {
            code: 500,
            data: null
        }
    }
})


module.exports = Router
