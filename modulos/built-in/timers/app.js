/*
Funciones útiles
setTimeout()
setImmediate()
setInterval()
*/

/*
setTimeout() es un funcion para ejecutar
código luego de un número específico de
milisegundos
setTimeout(funcion, retraso, argumento1, argumento2, ...);
*/
function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
}
/*
el primer argumento es la funcion a ejecutar
pasar una funcion como argumento a otra funcion
se llama higher-order programming
*/
setTimeout(mostrarTema, 2000, 'Node.js');

function sumar(a, b) {
    console.log(a + b);
}

setTimeout(sumar, 2000, 5, 10);
