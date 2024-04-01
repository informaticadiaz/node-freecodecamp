const miURL = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');

// Obtenemos el hostname
console.log(miURL.hostname);
// Obtenemos el pathname
console.log(miURL.pathname);
// Obtenemos los parametros query
console.log(miURL.searchParams);
// Comporbamos que es un objeto
console.log(typeof miURL.searchParams);
// Accedemos a sus valores
console.log(miURL.searchParams.get('ordenar'));
console.log(miURL.searchParams.get('nivel'));