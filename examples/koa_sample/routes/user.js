module.exports = (router) => {
  router.post('/login', (ctx) => {
    ctx.body = 'hello user-login';
  });
};
