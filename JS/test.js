// Print A to Z

const arr = [...new Array(26)];
let start = 65;

arr.forEach((el, i) => {
  arr[i] = String.fromCharCode(start++);
});
console.log(arr);
