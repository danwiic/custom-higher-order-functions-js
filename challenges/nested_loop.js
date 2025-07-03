// let count = 1;
// for (let i = 0; i < 3; i++) {
//   let line = "";
//   for (let j = 0; j < 3; j++) {
//     line += count + " ";
//     count++;
//   }
//   console.log(line);
// }

// const multiply = function (n) {
//   for (let i = 1; i <= n; i++) {
//     let line = "";
//     for (let j = 1; j <= n; j++) {
//       line += i * j + " ";
//     }
//     console.log(line);
//   }
// };

// multiply(20);

const triangle = function (n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
      line += "*" + " ";
    }
    console.log(line);
  }
};

triangle(5);
