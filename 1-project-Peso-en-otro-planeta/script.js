let usuario = prompt('¿Cuál es tu peso?');
let planeta = prompt('Elige tu planeta\n- 1 es marte\n- 2 es jupiter');
let peso = parseInt(usuario);

let g_tierra = 9.8;
let g_marte = 3.7;
let g_jupiter = 24.8;
let peso_final;
let nombre = ''
if(planeta == 1){
    peso_final = peso * g_marte / g_tierra;
    nombre = 'Marte'
}
else if(planeta == 2){
    peso_final = peso * g_jupiter / g_tierra;
    nombre = 'Jupiter'
} else {
    peso_final = 1000000;
    nombre = 'Krypton'

}
peso_final = parseInt(peso_final);

document.write('Tu peso en ' + nombre + ' es <strong>' + peso_final + ' kilos</strong>');
