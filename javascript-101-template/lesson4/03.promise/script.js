'use strict';

// Créez une promise qui retourne une chaine de caractères 'Hello' immediatement. Récupérez et loggez la valeur qu'elle retourne.
const myPromise = new Promise((resolve, reject) => {
    if (5 > 3) {
	setTimeout(() => {
	    resolve('Hello');
	}, 10000)
    } else {
	reject('Error!')
    }
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));

// Créez une promesse qui retourne un nombre N.
const getNum = new Promise((resolve, reject) => {
    resolve(10);
});
getNum
    .then(num => {
	return num * 2
    })
    .then(num => {
	return num - 1
    })
    .then(num => {
	console.log('res', res);
    })
    .catch(err => {
	console.log('err', err);
    })

// Créez une fonction qui prend un nombre comme paramètre et qui retourne une promise. Si le nombre passé est inférieur à 5 la promise est résolue avec sinon la promise retourne une erreur 'Le nombre passé est trop grand'. A la fonction créée et récupérez la valeur retournée par la promise.
const myPrms = (number) => {
    return new Promise((resolve, reject) => {
	if (number < 5) {
	    resolve('Done!')
	} else {
	    reject('Le nombre passé est trop grand')
	}
    })
}

myPrms(7)
    .then(num => {
	console.log('res', res);
    })
    .catch(err => {
	console.log('err', err);
    })

// Placeholder API
// Récupérez et affichez un article avec l'id 25, ensuite récupérez et affichez ses commentaires.
fetch('https://jsonplaceholder.typicode.com/posts/25')
    .then(reponse => reponse.json())
    .then(result => {
	console.log('result', result);
    })

// Utilisez l'API de ... et la méthode fetch qui retourne une promise.
// Récupérez et affichez les informations de l'utilisateur avec l'id 5.
fetch('https://regres.in/api/users/5')
    .then(reponse => reponse.json())
    .then(result => {
	console.log('result', result);
    })

// Créez un formulaire d'inscription. A la soumissin du formulaire envoyez une requête pour créer un utilisateur. Sauvegardez ces données dans les cookies.
const signupData = {
    email: 'test@ynov.com',
    password: 'mypsswd',
    lastname: 'toto'
}
fetch('https://reqres.in/api/register', {
    method: 'POST',
    body: JSON.stringify(signupData),
    headers: {
	'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(result => console.log('result', result));

// Modifiez l'utilisateur avec l'id 2 sur https://reqres.in
// PUT : http://reqres.in/api/users/2 avec l'objet
const userData = {
    name: 'myname',
    job: 'student'
}
fetch('https://reqres.in/api/users/2', {
    method: 'PUT',
    body: JSON.stringify(signupData),
    headers: {
	'Content type': 'application/json'
    }
})

// Créez un site de gif random
fetch('https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=uiZ88gpg2lGbOP49w4Obik9TJinkJQCE')
    .then(response => response.json())
    .then(result => {
	console.log('Result', result)
	const myGiph = document.createByElement('img');
    })
