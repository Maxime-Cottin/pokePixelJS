var img = new Image();
img.src = '../res/063-abra.png';
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Création du tableau 112x112
const tableau = new Array(112);
for (var i = 0; i < 112; i++)
{
  tableau[i] = new Array(112);
}

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
      console.log(red, green, blue, alpha);
      $( "section" ).append( "<div class=\"pixel\"></div>");
      $('.pixel').last().css("background-color" , `rgba (${red},${green},${blue},${alpha})`);
      console.log("x = " + (j+1));
      console.log("y = " + (i+1));

    }
  }
};     

img.onload = function() {
  ctx.drawImage(img, 0, 0);
  disp_img();
};  