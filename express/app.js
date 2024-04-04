const express = require('express');

const app = express();

const { infoCursos } = require('./cursos');

// Routing direccionamiento o enrutamiento
// usamos el metodo con dos argumentos
// el camino como primer argumento
// y una funcion como segundo argumento
// en la funcion recibimos dos argumentos
// req y res
// que son requeridos para dar respuesta al cliente

//Manejando rutas con express
app.get('/', (req, res) => {
    res.send('Mi primer servidor. Curos 💻');
});

app.get('/api/cursos/', (req, res) => {
    res.send(JSON.stringify(infoCursos));
});

app.get('/api/cursos/programacion', (req, res) => {
    res.send(JSON.stringify(infoCursos.programacion));
});

app.get('/api/cursos/matematicas', (req, res) => {
   res.send(JSON.stringify(infoCursos.matematicas)); 
});

// En esta linea especificamos el puerto
// asignado por el servidor
// si se especifica el puerto
// si no se especifica el puerto
// usamos el puerto 3000
const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto ${PUERTO}...`)
})


