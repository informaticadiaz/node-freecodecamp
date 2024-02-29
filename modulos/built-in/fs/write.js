// remplazar todo el contenido del archivo

const fs = require('fs');

fs.writeFile('index.html', 'Contenido nuevo.', (err) => {
    if (err) {
        throw err;
    }
    console.log('Contenido Remplazado de forma existosa.')
})