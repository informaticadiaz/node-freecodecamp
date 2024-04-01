// routes con Node.js
// importamos el modulo http
const http = require('http');
// importamos el modulo cursos
const cursos = require('./cursos');
// creamos un servidor
const server = http.createServer((req, res) => {
  // creamos un metodo para manejar las solicitudes  
  const { method } = req;
  // creamos un switch
  // para manejar las solicitudes GET
  switch (method) {
    // si la peticion es GET
    // retornamos una respuesta
    case 'GET':
      return manejarSolicitudGET(req, res);
    // si la peticion es POST
    // retornamos una respuesta
    case 'POST':
      return manejarSolicitudPOST(req, res);
    // si la peticion no es GET
    // retornamos un error
    default:
      res.statusCode = 501;
      console.log(`El metodo ${method} no puede ser procesado`);
  }
});
// creamos una funcion para manejar las solicitudes
function manejarSolicitudGET(req, res) {
  // creamos una variable path
  // para guardar la url
  const path = req.url;
  // creamos un if para manejar las solicitudes
  // si la peticion es / 
  // retornamos un mensaje de bienvenida
  if (path === '/') {
    return res.end('Bienvenido al servidor Node.js');
  }
  // si la peticion es /cursos
  // retornamos un json con los cursos
  else if (path === '/cursos') {
    return res.end(JSON.stringify(cursos.infoCursos));
  }
  // si la peticion es /cursos/programacion
  // retornamos un json con los cursos de programacion
  else if (path === '/cursos/programacion') {
    return res.end(JSON.stringify(cursos.infoCursos.programacion));
  }
  // si la peticion es /cursos/matematicas
  // retornamos un json con los cursos de matematicas
  else if (path === '/cursos/matematicas') {
    return res.end(JSON.stringify(cursos.infoCursos.matematicas));
  }
  // si la peticion no es en ninguna de las anteriores
  // retornamos un error
  else {
    res.statusCode = 404;
    return res.end('Recurso no encontrado');
  }
}

function manejarSolicitudPOST(req, res) {
  const path = req.url;
  if (path === '/cursos/programacion') {

    let body = '';

    req.on('data', contenido => {
      body += contenido.toString();
    });

    req.on('end', () => {
      console.log(body);
      console.log(typeof body);

      // Convertir el body a un objeto JavaScript
      body = JSON.parse(body);
      console.log(body.titulo);
      console.log(typeof body);

      res.end(`Recibiste una solicitud POST`);
    })
  }
}

const PUERTO = 3000

server.listen(PUERTO, () => {
  console.log(`Escuchando en el puerto ${PUERTO}`)
});