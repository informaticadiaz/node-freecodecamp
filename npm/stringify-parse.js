let infoCurso = {
    "titulo": "Aprende Node.js",
    "numVistas": 45642,
    "numLikes": 21123,
    "temas": [
        "JavaScript",
        "Node.js"
    ],
    "esPublico": true
};

// stringify transforma un objeto en un string
let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCursoJSON);

// podemos ver que es un string
console.log(typeof infoCursoJSON)

// cadena de caracteres -> Objeto
let infoCursoObjeto = JSON.parse(infoCursoJSON)

console.log(infoCursoObjeto)

// podemos ver que es un objeto
console.log(typeof infoCursoObjeto)

/* 
Transformar json a objeto sera util para 
trabajar con los datos de un archivo JSON
Transformar objeto a json sera util para
enviar informacion al servidor
*/