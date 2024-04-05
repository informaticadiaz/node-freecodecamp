const express = require('express');

const { programacion } = require('../datos/cursos').infoCursos;

const routerProgramacion = express.Router();

// Los Middlewares
// los Middlewares son funciones que se ejecutan antes de las rutas
// Los Middlewares son funcionaes que se ejecutan antes de cuallquier tipo de metodo HTTP
// Los Middleware son funciones que se ejecutan despues de recibir una solicitud
// Los Middleware son funcionaes que se ejecutan antes de enviar una respuesta
// Los Middleware tienen acceso al objeto de la solicitud, 
// al objeto de la respuesta y a next(), 
// una función que se llama para ejecutar el próximo middleware
// El Middleware es un intermediario,
// entre que se recibe la solicitud
// se ejecuta el middleware
// y luego sigue la ejecucion de las rutas

routerProgramacion.use(express.json());

routerProgramacion.get('/', (req, res) => {
  res.send(JSON.stringify(programacion));
});

routerProgramacion.get('/:lenguaje', (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultado = programacion.filter(c => c.lenguaje === lenguaje);

  if (resultado.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }
  if (req.query.ordenar === 'vistas') {
    return res.send(JSON.stringify(resultado.sort((a, b) => b.vistas - a.vistas)));
  }

  res.send(JSON.stringify(resultado));
});

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;
  const resultado = programacion.filter(c => c.lenguaje === lenguaje && c.nivel === nivel);

  if (resultado.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
  }
  res.send(JSON.stringify(resultado));
});


// Metodo POST
routerProgramacion.post('/', (req, res) => {
  let cursoNuevo = req.body;
  programacion.push(cursoNuevo);
  res.send(JSON.stringify(programacion));
});

// Metodo PUT
/**
 * Maneja las solicitudes PUT 
 * para actualizar un curso de programación por su ID.
 * @param {string} '/:id' 
 * - La ruta que incluye el ID del curso a actualizar.
 * @param {function} (req, res) 
 * - La función de manejo de la solicitud 
 * que recibe el objeto de solicitud (req) 
 * y el objeto de respuesta (res).
 * @returns {void}
 */
routerProgramacion.put('/:id', (req, res) => {
  // Obtener el cuerpo de la solicitud
  // que contiene los datos actualizados del curso.
  const cursoActualizado = req.body;
  // Obtener el ID del curso de los parámetros de la URL.
  const id = req.params.id;

  // Buscar el índice del curso en el arreglo de programación.
  const indice = programacion.findIndex(c => c.id == id);

  // Si se encuentra el curso por su ID.
  if (indice >= 0) {
    // Actualizar el curso en el arreglo de programación.
    programacion[indice] = cursoActualizado;
  }

  // Enviar la lista actualizada de cursos como respuesta.
  res.send(JSON.stringify(programacion));
});

// Metodo PATCH
/**
 * Maneja las solicitudes PATCH 
 * para modificar parcialmente un curso de programación por su ID.
 * @param {string} '/:id' 
 * - La ruta que incluye el ID del curso a modificar.
 * @param {function} (req, res) 
 * - La función de manejo de la solicitud 
 * que recibe el objeto de solicitud (req) 
 * y el objeto de respuesta (res).
 * @returns {void}
 */
routerProgramacion.patch('/:id', (req, res) => {
  // Obtener la información actualizada del curso del cuerpo de la solicitud.
  const infoActualizada = req.body;
  // Obtener el ID del curso de los parámetros de la URL.
  const id = req.params.id;

  // Buscar el índice del curso en el arreglo de programación.
  const indice = programacion.findIndex(c => c.id == id);

  // Si se encuentra el curso por su ID.
  if (indice >= 0) {
    // Obtener el objeto del curso a modificar.
    const cursoAModificar = programacion[indice];
    // Aplicar las actualizaciones parciales al curso utilizando Object.assign().
    Object.assign(cursoAModificar, infoActualizada);
  }

  // Enviar la lista actualizada de cursos como respuesta.
  res.send(JSON.stringify(programacion));
});

// Metodo DELETE
/**
 * Maneja las solicitudes DELETE 
 * para eliminar un curso de programación por su ID.
 * @param {string} '/:id' 
 * - La ruta que incluye el ID del curso a eliminar.
 * @param {function} (req, res) 
 * - La función de manejo de la solicitud 
 * que recibe el objeto de solicitud (req) 
 * y el objeto de respuesta (res).
 * @returns {void}
 */
routerProgramacion.delete('/:id', (req, res) => {
  // Obtener el ID del curso de los parámetros de la URL.
  const id = req.params.id;
  
  // Buscar el índice del curso en el arreglo de programación.
  const indice = programacion.findIndex(c => c.id == id);

  // Si se encuentra el curso por su ID.
  if (indice >= 0) {
    // Eliminar el curso del arreglo de programación utilizando splice().
    programacion.splice(indice, 1);
    // Enviar la lista actualizada de cursos como respuesta.
    res.send(JSON.stringify(programacion));
  }
});



module.exports = routerProgramacion;