const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../../examples/koa_sample');

chai.use(chaiHttp);

const requester = chai.request(app).keepOpen();
const { expect } = chai;

describe('test server', () => {
  it('run server', () => {
    requester.get('/api/test/index').end((err, res) => {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      expect(res.text).to.be.a('string');
      expect(res.text).to.equal('hello test-index');
    });
  });
});
