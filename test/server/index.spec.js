const request = require('supertest');
const assert = require('assert').strict;

const app = require('../../examples/koa_sample');

describe('test server', () => {
  it('run server', (done) => {
    request(app).get('/api/test/index').expect(200).then(res => {
      assert(res.body, 'hello test-index');
      done();
    });
  });
});
