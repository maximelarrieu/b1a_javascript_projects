'use strict';

// Logguez dans la console 'Hello' 3 secondes après le rendu de la page.
setTimeout(() => {
    console.log('Hello')
}, 3000);

// (TI) Logguez dans la console 'Logged after 5 seconds' 5 secondes après le rendu de la page.
setTimeout(() => {
    console.log('Logged after 5 seconds')
}, 5000);

// Ajoutez un écouteur d'évènement 'click' à l'objet window pour logguer dans la console 'Clicked' 3 secondes après le clic.
window.addEventListener('click', () => {
    setTimeout(() => {
	console.log('Clicked')
    }, 3000);
});

// (TI) Créez un div. Au survol de ce div logguez dans la console 'I was hovered 5.5 seconds ago' 5.5 secondes après le survol.
//document.getElementById("div").addEventListener('mouseover', () => {
//    setTimeout(() => {
//	console.log('I was hovered 5.5 seconds ago')
//    }, 5500);
//});

// Créez dynamiquement une image avec src égal à http://.../
// Quand l'image sera entièrement chargée, logguez dans la console 'Done!' et l'affichez sur la page.
// En cas d'erreur de chargement, logguez dans la console 'Error'.
const myImg = document.createElement('img');
myImg.src = 'http://lorempixel.com/400/200/';
myImg.onload = () => {
    console.log('Done!');
    document.body.appendChild(myImg)
}
myImg.onerror = () => {
    console.log('Error');
}

// Créez dynamiquement une node de script avec l'url de la library lodash:
// https://cdn.jsdelivr.net/npm/lodash
// Quand le script sera téléchargé, appelez une de ces fonctions.
const myNode = document.createElement('node');
myNode.src = 'https://cdn.jsdelivr.net/npm/lodash@4.17.11/lodash.min.js';
myNode.onload = () => {
    console.log('Done!');
    round = _.round(10.02, 2);
    console.log(round);
}
myNode.onerror = () => {
    console.log('Error')
}
