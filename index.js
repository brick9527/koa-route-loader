const path = require("path");

const getConfig = require("./libs/get_config");
const methodDecorator = require("./libs/method_decorator");
const loadRoute = require('./libs/load_route');

/**
 * Load route automatically
 * @param {*} app - Koa app instance
 * @param {*} router - koa-router instance
 * @param {*} options - customized options
 */
module.exports = (app, router, options = {}) => {
  const projectBaseDir = process.cwd();
  const config = getConfig(options);
  const routeBaseDir = path.join(projectBaseDir, config.entryPoint);
  router = methodDecorator(router, config);
  loadRoute(routeBaseDir, config, router);
  app.use(router.routes());
};
