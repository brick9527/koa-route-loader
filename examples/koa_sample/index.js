const Koa = require('koa');
const Router = require('@koa/router');
const path = require('path');

const koaRouteLoader = require('../../index');

const app = new Koa();
const router = new Router();

koaRouteLoader(app, router, {
  entryPoint: path.join(__dirname, 'routes'),
});

console.log(require.main === module);

module.exports = app.listen(3000, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('server is running at port 3000');
});
