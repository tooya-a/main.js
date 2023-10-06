'use strict';

let weight = 60;
let hight = 1.7;
let bmi = weight / (hight * hight);
console.log(bmi);

if(bmi >= 25){
  console.log('肥満');
} else if(bmi >= 18.5){
  console.log('普通');
} else {
  console.log('痩せ');
}

let num = 5;
  switch(num) {
    case 1:
      console.log('大吉');
      break;
      case 2:
        console.log('中吉');
        break;
        case 3:
          console.log("小吉");
          break;
          default:
            console.log('想定外の数値です');
            break;
  }
// 三項演算子
  let age = 20;
  let beverage = (age >+ 20) ? 'ビール' : 'コーラ';
  console.log(beverage);