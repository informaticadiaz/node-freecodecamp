// sintaxis alternativa
const estatusPedido = () => {
    return Math.random() < 0.8;
};

const miPedidoDePizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (estatusPedido()) {
            resolve('¡Tu pedido fue aceptado!');
        } else {
            reject('Tu pedido fue rechazado...');
        }
    }, 3000);
});
// method chaining
// el encadenamiento de metodos
// se hace de la siguiente manera
miPedidoDePizza
    .then((mensajeDeConfirmacion) => {
        console.log(mensajeDeConfirmacion);
    })
    .catch((mensajeDeError) => {
        console.log(mensajeDeError);
    });
