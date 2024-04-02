const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Estoy aprendiendo Node.js!');
});

const PUERTO = 3000;

server.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto ${PUERTO}`);
});

// iniciamos el servidor con nodemon
// nodemon app.js