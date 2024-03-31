// tenemos dos procesos asincronos 
// para asegurar un orden de ejecución
// podemos encadenar los procesos
// si quieres producir un error cambia la la linea 10
// en vez de escribir taza puedes escribir lapiz

function ordenarProducto(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Ordenando: ${producto} de freeCodeCamp.`);
    setTimeout(() => {
      if (producto === 'taza') {
        resolve('Ordenando taza con el logo de freeCodeCamp...');
      } else {
        reject('Este producto no esta disponible actualmente.');
      }
    }, 2000);
  });
}

function procesarPedido(repuesta) {
  return new Promise(resolve => {
    console.log('Procesando respuesta...');
    console.log(`La respuesta fue: "${repuesta}"`);
    setTimeout(() => {
      resolve('Gracias por tu compra.');
    }, 4000);
  });
}

// Asi podemos encadenar procesos asincronos
// Primero se ejecuta el proceso asincrono ordenarProducto()
ordenarProducto('taza')
// Luego se ejecuta el proceso asincrono procesarPedido()  
  .then(respuesta => {
    console.log('Respuesta recibida');
    console.log(respuesta);
    // procesarPedido retorna una promesa
    return procesarPedido(respuesta);
  })
  // la Nueva promesa se procesa con .then()
    .then(respuestaProcesada => {
      console.log(respuestaProcesada);
    })
  // por ultimo interceptamos si ocurre un error
    .catch(error => {
      console.log(error);
    })