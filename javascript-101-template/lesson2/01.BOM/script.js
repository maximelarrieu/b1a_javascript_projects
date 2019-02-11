'use strict';

function appendEl(container, el) {
    container.appendChild(el);
}


function createEl(text) {
    console.log('text', text);
    const el = document.createElement('p');
    el.innerText = text;
    return el;
}

const navigatorSection = document.querySelector('#js-navigator');
appendEl(navigatorSection, createEl(`Nom de navigateur : ${window.navigator.userAgent}`));
appendEl(navigatorSection, createEl(`Langue principale : ${window.navigator.language}`));
appendEl(navigatorSection, createEl(`Platforme de mon ordinateur : ${window.navigator.platform}`));
appendEl(navigatorSection, createEl(`Cookies activés : ${window.navigator.cookieEnabled}`));

const screenSection = document.querySelector('#js-screen');
appendEl(screenSection, createEl(`Largeur de l'écran : ${window.screen.width}px`));
appendEl(screenSection, createEl(`Hauteur de l'écran : ${window.screen.height}px`));
appendEl(screenSection, createEl(`Orientation de l'écran : ${window.screen.orientation.type}`));

const windowSection = document.querySelector('#js-window');
appendEl(windowSection, createEl(`Largeur de la fenêtre : ${window.outerWidth}`));
appendEl(windowSection, createEl(`Hauteur de la fenêtre : ${window.outerHeight}`));
appendEl(windowSection, createEl(`Largeur de mon navigateur : ${window.innerWidth}`));
appendEl(windowSection, createEl(`Hauteur de mon navigateur : ${window.innerHeight}`));

const windowLocation = document.querySelector('#js-location');
appendEl(windowLocation, createEl(`URL de la page : ${window.location.href}`));
appendEl(windowLocation, createEl(`Host name de la page : ${window.location.pathname}`));
appendEl(windowLocation, createEl(`Protocole utilisé : ${window.location.protocol}`));

