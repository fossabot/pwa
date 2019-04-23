# Shopgate's Theme Config parser

[![Build Status](https://travis-ci.org/shopgate/pwa.svg?branch=v6.X)](https://travis-ci.org/shopgate/pwa)
[![Coverage Status](https://coveralls.io/repos/github/shopgate/pwa/badge.svg?branch=v6.X)](https://coveralls.io/github/shopgate/pwa?branch=v6.X)
[![GitHub (pre-)release](https://img.shields.io/github/release/shopgate/pwa/all.svg)](https://github.com/shopgate/pwa/releases)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

Parses the theme configuration for Shopgate's ENGAGE application.

## Installation

Install the utility from npm via:

```sh
npm install --save @shopgate/config-parser
```

or via yarn:

```sh
yarn add @shopgate/config-parser
```

## Usage

The config parser provides only one class that you can import to get the configuration parsed:

### ES6 syntax (prefered)

```javascript
import ConfigParser from '@shopgate/config-parser';
import rawConfig from './myConfigFile.json';

// Create an instance and pass it the configuration
const parsedConfig = new ConfigParser(rawConfig).parse();
```

### CommonJS syntax

```javascript
const ConfigParser = require('@shopgate/config-parser');
const rawConfig = require('./myConfigFile.json');

// Create an instance and pass it the configuration
const parsedConfig = new ConfigParser(rawConfig).parse();
```

## Referencing properties

It is possible to reference properties from within your configuration. You can specify a reference via the object path notation opened with the delimiter `$.`.

Let's look at a simple example. Define an object that contains two child objects:

```json
{
  "globals": {

  },
  "locals": {

  }
}
```

The `globals` object will now receive some variable defintions and the `locals` object will consume them:

```json
{
  "globals": {
    "test1": "someValue",
    "test2": "anotherValue"
  },
  "locals": {
    "localTest1": "$.globals.test1",
    "localTest2": "$.globals.test2"
  }
}
```

This way you can reference remote variables inside your configuration. The object path always starts at the root of the JSON object. Once this configuration is parsed by the Config Parser, its output will look like this:

```json
{
  "globals": {
    "test1": "someValue",
    "test2": "anotherValue"
  },
  "locals": {
    "localTest1": "someValue",
    "localTest2": "anotherValue"
  }
}
```

## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.

## License

Shopgate's ENGAGE library is available under the Apache License, Version 2.0.

See the [LICENSE.md](./LICENSE.md) file for more information.
