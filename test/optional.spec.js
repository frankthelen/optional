require('./test-helper');
const optional = require('..');

describe('optional', () => {
  it('should be undefined', () => {
    expect(optional()).to.be.equal(undefined);
  });

  it('should be defined / primitive', () => {
    expect(optional(1)).to.be.equal(1);
  });

  it('should be defined / object property', () => {
    const obj = { foo: 'bar' };
    expect(optional(obj).foo).to.be.equal('bar');
  });

  it('should be undefined / object property', () => {
    const obj = undefined;
    expect(optional(obj).foo).to.be.equal(undefined);
  });

  it('should be defined / function property', () => {
    const obj = { foo: () => 'bar' };
    expect(optional(obj).foo()).to.be.equal('bar');
  });

  it('should be undefined / function property', () => {
    const obj = undefined;
    expect(optional(obj).foo()).to.be.equal(undefined);
  });

  it('should be defined / object property / 2', () => {
    const obj = { foo: { bar: 'baz' } };
    expect(optional(obj).foo.bar).to.be.equal('baz');
  });

  it('should be undefined / object property / 2', () => {
    const obj = undefined;
    expect(optional(obj).foo.bar).to.be.equal(undefined);
  });

  it('should be defined / function and object property', () => {
    const obj = { foo: () => ({ bar: 'baz' }) };
    expect(optional(obj).foo().bar).to.be.equal('baz');
  });

  it('should be undefined / function and object property', () => {
    const obj = undefined;
    expect(optional(obj).foo().bar).to.be.equal(undefined);
  });
});
