// EventEmitter es una clase,
// por esta razon comienza con mayuscula
// ya que es una convencion

const EventEmitter = require('events');

// console.log(EventEmitter);

// Trabajar con el modulo Event
// creamos un emisor de eventos
const emisorProductos = new EventEmitter();
// Usamos el metodo on
// on recibe dos argumentos
// el primer argumento es el evento
// el segundo argumento es una funcion
// que se ejecutara cuando se reciba el evento
// en este caso una compra
// la funcion recibe dos argumento
// A las funciones que manejan eventos
// se les denomina Event Handlers
// son funciones que estan asociadas al evento
// y se ejecutan cuando ocurre el evento
emisorProductos.on('compra', (total, numProductos) => {
    console.log(`Total de la compra $${total}`);
    console.log(`Numero de productos: ${numProductos}`);
});

// Emite el evento, emitimos el evento compra
// y le pasamos los argumentos
emisorProductos.emit('compra', 500, 5);

