# Promesa

Objeto que representa el eventual resultado (o error) de una operación asíncrona.

Cuando estamos interactuando con una aplicacion web y hacemos una solicitud al servidor normalmente vamos a trabajar con promesas. Ya que no sabemos cuanto tiempo le va a tomar al servidor retornar esa respuesta.

Tambien el servidort puede usar promesas cuando realiza operaciones que no sabe cuanto tiempo va a tomar.

La promesa se crea y va a estar en estado pendiente (pending), el tiempo transcurre y la promesa llegara a alguno de los dos estados: cumplida o rechazada, en ingles, fulfilled rejected.

Una promesa es un objeto de JavaScript. Ese objeto se asocia a una callback function. Una funcion que se ejecuta cuando se completa el proceso aíncrono para procesar el resultado.

Callback function = Función callback, la traduccion seria algo asi con una funcion de respuesta, aunque no tiene una traduccion al español es una funcion que se va a ejecutar cuando se complete el proceso.
Formalmente se puede definir como una función que se pasa a otra función como argumento y luego se ejecuta dentro de la función externa.

Las promesas tienen un método .then() con el cual podemos decidir qué ocurre cuando se completa la promesa (éxito o error)