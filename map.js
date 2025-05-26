var map = function (arr, fn) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
};

const arr = [423, 4, 324, 54, 3];
const fn = (a) => a * 3;

const result = map(arr, fn);
console.log(result);

var filter = function (arr, fn) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) result.push(arr[i]);
  }
  return result;
};

const filterResult = filter(result, (val) => val % 2 === 0);
console.log(filterResult);

var reduce = function (arr, fn, init) {
  let result = init;

  for (let i = 0; i < arr.length; i++) {
    result = fn(result, arr[i]);
  }
  return result;
};

const totalOfFiltred = reduce(filterResult, (a, b) => a + b, 0);
console.log(totalOfFiltred);
