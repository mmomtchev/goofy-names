# goofy-names

### Generate a Docker container-like name from a string

Works both in a browser and in Node.js

~2.8Kb gzip compressed, requires only `simple-sha1`

## Installation

`npm i goofy-names`

## Usage

```js
const goofyName = require('goofy-names');

const name = goofyName('3ccf40d8-901f-11ed-aaba-c347cf56a42d');

name === 'Dreamy Poincare';
```

```js
// Your bundler must handle JSON (it is usually the case)
import goofyName from 'goofy-names';

const name = goofyName('3ccf40d8-901f-11ed-aaba-c347cf56a42d');

name === 'Dreamy Poincare';
```