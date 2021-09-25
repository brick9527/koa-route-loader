/**
 * basic router methods decorator
 * @param {*} router - koa router instance
 * @param {*} config - config object
 * @returns 
 */
module.exports = (router, config) => {
  const { stdout } = config;
  router.routes = router.routes;
  router._get = router.get;
  router.get = function (path, ...opts) {
    if (router.base) {
      path = `${router.base}${path}`;
      stdout('path = ', path);
    }

    return router._get(path, ...opts);
  }

  return router;
}