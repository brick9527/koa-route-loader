const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../../examples/koa_sample');

chai.use(chaiHttp);

const requester = chai.request(app).keepOpen();
const { expect } = chai;

describe('test server', () => {
  it('/api/test/index', () => {
    requester.get('/api/test/index').end((err, res) => {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      expect(res.text).to.be.a('string');
      expect(res.text).to.equal('hello test-index');
    });
  });

  it('/api/user/login', () => {
    requester.post('/api/user/login').end((err, res) => {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      expect(res.text).to.be.a('string');
      expect(res.text).to.equal('hello user-login');
    });
  });

  it('/api/system/update', () => {
    requester.post('/api/system/update').end((err, res) => {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      expect(res.text).to.be.a('string');
      expect(res.text).to.equal('[UPDATE] hello system-index-update');
    });
  });

  it('/api/system/add', () => {
    requester.put('/api/system/add').end((err, res) => {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      expect(res.text).to.be.a('string');
      expect(res.text).to.equal('[PUT] hello system-index-add');
    });
  });

  it('/api/system/patch', () => {
    requester.patch('/api/system/patch').end((err, res) => {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      expect(res.text).to.be.a('string');
      expect(res.text).to.equal('[PATCH] hello system-index-patch');
    });
  });

  it('/api/system', () => {
    requester.delete('/api/system').end((err, res) => {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      expect(res.text).to.be.a('string');
      expect(res.text).to.equal('[DELETE] hello system-index-delete');
    });
  });

  it('/api/system/del', () => {
    requester.del('/api/system/del').end((err, res) => {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      expect(res.text).to.be.a('string');
      expect(res.text).to.equal('[DEL] hello system-index-del');
    });
  });
});
