var frequentWords = function (str) {
  const words = str.toLowerCase().trim().split(" ");
  const count = {};

  for (let word of words) {
    if (count[word]) {
      count[word]++;
    } else {
      count[word] = 1;
    }
  }
  return count;
};

// console.log(
//   frequentWords("brotha brotha brotha please shut up please            ")
// );

// var repeatChar = function (str) {
//   const words = str.toLowerCase().trim().split("");
//   const count = {};

//   for (let word of words) {
//     if (count[word]) {
//       count[word]++;
//     } else {
//       count[word] = 1;
//     }
//   }

//   for (let char of words) {
//     if (count[char] === 1) return char;
//   }

//   return null;
// };

// console.log(repeatChar("aabbcc1"));

// var indexOfUniqueChar = function (str) {
//   const words = str.toLowerCase().trim().split("");
//   const count = {};

//   for (let chr of words) {
//     if (count[chr]) {
//       count[chr]++;
//     } else {
//       count[chr] = 1;
//     }
//   }

//   for (let i = 0; i < words.length; i++) {
//     if (count[words[i]] === 1) return i;
//   }

//   return -1;
// };

// console.log(indexOfUniqueChar("leetcode"));
// console.log(indexOfUniqueChar("loveleetcode"));
// console.log(indexOfUniqueChar("aabbcc"));

// ver 1
// var mostFrequentChar = function (str) {
//   const words = str.toLowerCase().trim().replace(/\s/g, "");
//   const count = {};
//   let highest = 0;
//   let highestChar = "";

//   for (let char of words) {
//     count[char] = (count[char] || 0) + 1;

//     if (count[char] > highest) {
//       highest = count[char];
//       highestChar = char;
//     }
//   }
//   return highestChar;
// };

// console.log(mostFrequentChar("The quick brown fox jumps over the lazy dog"));

// ver 2 with 3 loops
// var mostFrequentChar = function (str) {
//   const words = str.toLowerCase().trim().replace(/\s/g, "");
//   const count = {};
//   let highest = 0;

//   for (let chr of words) {
//     if (count[chr]) {
//       count[chr]++;
//     } else {
//       count[chr] = 1;
//     }
//   }

//   for (let i = 0; i < words.length; i++) {
//     if (count[words[i]] > highest) {
//       highest = count[words[i]];
//     }
//   }

//   for (let chr of words) {
//     if (count[chr] === highest) return chr;
//   }

//   return null;
// };

// console.log(mostFrequentChar("The quick brown fox jumps over the lazy dog"));

var mostFrequentChar = function (str, k) {
  let count = {};
  let result = [];

  for (let chr of str) {
    count[chr] = (count[chr] || 0) + 1;

    if (count[chr] >= k) {
      result.push(chr);
    }
  }

  return result;
};

console.log(mostFrequentChar([4, 4, 4, 4, 5, 5, 6], 2));

const arr = [1, 2, 3, 4, 5];
console.log(arr.sort((a, b) => b - a));
console.log(arr.filter((num) => num % 2 === 0));
