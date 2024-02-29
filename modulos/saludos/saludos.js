function saludar ( nombre ) {
    return `Hola ${ nombre }`;
}

function saludarHolaMundo () {
    return '¡Hola Mundo!';
}

/*
esta es una sintaxis alternativa para exportar el objeto module
module.exports.saludar = saludar;
module.exports.saludarHolaMundo = saludarHolaMundo;
*/

/*
module.export es un objeto
podemos exportar varios elementos
el objeto module puede tener muchas propiedades
*/

/*
existe otra sintaxis alternativa para exportar el objeto module
la cual es mas conveniente ya que escribimos menos codigo
*/
module.exports = {
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo
}
