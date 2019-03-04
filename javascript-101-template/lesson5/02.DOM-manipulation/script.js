'use strict';

// Récupérez et logguez dans la console le contenu du titre de la page
const title = $('h1').text();
console.log('title, title');

//Changez le contenu du titre de la page à 'My page title'
$('h1').text('My page title');

// Récupérez et logguez dans la console le HTML de l'article.
const articleContent = $('#js-artcile').html();
console.log('articleContent', articleContent);

// Changer le contenu de l'article à 
$('#js-article').html(`
<h2>This is my article.</h2>
<p>This is my article's content.</p>
<a href="https://example.com">Read more</a>
`);

// Récupérez et logguez dans la console la valeur du champ de saisie avec l'id js-search
const inputValue = $('#js-search').val();
console.log('inputValue', inputValue);

// Changer la valeur du champ de saisie à 'Beagles'
$('#js-search').val('Beagles');

// Search
$('#js-search-form')[0].addEventListener('submit', () => {
    event.preventDefault();
    const input_Value = $('#js-searchs').val();
    console.log('input_Value', inputValue);
    if (input_Value == 'Chat') {
	$('#js-search-result').html(`Miaou!`);
    } else {
	$('#js-search-result').html(`
	<p>Pas de resultats pour la recherche : <strong>`+ input_Value + `</strong></p>
	`);
    }
});
