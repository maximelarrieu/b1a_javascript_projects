'use strict';

const button = document.querySelector('#js-button');
button.addEventListener('click', (event) => {
    console.log('Clicked');
});
window.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});




let isClickedTwice = false;
const greyButton = document.querySelector('#js-grey-button');
greyButton.addEventListener('click', () => {
    isClickedTwice =! isClickedTwice;
    if (isClickedTwice) {
	greyButton.style.backgroundColor = 'green';
    } else {
	greyButton.style.backgroundColor = 'red';
    }
});




const hoveredButton = document.querySelector('#js-hovered-button');
hoveredButton.addEventListener('mouseenter', () => {
    hoveredButton.style.backgroundColor = 'blue';
});
hoveredButton.addEventListener('mouseleave', () => {
    hoveredButton.style.backgroundColor = 'white';
});



const formZone = document.querySelector('#js-form');
const inputZone = document.querySelector('#js-input');

inputZone.addEventListener('keyup', () => {
    console.log('myInput value : ', inputZone.value);
});
formZone.addEventListener('submit', (event) => {
    event.preventDefault();
    alert(inputZone.value);
});
