// importamos el modulo http
const http = require('http');
// creamos una constante llamada server
// para guardar nuestro servidor
// luego nos referimos a la constante
// que contiene el módulo http
// utilizamos el método createServer
// para crear un servidor
// usame una arrow function con dos parametros
// el parametro req contiene la solicitud HTTP
// el parametro res contiene la respuesta HTTP
// dentro de la arrow function vamos a realizar
// el proceso que necesitamos
// Usamos res.end para enviar la respuesta al cliente
const server = http.createServer((req, res) => {
    console.log('Solicitud Nueva')
    res.end('Hello World');
})
// Cada vez qye ingresamos desde el navegador a localhost:3000
// el servidor responde a la peticion.
// Si recargamos la pagina podemos ver en la consola
// solicitud nueva por cada peticion
// Le decimos al servidor que escuche el puerto 3000
// ya podemos ejecutar el servidor desde la consola
// podemos ingresar a localhost:3000 para poder ver el servidor

const PUERTO = 3000

server.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});