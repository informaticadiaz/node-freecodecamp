/*
Módulo fs
fs es referencia a file system
Este módulo contiene funcionalidad muy útil
para trabajar con el sistema de archivos
Operaciones útiles que 
podemos realizar con este modulo
Leer, modificar, copiar, eliminar 
y cambiar el nombre de los archivos 
y de las carpetas.
Todos los metodos de este módulo 
son asíncronos por defecto
Pero puedes escoger versiones
síncronas de estos métodos agregando
Sync a sus nombres
Ej:
Async rename
fs.rename()
Sync rename
fs.renameSync()
*/

/* Ejercicio Practico
primero incluimos el modulo fs con require
invocamos el metodo de fs readFile
pasamos como argumento el archivo
que queremos leer
y como segundo argumento
el encoding que queremos usar
en este caso usaremos utf-8
y como tercer argumento
la funcion callback
que recibe como argumento
el error y el contenido del archivo
aplicamos if else para verificar
si hay error o no
y si hay error imprimimos el error
si no hay error 
imprimimos el contenido del archivo
*/


const fs = require('fs');

// Ejercicio Practico mostrando el contenido del archivo index.html
fs.readFile('index.html', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// Ejercicio Practico capturando un error de lectura de un archivo que no existe
// en este no se detiene la ejecución del programa
fs.readFile('inde.html', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// sintaxis alternativa
fs.readFile('index.html', 'utf-8', (err, data) => {
  if (err) {
    throw err;
  } 
  console.log(data);
});

// Ejercicio Practico capturando un error de lectura de un archivo que no existe con throw
// throw muestra el mensaje de error y detiene la ejecución del programa
fs.readFile('inde.html', 'utf-8', (err, data) => {
  if (err) {
    throw err;
  } else {
    console.log(data);
  }
});

