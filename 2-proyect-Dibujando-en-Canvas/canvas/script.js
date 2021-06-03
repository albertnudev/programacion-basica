let d = document.getElementById('idCanvas');
let lienzo = d.getContext('2d');
let lineas = 30;
let yIni, xFin;
let xFin2;
let colorcito = "#AAF";

/* Dibujar las líneas de los bordes */
dibujarLinea(colorcito, 0, 0, 0, 300);
dibujarLinea(colorcito, 0, 300, 300, 300);
dibujarLinea(colorcito, 0, 0, 300, 0);
dibujarLinea(colorcito, 300, 0, 300, 300);

for (let i = 0; i < lineas; i++) {
  yIni = 10 * i;
  xFin = 10 * (i + 1);
  xFin2 = 300 - (i * 10);
  dibujarLinea(colorcito, 0, yIni, xFin, 300); // Esquina Inferior-Izquierda
  dibujarLinea(colorcito, 300, yIni, xFin2, 300); // Esquina Inferior-Derecha
  dibujarLinea(colorcito, xFin2, 0, 0, xFin); // Esquina Superior-Izquierda
  dibujarLinea(colorcito, 300, xFin2, xFin2, 0); // Esquina Superior-Derecha
}

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}