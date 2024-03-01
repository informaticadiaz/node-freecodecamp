/*
setInterval() 
Se utiliza para ejectar código un número
infinito de veces con un intervalo específico
de milisegundos
sintaxis
todos los argumentos que recibe 
nos permiten personalizar la funcion
setInterval(funcion, intervalo, arg1, arg2);
*/

// Ejercicio Practico

function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
}

setInterval(mostrarTema, 1500, 'Node.js');

function sumar(a, b) {
    console.log(a + b);
}

setInterval(sumar, 1500, 10, 20);
