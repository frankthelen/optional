# optional

**EXPERIMENTAL**

[![Build Status](https://travis-ci.org/frankthelen/optional.svg?branch=master)](https://travis-ci.org/frankthelen/optional)
[![Coverage Status](https://coveralls.io/repos/github/frankthelen/optional/badge.svg?branch=master)](https://coveralls.io/github/frankthelen/optional?branch=master)
[![code style](https://img.shields.io/badge/code_style-airbnb-brightgreen.svg)](https://github.com/airbnb/javascript)
[![License Status](http://img.shields.io/npm/l/optional.svg)]()

## Usage

```js
const { opt, optf } = require('optional');
```

Example 1: `foo.bar`
```js
// classic
const bar = foo ? foo.bar : undefined;
// safe with optional
const bar = opt(foo).bar;
```

Example 2: `foo().bar`
```js
// classic
const qux = foo();
const bar = qux ? qux.bar : undefined;
// safe with optional
const bar = opt(foo()).bar;
```

Example 3: `foo.bar()`
```js
// classic
const bar = foo ? foo.bar() : undefined;
// safe with optional
const bar = optf(foo).bar();
```

Example 4: `foo().bar()`
```js
// classic
const qux = foo();
const bar = qux ? qux.bar() : undefined;
// safe with optional
const bar = optf(foo()).bar();
```
