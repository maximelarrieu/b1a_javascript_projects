'use strict';

console.log(2 > 1); //true

console.log(2 < 1); //false

console.log(20 >= 10); //true

console.log(10 >= 10); //true

console.log(4 !== 6); //true

console.log(3 != 3); //false

console.log('2' !== 2); //false

console.log('hello' === 'hello'); //true

console.log('hello' === 'Hello'); //false

if (5 > 0 && 5 < 10) {
  console.log('yes');
} else {
  console.log('no');
}


let res_div = 20 / 2;
if (res_div >= 10 || res_div < 15) {
  console.log('yes');
} else {
  console.log('no');
}


let isPrivate;
let isMember;
if (isPrivate || (isPrivate && isMember)) {
  console.log('can see group')
} else {
  console.log('can not see group')
}
//ou
if (!isPrivate)


const username = prompt('What is your name bg?');
console.log('username', username);
alert('your value here pls');


let isConnected;
if (isConnected === true) {
  const status = prompt('wat is ur status pls?');
  console.log('status', status);
  if (status === 0) {
    console.log('Hello %username !');
  }
  if (status === 1) {
    console.log('Hello powerful !');
  }
  if (status === 2) {
    console.log('Hello almighty !');
  }
} else {
  console.log('pls connect you');
}


const today = new Date();
const todayDay = today.getDay();
console.log('todayDay', todayDay);

switch (todayDay) {
  case 0:
    console.log('dimanche');
    break;
  case 1:
    console.log('lundi');
    break;
  ...
  default:
    console.log('wtf??');
}
