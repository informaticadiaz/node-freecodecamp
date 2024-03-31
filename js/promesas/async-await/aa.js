
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



// utilizamos async await
// async await nos permite ejecutar procesos asincronos
// de manera mas clara y concisa de la siguiente manera
// al declarar una funcion async realizarPedido()
// Podemos utilizar await para ordenar los procesos
// cada vez que usamos await estamos diciendo espera a que se resuelva esto.
// podriamos leer el codigo de esta manera:
// ejecuta esta funcion asincrona realizarPedido()
// luego espera a que ordenarProducto se ejecute.
// Luego espera a que procesarPedido se ejecute.
// primero se ejecuta el proceso asincrono ordenarProducto()
// Luego se ejecuta el proceso asincrono procesarPedido()
// por ultimo interceptamos si ocurre un error
// si quitamos await del codigo el codigo se ejecutara como si fuera sincrono
// y el resultado no sera el esperado.
// La ventaja de usar async await es que podemos 
// escribir codigo asincrono de forma similar a como si fuera sincrono
// ademas es mas legible que utilizando .then para encadenar procesos.
// Por ultimo cabe aclarar que las funciones asincronas retornan promesas.



async function realizarPedido(producto) {
  try {
    const respuesta = await ordenarProducto(producto);
    console.log('Respuesta recibida');
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
  } catch (error) {
    console.log(error);
  }
}

realizarPedido('taza');