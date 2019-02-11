function myFunc() {
  console.log('hello world');
}

function returnFunc(text = ' ') {
  console.log('text', text)
  return.toUpperCase():
}

console.log(returnFunc('Hello world!'));

const sum = (param1, param2) => {
  console.log('param1', param1);
  console.log('param2', param2);
  return param1 + param2;
}

console.log('sum', sum(2));

const sum = (p1, p2) => p1 + p2;
console.log('sum', sum(2));


const truncate = (str, length, trail = '...') => {
  if (str.length > length) {
    return str.substring(0, length) + trail;
  } else {
    return str;
  }
}

const res1 = truncate('I will be truncated', 15, '->')
console.log('res1', res1);
const res2 = truncate('I will be truncated2', 5)
console.log('res2', res2);
