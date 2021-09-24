const Koa = require('koa');
const app = new Koa();
const koaRouteLoader = require('../../index');
const Router = require('@koa/router');

const test = require('./routes/test');

const router = new Router();

koaRouteLoader(app, router);

// test(router);

// app.use(router.routes());


app.listen(3000);