const http = require('http');

function sitioweb(req, res){
    res.writehead(200, {'Content-type': 'test/plain'});
    res.end
}

let servidor = http.createServer(sitioweb);

servidor.listen(6969, '127.0.0.1');

console.log('Servidor corriendo en el puerto 6969');
