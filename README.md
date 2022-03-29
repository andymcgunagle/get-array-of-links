# get-array-of-links

[![npm version](https://badge.fury.io/js/angular2-expandable-list.svg)](https://badge.fury.io/js/angular2-expandable-list)

> Get an array of link objects with the text and href from every anchor tag on a webpage.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
  - [Getting All Links](#getting-all-links)
  - [Limiting Results Returned](#limiting-results-returned)
- [Author](#author)

## Installation

To install the package, run:

```sh
npm install get-array-of-links
```

Or, if you prefer using Yarn:

```sh
yarn add get-array-of-links
```

## Usage

### Getting All Links

```js
import { getArrayOfLinks } from 'get-array-of-links';

const links = await getArrayOfLinks('https://www.example.com');

// links is an array of objects with the following properties:
// {
//   text: 'Example Page',
//   href: 'https://www.example.com/path-to-page'
// }
```

### Limiting Results Returned

```js
// getArrayOfLinks takes an optional second argument that can be used to limit the number of results returned.
const links = await getArrayOfLinks('https://www.example.com', 10);
```

## Author

- **Andy McGunagle** - [andymcgunagle](https://github.com/andymcgunagle)
