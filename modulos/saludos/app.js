/*
sintaxis tradicional
para importar un modulo
const saludos = require('./saludos');
*/

/*
si miramos el contenido de saludos
podemos ver que es un objeto
console.log(saludos);
*/

/*
esta es la sintaxis tradicional
esta forma de invocar una funcion es mas larga
ya que debes escribir el nombre del modulo
mas el nombre de la funcion
console.log(saludos.saludar('freeCodeCamp'));
console.log(saludos.saludarHolaMundo());
*/

/*
La sintaxis alternativa de desestructuracion
para incluir elementos de un modulo
desestructura el objeto
*/
const { saludarHolaMundo, saludar } = require('./saludos');

/*
utiliza la sintaxis alternativa
escribe menos codigo
ya no tenemos que usar el nombre del modulo
ahora solo usamos el nombre de la funcion
*/
console.log(saludar('freeCodeCamp'));
console.log(saludarHolaMundo());