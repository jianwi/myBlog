const Koa = require('koa')
const path = require('path')
const serve = require('koa-static')
const routes = require('./routes')

const app = new Koa()

app.use(
  serve(path.resolve(__dirname, '../dist'), {
    maxAge: 7 * 24 * 60 * 60 * 1000
  })
)

app.use(routes.routes())

app.on('error', function(err, ctx) {
  console.log('server error', err, ctx)
})

app.listen(8081, () => console.log('Koa app listening on 8000'))
