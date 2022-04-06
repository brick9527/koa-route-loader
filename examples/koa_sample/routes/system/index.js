module.exports = (router) => {
  router.post('/update', (ctx) => {
    ctx.body = '[UPDATE] hello system-index-update';
  });

  router.put('/add', ctx => {
    ctx.body = '[PUT] hello system-index-add';
  });

  router.patch('/patch', ctx => {
    ctx.body = '[PATCH] hello system-index-patch';
  });

  router.delete('/', ctx => {
    ctx.body = '[DELETE] hello system-index-delete';
  });

  router.del('/del', ctx => {
    ctx.body = '[DEL] hello system-index-del';
  });
};
