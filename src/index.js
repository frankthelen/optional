// the original optional() function
const optionalFunction = (x) => {
  console.log(`x is ${x}`);
}

const undefinedProxy = new Proxy(() => {}, {
  apply: (target, thisArg, argumentsList) => {
    return undefinedProxy;
  },
  get: (target, prop, receiver) => {
    return undefinedProxy;
  }
});

const handler = {
  apply: (target, thisArg, argumentsList) => {
    optionalFunction(...argumentsList);
    return new Proxy({}, {
      get: (target, prop, receiver) => {
        return typeof target[prop] !== 'undefined' ? target[prop] : undefinedProxy;
      }
    })
  }
};

const optional = new Proxy(() => {}, handler);

module.exports = optional;
