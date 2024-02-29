/*
const saludos = require('./saludos');
*/

/*
sintaxis alternativa de desestructuracion
para incluir elementos de un modulo
desestructura el objeto
*/

const { saludarHolaMundo, saludar } = require('./saludos');

/*
si miramos el contenido de saludos
podemos ver que es un objeto
console.log(saludos);
*/

/*
console.log(saludos.saludar('freeCodeCamp'));
console.log(saludos.saludarHolaMundo());
*/

/*
utiliza la sintaxis alternativa
escribe menos codigo
*/

console.log(saludar('freeCodeCamp'));
console.log(saludarHolaMundo());