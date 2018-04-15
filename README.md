# optional

**EXPERIMENTAL**

[![Build Status](https://travis-ci.org/frankthelen/optional.svg?branch=master)](https://travis-ci.org/frankthelen/optional)
[![Coverage Status](https://coveralls.io/repos/github/frankthelen/optional/badge.svg?branch=master)](https://coveralls.io/github/frankthelen/optional?branch=master)
[![code style](https://img.shields.io/badge/code_style-airbnb-brightgreen.svg)](https://github.com/airbnb/javascript)
[![License Status](http://img.shields.io/npm/l/optional.svg)]()

## The Problem

You are accessing an object property and it is not sure if the object you are accessing is defined. You may run into a runtime error.

```js
const baz = foo.bar; // Uncaught ReferenceError: foo is not defined
```

There are a couple of ways to deal with this situation, e.g.:

 1. Ensure the object is defined when you are accessing it and thus avoid runtime errors. This, however, might not always be possible.

 2. Use JavaScript's ternary operator (the classic approach).
    ```js
    const baz = foo ? foo.bar : undefined; // works ok
    const baz = qux() ? qux().bar : undefined; // not so nice
    ```

 3. Use try/catch to catch runtime errors. There are a couple of libraries making use of this approach such as  [try-catch](https://github.com/coderaiser/try-catch) or [try-to-validate](https://github.com/yatki/try-to-validate). This might be handy sometimes. However, using try/catch for control flow outside of error handling is an anti-pattern. And, even more important, try/catch is a very costly operation.

 4. Use [`lodash.get()`](https://lodash.com/docs/#get) which is very useful sometimes, no question. But it is no general solution. And also doesn't work with functions.

 5. Use JavaScript's optional chaining operator `?.`. I love it. Unfortunately, this is currently only [a proposal in stage 1](https://github.com/tc39/proposal-optional-chaining). If you like, you can use a [Babel plugin](https://www.npmjs.com/package/@babel/plugin-proposal-optional-chaining).

 6. For those who don't want to wait for `?.` and don't want to use Babel, this one might be an alternative. It's technically based on ES6 Proxy.

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
