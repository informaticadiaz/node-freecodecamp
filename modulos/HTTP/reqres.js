// importamos el modulo http
const http = require('http');
// creamos un servidor con el módulo http
// vamos a ver en detalle req y res
// req contiene información de la solicitud HTTP
// La solicitud HTTP va a incluir 
// la url de donde se realizo la peticion

const server = http.createServer((req, res) => {
    console.log('===> req (solicitud)');
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    console.log('===> res (respuesta)');
    // codigo de estado
    console.log(res.statusCode);
    // cambiamos el codigo de estado
    res.statusCode = 404;
    // Vemos el nuevo codigo de estado
    console.log(res.statusCode);
    // Configurar la cabecera
    res.setHeader('Content-Type', 'application/json');
    // ver los elementos de la cabecera
    console.log(res.getHeaders());
    res.end('Hello World');
});

const puerto = 3000;

server.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});