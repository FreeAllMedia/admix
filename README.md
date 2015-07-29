# Admix.js [![npm version](https://img.shields.io/npm/v/admix.svg)](https://www.npmjs.com/package/admix) [![license type](https://img.shields.io/npm/l/admix.svg)](https://github.com/FreeAllMedia/admix.git/blob/master/LICENSE) [![npm downloads](https://img.shields.io/npm/dm/admix.svg)](https://www.npmjs.com/package/admix) ![ECMAScript 6 & 5](https://img.shields.io/badge/ECMAScript-6%20/%205-red.svg)

ES6 template renderer

```javascript
import admix from "admix";

const template = admix("Hello, <%= someTag %>!");

template({someTag: "world"}); // "Hello, world!"
```

# Quality and Compatibility

[![Build Status](https://travis-ci.org/FreeAllMedia/admix.png?branch=master)](https://travis-ci.org/FreeAllMedia/admix) [![Coverage Status](https://coveralls.io/repos/FreeAllMedia/admix/badge.svg)](https://coveralls.io/r/FreeAllMedia/admix) [![bitHound Score](https://www.bithound.io/github/FreeAllMedia/admix/badges/score.svg)](https://www.bithound.io/github/FreeAllMedia/admix)  [![Dependency Status](https://david-dm.org/FreeAllMedia/admix.png?theme=shields.io)](https://david-dm.org/FreeAllMedia/admix?theme=shields.io) [![Dev Dependency Status](https://david-dm.org/FreeAllMedia/admix/dev-status.svg)](https://david-dm.org/FreeAllMedia/admix?theme=shields.io#info=devDependencies)

*Every build and release is automatically tested on the following platforms:*

![node 0.12.x](https://img.shields.io/badge/node-0.12.x-brightgreen.svg) ![node 0.11.x](https://img.shields.io/badge/node-0.11.x-brightgreen.svg) ![node 0.10.x](https://img.shields.io/badge/node-0.10.x-brightgreen.svg)
![iojs 2.x.x](https://img.shields.io/badge/iojs-2.x.x-brightgreen.svg) ![iojs 1.x.x](https://img.shields.io/badge/iojs-1.x.x-brightgreen.svg)


[![Sauce Test Status](https://saucelabs.com/browser-matrix/admix.svg)](https://saucelabs.com/u/admix)


*If your platform is not listed above, you can test your local environment for compatibility by copying and pasting the following commands into your terminal:*

```
npm install admix
cd node_modules/admix
gulp test-local
```

# Installation

Copy and paste the following command into your terminal to install Admix:

```
npm install admix --save
```

## Import / Require

```
// ES6
import admix from "admix";
```

```
// ES5
var admix = require("admix");
```

```
// Require.js
define(["require"] , function (require) {
    var admix = require("admix");
});
```

# Getting Started

With admix, you provide a template in string format containing tags delimited by `<%=` and `%>`.

```javascript
import admix from "admix";

const template = admix("Hello, <%= someTag %>!");

template({someTag: "world"}); // "Hello, world!"
```

## More insights

In order to say something, you should know that `admix()` ... (add your test here)

# How to Contribute

See something that could use improvement? Have a great feature idea? We listen!

You can submit your ideas through our [issues system](https://github.com/FreeAllMedia/admix/issues), or make the modifications yourself and submit them to us in the form of a [GitHub pull request](https://help.github.com/articles/using-pull-requests/).

We always aim to be friendly and helpful.

## Running Tests

It's easy to run the test suite locally, and *highly recommended* if you're using Admix.js on a platform we aren't automatically testing for.

```
npm test
```
