require('./test-helper');
const { opt, optf } = require('..');

describe('opt', () => {
  xit('should be undefined', () => {
    expect(opt()).to.be.equal(undefined);
  });

  it('should be defined / primitive', () => {
    expect(opt(1)).to.be.equal(1);
  });

  it('should be defined / object property', () => {
    const obj = { foo: 'bar' };
    expect(opt(obj).foo).to.be.equal('bar');
  });

  it('should be undefined / object property', () => {
    const obj = undefined;
    expect(opt(obj).foo).to.be.equal(undefined);
  });

  it('should be defined / function property', () => {
    const obj = { foo: () => 'bar' };
    expect(optf(obj).foo()).to.be.equal('bar');
  });

  it('should be undefined / function property', () => {
    const obj = undefined;
    expect(optf(obj).foo()).to.be.equal(undefined);
  });

  xit('should be defined / object property / 2', () => {
    const obj = { foo: { bar: 'baz' } };
    expect(opt(obj).foo.bar).to.be.equal('baz');
  });

  xit('should be undefined / object property / 2', () => {
    const obj = undefined;
    expect(opt(obj).foo.bar).to.be.equal(undefined);
  });

  xit('should be defined / function and object property', () => {
    const obj = { foo: () => ({ bar: 'baz' }) };
    expect(opt(obj).foo().bar).to.be.equal('baz');
  });

  xit('should be undefined / function and object property', () => {
    const obj = undefined;
    expect(opt(obj).foo().bar).to.be.equal(undefined);
  });
});
