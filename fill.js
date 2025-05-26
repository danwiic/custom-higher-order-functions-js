var fill = function (arr, val, start = 0, end = arr.length) {
  for (let i = start; i < end; i++) {
    if (i >= 0 && i < arr.length) {
      arr[i] = val;
    }
  }
  return arr;
};

let arr = [1, 2, 3, 4, 5];
const result = fill(arr, 1, 2);
console.log(result);