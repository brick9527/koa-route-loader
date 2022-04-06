const fs = require('fs');
const path = require('path');

/**
 * load route recursively
 * @param {*} folder - current route folder
 * @param {*} config - config object
 * @param {*} router - koa router instance
 * @param {*} base - the base of current route path
 */
const loadRoute = (folder, config, router, base = '') => {
  router.base = [];

  const files = fs.readdirSync(folder);
  files.forEach((file) => {
    const filePatth = path.join(folder, file);
    const fileStat = fs.statSync(filePatth);

    if (fileStat.isDirectory()) {
      const newFolder = path.join(folder, file);
      return loadRoute(newFolder, config, router, file);
    }

    if (fileStat.isFile()) {
      const fileName = file.split('.').slice(0, -1).join('.');
      let routeBase = [];
      if (base === '') {
        routeBase = [config.prefix, fileName];
      } else {
        routeBase = [config.prefix, base, fileName];
      }
      routeBase = routeBase.filter(baseItem => baseItem !== 'index');
      router.base = routeBase;

      require(path.join(folder, file))(router);
    }
  });

  return router;
};

module.exports = loadRoute;
