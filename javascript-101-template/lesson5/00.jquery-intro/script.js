'use strict';

// Quand le rendu de la page sera terminé, utilisez les selecteurs jQuery pour selectionner et logguer
$(document).ready(() => {
    // Toutes les balises <div>
    const divs = $('div');
    console.log('divs', divs);
    // Toutes les balises avec le nom de classe js-paragraph
    console.log('class', $('.js-paragraph'));
    // La balise avec l'id js-unique-paragraph
    console.log('id', $('#js-unique-paragraph'));
    // Premier titre <h3>
    console.log('first h3', $('h3:first'));
    // Le premier <th> du premier <tr>
    console.log('first th & tr first', $('tr:first th:first'));
    // Le premier <td> de chaque <tr>
    console.log('first td chaque tr', $('tr td:first'));
    // Tous les liens
    const href = $('a');
    console.log('links', href);
    // Tous les liens externes
    console.log('external links', $('a[target="_blank"]'));
    // Tous les liens internes (ceux qui n'ont pas l'attribut target _blank)
    console.log('interne links', $('a[target!="_blank"]'));
    // Tous les boutons dans un formulaire
    console.log('button', $('input[type="button"]'));
});
