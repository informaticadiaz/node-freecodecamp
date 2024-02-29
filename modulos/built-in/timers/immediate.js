/*
setImmediate() 
se usa para ejecutar código asíncrono
en la próxima iteración del ciclo de eventos
Se ejecuta después del código síncrono
setImmediate(funcion, argumento1, argumento2, ...);
*/

function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
}

console.log('Antes de setImmediate');

setImmediate(mostrarTema, 'Node.js');

console.log('Despues de setImmediate');