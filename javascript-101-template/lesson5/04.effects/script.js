'use strict';

// Affichez l'alerte si le bouton #js-show-alert est cliqué. Cachez si le bouton #js-hide-alert est cliqué
$('#js-show-alert').click(() => {
    //$('#js-alert').show();
    //$('#js-alert').toggle();
    //$('#js-alert').slideDown();
    $('#js-alert').fadeIn();
});

$('#js-hide-alert').click(() => {
    //$('#js-alert').hide();
    //$('#js-alert').slideUp();
    $('#js-alert').fadeOut();
});

// Utilisez les méthodes slideUp, slideDOwn ou slideTOggle pour afficher ou cacher la bannière .js-slide-example-links sous le paragraphe #js-slide-example si celui-ci est cliqué.

// Au clic sur le bouton avec l'id 'js-btn-fade-in' faites apparaitre le div avec l'animation fondu
$('#js-btn-fade-in').click(() => {
    $('#js-div-fade-in-out').fadeIn();
});
$('#js-btn-fade-out').click(() => {
    $('#js-div-fade-in-out').fadeOut();
});

//
$('#js-div-1 #js-div-2 #js-div-3 #js-div-4').css('opacity', '30%');
$('div').click(() => {
    $('div').fadeTo();
});

// Animation
// Appliquez une animation au div #js-animation-1: ce <div> se déplace à 300px de gauche à droite en 700ms, 3 secondes après la fin du rendu de la page. Utilisez les méthodes delay et animate
$('js-animation-1')
    .delay(1000)
    .animate({
	left: '300px'
    }, 700)
    .animate({
	width: '200px'
    }, 500)
    .animate({
	height: '700px'
    });
