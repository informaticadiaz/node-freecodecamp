const express = require('express');

const { programacion } = require('../datos/cursos').infoCursos;

const routerProgramacion = express.Router();

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

routerProgramacion.post('/', (req, res) => {
  let cursoNuevo = req.body;
  programacion.push(cursoNuevo);
  res.send(JSON.stringify(programacion));
});

module.exports = routerProgramacion;