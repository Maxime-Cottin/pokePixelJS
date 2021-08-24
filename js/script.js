var img = new Image();

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Création du tableau 112x112
const tableau = new Array(112);
for (var i = 0; i < 112; i++)
{
  tableau[i] = new Array(112);
};

// Faire le tour du tableau
function disp_img() {
  for (let i = 0; i < tableau.length; i++) {
    for (let j = 0; j < tableau[i].length; j++) {
      var pixelImg = ctx.getImageData(j, i, 1, 1);
      var data = pixelImg.data;
      var red = data[0];
      var green = data[1];
      var blue = data[2];
      var alpha = data[3]/255;
      // console.log("X= " + j);
      // console.log("Y= " + i);
      // console.log(red, green, blue, alpha);
      $( "section" ).append( "<div class=\"pixel\" style=\"background-color:rgba(" + red + "," + green + "," + blue + "," + alpha + ")\"></div>");
    }
  }
};   



$( "#pkmn" ).keypress(function( event ) {
  if ( event.which == 13 ) {
    pickPoke();
    img.onload = function() {
      ctx.drawImage(img, 0, 0);
      disp_img();
    };  
  }
});

var pkmn = document.getElementById("pkmn");
function pickPoke() {
  if(pkmn.value == "bulbasaur" || pkmn.value == "bulbizarre") {
    console.log(pkmn.value);
    console.log("bulbizarre")
    img.src = '../res/001-bulbasaur.png';
  }
  else if(pkmn.value == "charmander" || pkmn.value == "salameche") {
    console.log(pkmn.value);
    console.log("salameche")
    img.src = '../res/004-charmander.png';
  }
  else if(pkmn.value == "squirtle" || pkmn.value == "carapuce") {
    console.log(pkmn.value);
    console.log("carapuce")
    img.src = '../res/007-squirtle.png';
  }
  else{
    console.log(pkmn.value);
    console.log("erreur")
    alert("Ce pokémon n'esxiste pas")
  }
};