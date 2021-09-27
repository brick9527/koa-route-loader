const Koa = require('koa');
const Router = require('@koa/router');

const koaRouteLoader = require('../../index');

const app = new Koa();
const router = new Router();

koaRouteLoader(app, router, {
  entryPoint: 'examples/koa_sample/routes',
});

module.exports = app.listen(3000, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('server is running at port 3000');
});
