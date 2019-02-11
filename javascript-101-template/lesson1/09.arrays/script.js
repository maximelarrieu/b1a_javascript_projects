const myTab = [1, 'Hello world', true];

console.log('myTab', myTab);
console.log(myTab[0]);
console.log(myTab[myTab.length - 1])

const myTab2 = myTab;
myTab2[0] = 'World';

const res = [1, 2, 3].map(num) => {
  return num * 2;
}
