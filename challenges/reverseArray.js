var reverse = function (arr) {
  const result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
};

const test1 = [1, 2, 3, 4, 5];
console.log(reverse(test1));
