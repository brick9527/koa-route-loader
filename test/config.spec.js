const chai = require('chai');
const { expect } = chai;
const path = require('path');

const getConfig = require('../libs/get_config');

describe('test config', () => {
  it('config merge', () => {
    const config = {
      entryPoint: path.join(__dirname, 'routes'),
      debug: true,
    };

    const result = getConfig(config);
    expect(result.entryPoint).to.equal(path.join(__dirname, 'routes'));
    expect(result.debug).to.be.true;
    expect(result.prefix).to.eq('api');
    expect(result.stdout).to.eq(console.log);
    expect(result.stderr).to.eq(console.error);
  });
});