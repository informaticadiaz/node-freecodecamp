const express = require('express');
const app = express();

const { infoCursos } = require('./datos/cursos');

const routerProgramacion = require('./routers/programacion');
app.use('/api/cursos/programacion', routerProgramacion);

const routerMatematicas = require('./routers/matematicas');
app.use('/api/cursos/matematicas', routerMatematicas);


app.get('/', (req, res) => {
  res.send('Mi primer servidor. Curos 💻');
});

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
  console.log(`Escuchando en el puerto ${PUERTO}...`)
})
