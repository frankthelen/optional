const handler = isFunc => ({
  get: () => (isFunc ? () => undefined : undefined),
});

const optional = (value, isFunc) => (
  value === undefined || value === null ? new Proxy({}, handler(isFunc)) : value
);

module.exports = {
  opt: value => optional(value, false),
  optf: value => optional(value, true),
};
