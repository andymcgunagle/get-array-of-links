# get-array-of-links

[![npm version](https://badge.fury.io/js/angular2-expandable-list.svg)](https://badge.fury.io/js/angular2-expandable-list)

> Get an array of link objects with the text and href from every anchor tag on a webpage.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
  - [Getting All Links](#getting-all-links)
  - [Options](#options)
    - [limit](#limit)
    - [useFilters](#usefilters)
    - [customFilters](#customfilters)
    - [formatLinks](#formatlinks)
    - [customFormatting](#customformatting)
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

### Options

getArrayOfLinks takes an optional options object as its second argument.

```js
const links = await getArrayOfLinks('https://www.example.com', {
  limit: 10,
  useFilters: false,
  customFilters: myCustomFiltersFunction,
  formatLinks: false,
});
```

#### `limit`

The maximum number of links to return.

#### `useFilters`

Defaults to true and uses the following filterLinks function to filter out unwanted links.

```js
export function filterLinks(links: LinkObject[]): LinkObject[] {
  // Filter out unwanted links
  links = links.filter(link => {
    return (
      link.text.length > 30 &&
      link.text.length < 250 &&
      !link.text.includes('<img') &&
      !link.text.includes('Paid Program') &&
      !link.href.includes('#') &&
      !link.href.includes('sponsored')
    );
  });

  // Filter out duplicate links
  links = links.filter((link, index, array) => {
    return array.findIndex(l => l.href === link.href) === index;
  });

  return links;
};
```

#### `customFilters`

A user-defined function that takes an array of link objects and returns an array of link objects filtered as desired.

#### `formatLinks`

Defaults to true and uses the following formatLinks function to format links.

```js
function addBaseUrlIfNeeded(link: LinkObject, url: string): LinkObject {
  if (link.href.includes('/') && !link.href.includes('http')) {
    link.href = `${url}${link.href}`;
  };

  return link;
};

export function formatLinks(links: LinkObject[], url: string): LinkObject[] {
  return links.map(link => {
    addBaseUrlIfNeeded(link, url);

    // Remove \n
    link.text = link.text.replace(/\n/g, '');

    // Remove '...'
    link.text = link.text.replace(/\.\.\./g, '');

    // Replace excess whitespace with single space
    link.text = link.text.replace(/\s\s+/g, ' ');

    return link;
  });
};
```

#### `customFormatting`

A user-defined function that takes an array of link objects and an optional url argument and returns an array of link objects formatted as desired.

## Author

- **Andy McGunagle** - [andymcgunagle](https://github.com/andymcgunagle)
