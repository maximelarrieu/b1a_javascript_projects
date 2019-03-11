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

// PART 2
// Ajoutez la classe 'alert-primary' au <div>
$('#js-alert').addClass('alert-primary');

// Supprimez la classe 'alert-primary' du <div>. Supprimez
$('#js-alert').removeClass('alert-primary');

// Ajoutez d'un coup les classes 'alert' et 'alert-warning' au <div>
$('#js-alert').addClass('alert alert-warning');

// Vérifiez si le <div> possède déjà la classe 'alert-warning'. Si oui, supprimez-la
if ($('#js-alert').hasClass('alert-warning')) {
    $('#js-alert').removeClass('alert-warning');
}

// En cliquant sur le bouton #js-btn, basculez la classe 'alert-success': premier clic ajoute la classe deuxième clic l'enlève, troisième l'ajoute de nouveau..
$('#js-btn')[0].addEventListener('click', () => {
    $('#js-alert').toggleClass('alert-success');
});

// Récupérez et logguez dans la console la couleur du fond du bouton.
console.log($('#js-btn').css('background-color'));

// Passez la couleur du fond du bouton en #71b8af
$('#js-btn').css('background-color', '#71b8af');

// Changez d'un coup la couleur du texte du bouton à #fff2d5 et le radius de la bordure à 3px
$('#js-btn').css({
    color: '#fff2d5',
    'border-radius': '3px'
});

// Hide alert
if ($('#js-danger-alert').hasClass('alert-danger')) {
    $('div p').addClass('text-danger');
    $('div button').removeClass('btn-success');
}
$('#js-danger-alert')[0].addEventListener('click', () => {
    $('#js-danger-alert').css({
	display: 'none'
    });
});
