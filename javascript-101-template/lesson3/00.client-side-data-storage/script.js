'use strict';

// Créer un cookie
document.cookie = 'lang=fr'

// Cookie et date d'expiration
document.cookie = `lang=fr;expires=${new Date('2019-02-12')}`;

// Import cookie dans cookie.js
docCookies.setItem('id', 'valeur', new Date('2019-12-31'));

// Créez un cookie userID égale à 123
docCookies.setItem('userID', 123);
console.log(docCookies.getItem('userID'));

// Modifiez la valeur du cookie
docCookies.setItem('userID', 321);

// Récupérez et stockez les valeurs des cookies
console.log(docCookies.getItem('lang'));
console.log(docCookies.getItem('previewSeen'));
console.log(docCookies.getItem('userID'));
console.log(docCookies.getItem('studentID'));

// Store an object
docCookies.setItem('testObject', JSON.stringify({ id: 1 }));

// Get an object
const myObj = docCookies.getItem('testObject')
console.log('myObj', myObj);
console.log('myObj parsed', JSON.parse(myObj));

// Supprimez le cookie test
docCookies.removeItem('test');
docCookies.setItem('test', '', new Date('2000-01-01'));

// LOCAL STORAGE

// Vérifiez si supporté
if (localStorage) {
    // Créez une entrée gretting égale à Hello World
    localStorage.setItem('greeting', 'Hello World');
    // Créez une entrée adIds égale à l'objet top:1 bottom:2
    localStorage.setItem('adIds', JSON.stringify({top:1, bottom:2}));
    // Récupérez le gretting
    localStorage.getItem('gretting');
    // Modifiez cette entrée à Welcome
    localStorage.setItem('gretting', 'Welcome');
    // Supprimez le gretting du LocalStorage
    localStorage.removeItem('greeting');
    // Tout supprimer
    //localStorage.clear();
}
