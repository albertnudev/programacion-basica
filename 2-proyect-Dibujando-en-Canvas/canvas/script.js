var texto = document.getElementById('texto_lineas');
var boton = document.getElementById('botoncito');
boton.addEventListener('click', dibujoPorClick);

var d = document.getElementById('idCanvas');
var ancho = d.width;
var lienzo = d.getContext('2d');

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}

//----------------------------------------------------///
function dibujoPorClick(){
  var lineas = parseInt(texto.value);
  var i = 0;
  var yi, xf;
  var xf2;
  var colorcito = "#AAF";
  var espacio = ancho / lineas;

for (i = 0; i < lineas; i++) {
  yi = espacio * i;
  xf = espacio * (i + 1);
  xf2 = 300 - (i * espacio);
  dibujarLinea(colorcito, 0, yi, xf, 300); // Esquina Inferior-Izquierda
  dibujarLinea(colorcito, 300, yi, xf2, 300); // Esquina Inferior-Derecha
  dibujarLinea(colorcito, xf2, 0, 0, xf); // Esquina Superior-Izquierda
  dibujarLinea(colorcito, 300, xf2, xf2, 0); // Esquina Superior-Derecha
  }
  /* Dibujar las líneas de los bordes */
  dibujarLinea(colorcito, 0, 0, 0, 300);
  dibujarLinea(colorcito, 0, 300, 300, 300);
  dibujarLinea(colorcito, 0, 0, 300, 0);
  dibujarLinea(colorcito, 300, 0, 300, 300);
}