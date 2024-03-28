# Evento

El evento es una acción que se realiza
en la aplicación, con la interaccion
del usuario. Por ejemplo pedir
informacion a una base de datos,
agregar informacion a una base de datos.
También podemos definir eventos que se
desencadenen y ejecuten internamente
en el servidor.

## asincrono

cuando una aplicacion se esta ejecutando
si ocurre un evento asíncorno ese evento
se ejecuta en paralelo con la ejecucion de
la aplicacion sin bloquearla.

## síncorno

un evento sincrono bloquea la ejecucion de
la apliacion, hasta que no se complete todo
el proceso que desencadeno ese evento
no podemos continuar

## Emitters (emisores)

En node tenemos un concepto importante llmado
Emitters(emisores), los Emitters son objetos
que emiten eventos nombrados y llaman a funciones
específicas cuando ocurren. Los emisores
son instancias de la clase EventEmitter.
Las clases nos permiten crear

En Node.js, los Emisores de Eventos (Event Emitters) son una parte fundamental de la arquitectura de eventos asíncronos. Te proporcionan una forma de emitir y escuchar eventos en tu aplicación. Aquí hay una explicación de cada uno de los conceptos que mencionaste:

1. **Emisores de Eventos (Event Emitters):**
   - Los Emisores de Eventos son objetos que pueden emitir eventos nombrados que provocan la ejecución de funciones (callbacks) asociadas con esos eventos.
   - En Node.js, el módulo `events` proporciona la clase `EventEmitter`, que es la base para crear tus propios objetos emisores de eventos.

2. **Clases (Classes):**
   - Las clases en JavaScript son un mecanismo para definir objetos y su comportamiento.
   - En el contexto de Node.js, puedes crear tus propias clases para representar distintos tipos de objetos en tu aplicación, como por ejemplo, un servidor HTTP, un cliente de base de datos, etc.
   - Para utilizar clases en Node.js, puedes definirlas usando la sintaxis de clase introducida en ECMAScript 2015 (ES6) o usando el estilo de prototipos heredados de JavaScript.

3. **Instancias (Instances):**
   - Una instancia es un objeto que se crea a partir de una clase. Cada instancia tiene su propio conjunto único de propiedades y métodos, pero comparte el comportamiento definido en la clase de la que se deriva.
   - Por ejemplo, si tienes una clase `Persona`, puedes crear instancias individuales de esa clase representando diferentes personas, cada una con sus propias propiedades como nombre, edad, etc.
   - En el contexto de Emisores de Eventos, las instancias de la clase `EventEmitter` son los objetos que pueden emitir y escuchar eventos.

Cómo se relacionan:
- En Node.js, puedes crear una clase que extienda `EventEmitter` para crear tu propio emisor de eventos personalizado. Luego, puedes crear instancias de esta clase para trabajar con eventos específicos en tu aplicación.
- Por ejemplo, podrías tener una clase `Logger` que extiende `EventEmitter`, donde cada instancia de `Logger` representa un logger específico en tu aplicación. Puedes emitir eventos dentro del logger para indicar diferentes acciones, como la creación de un registro, la ocurrencia de un error, etc. Las otras partes de tu aplicación pueden escuchar estos eventos y responder en consecuencia.
- En resumen, las clases te permiten definir la estructura y el comportamiento de tus objetos, mientras que las instancias son los objetos específicos creados a partir de esas clases. Los emisores de eventos pueden ser clases que extienden `EventEmitter`, y las instancias de estas clases pueden emitir y escuchar eventos en tu aplicación.