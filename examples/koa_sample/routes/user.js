module.exports = (router) => {
  router.get('/login', (ctx) => {
    ctx.body = 'hello user-login';
  });
};
