var slice = function (arr, start = 0, end = arr.length) {
  if (start < 0) start = arr.length + start;
  if (end < 0) end = arr.length + end;
  start = Math.max(0, Math.min(start, arr.length));
  end = Math.max(0, Math.min(end, arr.length));
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(arr[i]);
  }
  return result;
};

let arr = [1, 2, 3, 4, 5];
const result = slice(arr, -3, 4);
console.log(result);
