function _methodDecoratorFactory ({ method, path, config, opts, router }) {
  const { debug = false, stdout } = config;
  if (router.base && router.base.length !== 0) {
    path = '/' + [...router.base, ...path.split('/')].filter(Boolean).join('/');
    debug && stdout(`[${method.toUpperCase()}] path = ${path}`);
  }
  return router[`_${method}`](path, ...opts);
}

/**
 * basic router methods decorator
 * @param {*} router - koa router instance
 * @param {*} config - config object
 * @returns
 */
module.exports = (router, config) => {
  router._get = router.get;
  router._post = router.post;
  router._put = router.put;
  router._patch = router.patch;
  router._delete = router.delete;
  router._del = router.del;

  // GET method
  router.get = function (path, ...opts) {
    return _methodDecoratorFactory({
      method: 'get',
      path,
      config,
      opts,
      router,
    });
  };

  // POST method
  router.post = function (path, ...opts) {
    return _methodDecoratorFactory({
      method: 'post',
      path,
      config,
      opts,
      router,
    });
  };

  // PUT method
  router.put = function (path, ...opts) {
    return _methodDecoratorFactory({
      method: 'put',
      path,
      config,
      opts,
      router,
    });
  };

  // PATCH method
  router.patch = function (path, ...opts) {
    return _methodDecoratorFactory({
      method: 'patch',
      path,
      config,
      opts,
      router,
    });
  };

  // DELETE method
  router.delete = function (path, ...opts) {
    return _methodDecoratorFactory({
      method: 'delete',
      path,
      config,
      opts,
      router,
    });
  };

  // DEL method
  router.del = function (path, ...opts) {
    return _methodDecoratorFactory({
      method: 'del',
      path,
      config,
      opts,
      router,
    });
  };

  return router;
};
