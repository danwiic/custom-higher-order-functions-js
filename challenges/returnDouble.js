var doubled = function (num) {
  const result = [];
  for (let i = 0; i < num.length; i++) {
    result.push((num[i] *= 2));
  }
  return result;
};

console.log(doubled([1, 2, 3, 4, 5])); // [2, 4, 6, 8, 10]
