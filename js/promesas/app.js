// simulamos el resultado de una promesa
const promesaCumplida = false;

// creamos una promesa
// la promesa tiene dos argumentos
// resolve y reject
// resolve es una funcion que se ejecuta
// cuando la promesa se cumple
// reject es una funcion que se ejecuta
// cuando la promesa no se cumple
const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (promesaCumplida) {
            resolve('¡Promesa cumpliada!');
        } else {
            reject('Promesa rechazada...');
        }
    }, 3000)
});
// valor es el valor que pasamos como argumento a resolve
// osea ¡Promesa Cumplida!
// con then manejamos el resultado de la promesa
// tenemos que manejar el rechazo de la promesa
// creamos dos manejadores

const manejarPromesaCumplida = (valor) => {
    console.log(valor);
}

const manejarPromesaRechazada = (razonReachazo) => {
    console.log(razonReachazo);
}

miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);