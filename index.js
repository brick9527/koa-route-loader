const getConfig = require('./libs/get_config');
const methodDecorator = require('./libs/method_decorator');
const loadRoute = require('./libs/load_route');

/**
 * Load route automatically
 * @param {*} app - Koa app instance
 * @param {*} router - koa-router instance
 * @param {*} options - customized options
 */
module.exports = (app, router, options = {}) => {
  const config = getConfig(options);
  router = methodDecorator(router, config);
  loadRoute(config.entryPoint, config, router);
  app.use(router.routes());
};
