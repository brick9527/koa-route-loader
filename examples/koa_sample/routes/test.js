module.exports = (router) => {
  router.get('/index', ctx => { ctx.body = 'hello test-index' });
};