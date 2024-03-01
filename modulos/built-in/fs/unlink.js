const fs = require('fs');

// unlink elimina archivos

fs.unlink('index.html', (err) => {
    if (err) {
        throw err;
    }
    console.log('Archivo eliminado.');
})