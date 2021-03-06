// Complete the following functions.
// These functions only need to work with arrays.

/* eslint-disable no-unused-vars, max-len */

const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // based off http://underscorejs.org/#each
  elements.forEach((item, index) => cb(item, index));
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const result = [];
  elements.forEach((item, index) => {
    result[index] = cb(item);
  });
  return result;
};

const reduce = (elements, cb, memo) => {
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb`.
  // `memo` is the starting value.  If `memo` is undefined then make `elements[0]` the initial value.
  if (!memo) memo = elements.shift();
  elements.forEach((item, index) => {
    memo = cb(memo, item);
  });
  return memo;
};

const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  let result;
  elements.forEach((item) => {
    const isThisTrue = cb(item);
    if (isThisTrue && !result) {
      result = item;
    }
  });
  return result;
};

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  const result = [];
  elements.forEach((item) => {
    const isThisTrue = cb(item);
    if (isThisTrue) {
      result.push(item);
    }
  });
  return result;
};

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  // possible resursive solution
  // OR const result = [].concat(...myArray);
  const flattenedArray = reduce(elements, (memo, item) => {
    if (Array.isArray(item)) return memo.concat(flatten(item));
    return memo.concat(item);
  }, []);

  return flattenedArray;
};

/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten,
};
