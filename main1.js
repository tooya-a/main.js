'use strict'
function rectangle(height, width) {
  return height * width;
}

console.log(rectangle(3, 5));

// 関数リテラル
const getRectangle = function(height, width) {
  return height * width;
}

console.log(getRectangle(3, 5));

const getREctangle
  = new Function('height', 'width', 'return height * width');

  console.log(getREctangle(3, 5));

  const getRECtangle = (height, width) => {
    return height * width;
  }

  console.log(getRECtangle(3, 5));

  const getSell = function(price, value) {
    return price * value;
  }

  console.log(getSell(100, 20));

  // コールバック関数
  // const displayMessage = function() {
  //   console.log("Timeout!");
  // }
  // setTimeout(displayMessage, 3000);

  function greeting(name) {
    console.log('Hello' + name + 'さん');
  }
function inputUserName(callback) {
  let name = prompt('あなたの名前を入力してください')
  callback(name);
}
inputUserName(greeting);

// let user = new Object();
// user.name = 'tooya';
// user.gender = 'man';
// console.log(user);

// let user = {name: 'tooya', gender: 'man'};
// console.log(user);
// console.log(user.name);
// console.log(user['gender']);

// for(let i = 1; i <= 3; i++){
//   console.log(i);
// }

// let arr = ['a', 'b', 'c'];
// for(let i = 0; i < 3; i++){
//   console.log(arr[i]);
// }

// for(let i = 1; i<= 3; i++) {
//   console.log(i);
// }

// for(let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for(let i = 0; i < 3; i++) {
//   for(let j = 0; j < 3; j++) {
//     console.log(`i: ${i}, j: ${j}`)
//   }
// }
// const scores = [
//   [100, 99, 98],
//   [90, 89, 88],
//   [80, 79, 98],
// ];

// for(let i = 0; i < scores.length; i++) {
//   for(let j = 0; j < scores[i]. length; j++){
//     console.log(scores[i][j]);
//   }
// }

// let j = 1;
// while(j <= 10) {
//   console.log(j);
//   if(j === 5){
//     break;
//   }
//   j++;
// }

// let i = 1;
// do {
//   console.log(i);
//   i++;
// }while(i <= 3);

// const colors = ['red', 'green', 'blue'];
//   for(let i = 0; i < colors.length; i++){
//     console.log(colors[i]);
// }

// colors.forEach(function(color){
//   console.log(color)
// });

// for (const color of colors) {
//   console.log(color);
// }

let scores = [100, 90, 80, 70, 60];
let sum = 0;

for(let i = 0; i < scores.length; i++) {
  sum += scores[i];  
}

let average = sum / scores.length;
console.log('合計値:' + sum);
console.log('平均値:' + average);