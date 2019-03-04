'use strict';

// Créez un bouton. Si ce bouton est cliqué, logguez dans la console 'Clicked!'
//document.querySelector('#btn').addEventListener('click', () => {}); // JS
//$('#btn').click(() => {}); // jQuery
//$('#btn').on('click', () => {}); // jQuery

let counter = 0;
$('#js-btn').click(() => {
    counter++;
    if (counter > 5) {
	$('#js-btn').off('click')
    }
    console.log('counter', counter);
});

// Créez une div bleue. Si on le survole, il passe en vert. Si on sort le curseur de la div, elle redevient bleue. Utilisez les méthodes mouseenter,
$('#js-hovered').mouseenter(() => {
    $('#js-hovered').css('background-color', 'green'); 
});
$('#js-hovered').mouseleave(() => {
    $('#js-hovered').css('background-color', 'blue'); 
});

function changeBgCOlor(color) {
    $('#js-hovered').css('background-color', color);
}

// Tooltip
$('#js-tooltip-wrapper').mouseenter(() => {
    $('#js-tooltip').css('display', 'block')
});
$('#js-tooltip-wrapper').mouseleave(() => {
    $('#js-tooltip').css('display', 'none')
});
