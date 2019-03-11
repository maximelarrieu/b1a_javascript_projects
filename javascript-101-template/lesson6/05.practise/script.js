'use strict';

//---------------NAVBAR---------------//
// Création fonction au clic, je display le bloc demandé
$('#navbarDropdownMenuLink').click(function() {
    $('#navbarDropdownMenu').css('display', 'block');
});

//---------------FOOTER---------------//
//J'initialise une date
const today = new Date();
//Je récupère seulement l'année et je l'ajoute au span
document.getElementById("js-current-year").innerHTML = today.getFullYear();

//---------------FIRST BLOCK---------------//
//Je créer une fonction au submit
$('#js-bmi-form')[0].addEventListener('submit', () => {
  event.preventDefault();
  //Je récupère la valeur input
  const weight = $("#js-bmi-weight").val();
  const height = $("#js-bmi-height").val();
  const result = weight / (height/100 * height/100);

  const u_weight = "considered underweight";
  const h_weight = "a healthy weight";
  const o_weight = "considered overweight";
  //Condition pour chaque résultat
  if (result < 18.5) {
    $('.jumbotron').append('<p>Your Body Mass Index is ' + Math.ceil(result) + '. It is ' + u_weight + '.</p>');
  } else if (result >= 18.5 && result <= 25) {
    $('.jumbotron').append('<p>Your Body Mass Index is ' + Math.ceil(result) + '. It is ' + h_weight + '.</p>');
  } else if (result > 25) {
    $('.jumbotron').append('<p>Your Body Mass Index is ' + Math.ceil(result) + '. It is ' + o_weight + '.</p>');
  }
});

//---------------FACTS---------------//
const bmiFacts = [
  {
    title: 'Future weight of children can be anticipated by BMI',
    description: 'Scientists in a new study have concluded that future weight can be forecasted by looking at children’s BMI. ',
    img: 'http://lorempixel.com/200/200/cats'
  },
  {
    title: 'Losing BMI weight lowers the risk of diabetes',
    description: 'New research established the fact that lowering BMI by almost five units dramatically lowers risk of diabetes, in spite of the initial weight of a person.',
    img: 'http://lorempixel.com/200/200/sports'
  },
  {
    title: 'Pre-pregnancy BMI is closely related to excess weight gain during pregnancy',
    description: 'Excessive weight gain during pregnancy affects the health of a mother and her baby, pre-pregnancy BMI and ethnicity might signal a likelihood for obesity later in life for young mothers.',
    img: 'http://lorempixel.com/200/200/fashion'
  },
  {
    title: 'Coronary heart disease is proportionate to Body Mass Index (BMI)',
    description: 'According to a research from the Million Women Study, Coronary heart disease (CHD) increases with age and also with an increase in body mass index (BMI).',
    img: 'http://lorempixel.com/200/200/food'
  },
];
//Je récupère les éléments du tableau
bmiFacts.forEach(function(element) {
  console.log(element);
});
//Add html
function addElement() {
  var myDiv = document.createElement("div");
  var myContent = document.createTextNode("Hi, it's my text");
  myDiv.appendChild(myContent);
  $('div').append();
}

//---------------ADVERTISEMENT--------------//
//Fonction au clic sur la croix
$('#js-ad-close').click(function() {
    window.open('https://cat-bounce.com', '_blank');
    console.log("Clicked");
});
//Je n'arrive pas à gérer le deuxième clic
$('#js-ad-close').click(function() {
  $('#js-ad').css('display', 'none');
    console.log("Clicked");
});

//---------------CONTACT FORM---------------//

//**Date Picker**//
//Il ne fonctionne pas :(
jQuery(function($) {
    $("#datepicker").datepicker();
  });

//---------------COOKIES---------------//
myStockage = localStorage;
localStorage.setItem('cookiesAccepted', 'true');
