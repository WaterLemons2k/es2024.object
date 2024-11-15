# es2024.object

Polyfills for the new methods of `Object` in ES2024.

## Installation

```sh
npm i es2024.object
```

## Usage

```js
import 'es2024.object';

const items = [
  { type: 'number', value: 0 },
  { type: 'number', value: 1 }
];
Object.groupBy(items, ({ type }) => type);
/* {
  number: [
    {
      type: 'number',
      value: 0
    },
    {
      type: 'number',
      value: 1
    }
  ]
} */
```
