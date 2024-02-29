/*
setImmediate() 
se usa para ejecutar código asíncrono
en la próxima iteración del ciclo de eventos
Se ejecuta después del código síncrono
setImmediate(funcion, argumento1, argumento2, ...);
*/

/*
Ejercicio Practico
setImmediate() logra que la funcion tenga 
la maxima prioridad entre todos los eventos pendientes
osea la maxima prioridad de el codigo asíncrono
si ejecutas node setImmediate.js
veras lo siguiente en consola
Antes de setImmediate
Despues de setImmediate
Estoy aprendiendo Node.js
Esto se debe a que primero se ejecuta 
el codigo sincrono
y despues el codigo asincrono
*/

function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
}

console.log('Antes de setImmediate');

setImmediate(mostrarTema, 'Node.js');

console.log('Despues de setImmediate');