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

// Usando parametros URL
// en este caso usamos un parametro con :lenguaje
// cada direccion tomara un parametro y podra devolver un json
// si es que el parametro coincide con el lenguaje
// que se describe dentro de infoCursos
// para el caso podriamos escribir:
// /api/cursos/programacion/python
// para acceder a ese lenguaje
// /api/cursos/programacion/javascript
// para acceder a ese lenguaje
// estamos utilizando parametros y filter.
// describo el proximo codigo
/*
en esta linea de codigo uso el metodo get
tambien uso un parametro URL (:lenguaje)
despues obtengo el parametro :lenguaje de la url
y lo almaceno en la variable lenguaje
dentro de la variable resultado uso el metodo filter
para filtrar el lenguaje de programacion dentro de infoCursos
que coincide con el parametro :lenguaje
despues con if verifico si resultado tiene elementos
si no tiene elementos envio un codigo de error 404
y un mensaje de error que indica que 
no se encontraron cursos para ese lenguaje
por ultimo si el parametro del pedido coincide
con algun lenguaje de programacion de infoCursos
envio una respuesta con el json de infoCursos filtrado
gracias a este codigo puedo acceder a todos los lenguajes
de programacion de infoCursos con muy pocas lineas de codigo
si no existieran los parametros url y no implmentaria el filtro
tendria que especificar una ruta para cada lenguaje esto seria 
inviable si infoCursos tendira muchos lenguajes de programacion
seria un trabajo demasiado tedioso por eso es importa aplicar 
buenas practicas a la hora de crear el servidor.
*/
app.get('/api/cursos/programacion/:lenguaje', (req, res) => {
    // Obtener el lenguaje de los parámetros de la solicitud
    const lenguaje = req.params.lenguaje;
    // Filtrar los cursos de programación por el lenguaje especificado
    const resultado = infoCursos.programacion.filter(c => c.lenguaje === lenguaje);
    // Verificar si se encontraron cursos para el lenguaje especificado
    if (resultado.length === 0) {
        // Enviar un mensaje de error si no se encontraron cursos
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    }
    // utilizando parametros query 
    // parametros query = parametros de busqueda
    // ordenamos los cursos por el campo de vistas
    if (req.query.ordenar === 'vistas') {
        return res.send(JSON.stringify(resultado.sort((a, b) => b.vistas - a.vistas)));
    }

    // Enviar la lista de cursos encontrados como una respuesta JSON
    res.send(JSON.stringify(resultado));
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

// usando dos parametros URL
/**
 * Esta ruta GET maneja las solicitudes para obtener cursos de programación por lenguaje y nivel.
 * @route GET /api/cursos/programacion/:lenguaje/:nivel
 * @group Cursos - Operaciones relacionadas con los cursos de programación
 * @param {string} lenguaje.path.required - El lenguaje de programación para filtrar los cursos.
 * @param {string} nivel.path.required - El nivel de los cursos de programación.
 * @returns {Array<object>} 200 - Array de objetos que representan los cursos de programación encontrados.
 * @returns {string} 404 - Mensaje de error si no se encuentran cursos para el lenguaje y nivel especificados.
 * @returns {Error}  default - Error de servidor.
 */
app.get('/api/cursos/programacion/:lenguaje/:nivel', (req, res) => {
    // Obtener el lenguaje y nivel de los parámetros de la solicitud
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    // Filtrar los cursos de programación por el lenguaje y nivel especificados
    const resultado = infoCursos.programacion.filter(c => c.lenguaje === lenguaje && c.nivel === nivel);
    // Verificar si se encontraron cursos para el lenguaje y nivel especificados
    if (resultado.length === 0) {
        // Enviar un mensaje de error si no se encontraron cursos
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
    }
    // Enviar la lista de cursos encontrados como una respuesta JSON
    res.send(JSON.stringify(resultado));
})

// hacemos lo mismo pero para los cursos de matematicas
app.get('/api/cursos/matematicas/:tema', (req, res) => {
    const tema = req.params.tema;
    const resultado = infoCursos.matematicas.filter(c => c.tema === tema);

    if (resultado.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${tema}`);
    }

    res.send(JSON.stringify(resultado));
})

// En esta linea especificamos el puerto
// asignado por el servidor
// si se especifica el puerto
// si no se especifica el puerto
// usamos el puerto 3000
const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto ${PUERTO}...`)
})




