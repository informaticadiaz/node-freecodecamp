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

const manejarPedido = (mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
}

const rechazarPedido = (mensajeDeError) => {
    console.log(mensajeDeError);
}

miPedidoDePizza.then(manejarPedido, rechazarPedido);