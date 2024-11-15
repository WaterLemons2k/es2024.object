// @ts-check
'use strict';

Object.groupBy =
  Object.groupBy ||
  /**
   * Groups the elements of a given iterable according to the string values
   * returned by a provided callback function.
   *
   * The returned object has separate properties for each group, containing
   * arrays with the elements in the group.
   *
   * [ES](https://tc39.es/ecma262/#sec-object.groupby)
   * [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy)
   * [Type](https://github.com/microsoft/TypeScript/blob/main/src/lib/es2024.object.d.ts)
   *
   * @template {PropertyKey} K, T
   *
   * @param {Iterable<T>} items - whose elements will be grouped
   * @param {(item: T, index: number) => K} callback - a function to execute for each element in the iterable.
   *
   * It should return a value that can get coerced into a property key (string or symbol)
   * indicating the group of the current element.
   *
   * @returns {Partial<Record<K, T[]>>}
   */
  function groupBy(items, callback) {
    const obj = Object.create(null);

    let index = 0;
    for (const item of items) {
      const key = callback(item, index++);
      (obj[key] || (obj[key] = [])).push(item);
    }

    return obj;
  };
