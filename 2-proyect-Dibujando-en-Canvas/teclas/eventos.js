const teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
console.log(teclas);

document.addEventListener('keydown', dibujarTeclado);
let cuadrito = document.getElementById('area_de_dibujo');
let papel = cuadrito.getContext('2d');
let x = 100;
let y = 100;

dibujarLinea('#AAF', x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth= 3;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento){
    let movimiento = 1;
    let colorcito = '#AAF';
    switch(evento.keyCode){
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
        break;
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
        break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel );
            x = x - movimiento;
        break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel );
            x = x + movimiento;
        break;
    }
}