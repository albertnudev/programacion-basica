let imagenes = [];
imagenes['Cauchin'] = '/4-project-Pakimanes/assets/vaca.png';
imagenes['Pokacho'] = '/4-project-Pakimanes/assets/pollo.webp';
imagenes['Tocinauro'] = '/4-project-Pakimanes/assets/cerdo.png';

let coleccion = [];
coleccion.push( new Pakiman("Cauchin", 100, 30) );
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for(let albertnu of coleccion){
    albertnu.mostrar();
}

for(let x in coleccion[0]){
    console.log(x);
}
