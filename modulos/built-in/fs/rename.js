/*
    utilizamos rename para cambiar el nombre de un archivo
    
*/
const fs = require('fs');

fs.rename('index.html', 'main.html', (err) => {
    if (err) {
        throw err;
    }
    console.log('Nombre cambiado exitosamente.');
});