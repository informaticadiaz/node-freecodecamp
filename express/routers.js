const express = require('express');

const app = express();

const { infoCursos } = require('./cursos');

// Routers
// Usando Routers
// podemos usar router para hacer el codigo mas legible
// y reutilizable
// creo un routers

const routerProgramacion = express.Router();
app.use('/api/cursos/programacion', routerProgramacion);

const routerMatematicas = express.Router();
app.use('/api/cursos/matematicas', routerMatematicas);

app.get('/', (req, res) => {
  res.send('Mi primer servidor. Curos 💻');
});

app.get('/api/cursos/', (req, res) => {
  res.send(JSON.stringify(infoCursos));
});

routerProgramacion.get('/', (req, res) => {
  res.send(JSON.stringify(infoCursos.programacion));
});

routerProgramacion.get('/:lenguaje', (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultado = infoCursos.programacion.filter(c => c.lenguaje === lenguaje);

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
  const resultado = infoCursos.programacion.filter(c => c.lenguaje === lenguaje && c.nivel === nivel);

  if (resultado.length === 0) {
      return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
  }
  res.send(JSON.stringify(resultado));
})

routerMatematicas.get('/', (req, res) => {
  res.send(JSON.stringify(infoCursos.matematicas));
});

routerMatematicas.get('/:tema', (req, res) => {
  const tema = req.params.tema;
  const resultado = infoCursos.matematicas.filter(c => c.tema === tema);

  if (resultado.length === 0) {
      return res.status(404).send(`No se encontraron cursos de ${tema}`);
  }

  res.send(JSON.stringify(resultado));
})

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
  console.log(`Escuchando en el puerto ${PUERTO}...`)
})




