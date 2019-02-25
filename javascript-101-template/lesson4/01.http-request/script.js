'use strict';

// Récupérez l'information du profil de Han Solo (son id dans la base de données est 14). Ensuite
// affichez sur votre page ces données: nom, sexe, date de naissance, couleur des yeux, couleur des cheveux.
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
	const rawValue = xhttp.responseText;
	const parsedValue = JSON.parse(rawValue);

	const hanSoloInfo = document.createElement('div');
	hanSoloInfo.innerHTML = `
	<p>Nom: ${parsedValue.name}</p>
	<p>Sexe: ${parsedValue.gender}</p>
	<p>Date de naissance: ${parsedValue.birth_year}</p>
	`
	document.body.appendChild(hanSoloInfo);
    }
};

xhttp.open('GET', 'https://swapi.co/api/people/14/', true);
xhttp.send();

// Trouvez toutes les personnes avec le nom de famille Skywalker. Affichez leur profils sur votre page.
let xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = () => {
    if (xhttp2.readyState == 4 && xhttp2.status == 200) {
        console.log(xhttp2.responseText);
        const rawValue = xhttp2.responseText;
        const parsedValue = JSON.parse(rawValue);

        parsedValue.results.forEach(person => {
            const personDiv = document.createElement('div')
            personDiv.innerHTML = 
            `
            <hr> 
            <p>Nom : ${person.name}</p>
            <p>Sexe : ${person.gender}</p>
            <p>Date de naissances : ${person.birth_year}</p>
            `
            document.body.appendChild(personDiv);
        });
    }
};
xhttp2.open('GET', 'https://swapi.co/api/people/?search=skywalker', true);
xhttp2.send();

// Récupérez et affichez les données de 5 planètes avec les ids suivants:
const planets = [1, 2, 3, 4, 5];
planets.forEach(planetId => {
    let xhttpPlanets = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
	if (xhttp.readyState == 4 && xhttp.status == 200) {
	    console.log(xhttpPlanets.responseText)
	    const rawValue = xhttp.responseText;
	    const parsedValue = JSON.parse(rawValue);
	    const planetValue = document.createElement('div');
	    planet.innerHTML = `
	    climat: ${parsedValue.climat}
	    `
	    document.body.appendChil(planet)
	}
    };
    xhttp.open('GET', 'https://swapi.co/api/planets/'+planetId + '/', true);
    xhttp.send();
})

// Créez 
