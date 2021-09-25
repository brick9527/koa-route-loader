const fs = require("fs");
const path = require('path');

/**
 * load route recursively
 * @param {*} folder - current route folder
 * @param {*} config - config object
 * @param {*} router - koa router instance
 * @param {*} base - the base of current route path
 */
module.exports = (folder, config, router, base = '') => {
  router.base = '';
  const { stdout, stderr } = config;

  fs.readdir(folder, (err, files) => {
    if (err) {
      stderr(err);
      return null;
    }

    files.forEach((file) => {
      const filePatth = path.join(folder, file);
      const fileStat = fs.statSync(filePatth);

      if (fileStat.isDirectory()) {
        const newFolder = path.join(folder, file);
        return loadRoute(newFolder, config, router, file);
      }

      if (fileStat.isFile()) {
        const fileName = file.split(".").slice(0, -1).join(".");
        try {
          if (base === '') {
            router.base = "/" + [config.prefix, fileName].join("/");
          } else {
            router.base = "/" + [config.prefix, base, fileName].join("/");
          }
          require(path.join(folder, file))(router);
        } catch (err) {
          stderr(err);
        }
      }
    });
  });
}