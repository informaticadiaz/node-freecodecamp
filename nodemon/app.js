const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello FreeCodeCamp!');
});

const PUERTO = 3000;

server.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto ${PUERTO}`);
});
