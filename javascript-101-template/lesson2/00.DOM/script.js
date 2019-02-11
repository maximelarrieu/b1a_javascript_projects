'use strict';

const myDivs = document.getElementsByTagName('div');
console.log('myDivs', myDivs);
const myDivs2 = document.querySelectorAll('div');
console.log('myDivs2', myDivs2);




const myParagraphs = document.getElementsByClassName('my-paragraphs');
console.log('myParagraphs', myParagraphs);
const myParagraphs2 = document.querySelectorAll('.my-paragraphs2');
console.log('myParagraphs2', myParagraphs2);




const myUniqueEl = document.getElementById('js-unique-el');
console.log('js-unique-el', myUniqueEl);
const myUniqueEl2 = document.querySelector('#js-unique-el');
console.log('#js-unique-el', myUniqueEl);




const myParagraphsInDivs = document.querySelectorAll('div p');
console.log('myParagraphsInDivs', myParagraphsInDivs);




const mySpansPrecedeedByDivs = document.querySelectorAll('div ~ span');
console.log('mySpansPrecedeedByDivs', mySpansPrecedeedByDivs);




const firstP = document.querySelector('p');
firstP.innerText = 'I am the first paragraph';
console.log('firstP > text', firstP.innerText);




const secondP = document.querySelectorAll('.second-p');
secondP[0].innerHTML = '<span>Hello</span>';
console.log('secondP > html', secondP[0].innerHTML);




const myImg = document.querySelector('img');
myImg.setAttribute('width', '30%');
myImg.setAttribute('height', 'auto');


myImg.setAttribute('alt', 'Calisse');


firstP.style.color = 'blue';
firstP.style.fontSize = '1.5rem';


myImg.className = 'my-img';
myImg.classList.add('my-img');




const parent = document.querySelector('div');
const nodeToDelete = document.querySelector('div p');
parent[0].removeChild('nodeToDelete');




const myBody = document.querySelector('body');
const newDiv = document.createElement('div');
newDiv.innerText = 'Hello !';
myBody.appendChild(newDiv);
const anotherDiv = document.createElement('div');
anotherDiv.innerText = 'First child';
anotherDiv.style.color = 'red';
myBody.prepend(anotherDiv);
