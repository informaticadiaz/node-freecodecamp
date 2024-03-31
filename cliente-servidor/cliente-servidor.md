# Modelo Cliente Servidor

Modelo que usamos para acceder a internet
y obtener recursos e información.

## Cliente

Un cliente, puede ser un navegador desde el cual
se realizan solicitudes a un servidor.
Por ejemplo podemos enviar una solicitud
a un servidor para que nos muestre un video.

## Servidor

Programa que se ejecuta en un servidor físico
para ofrecer un servicio al cliente.
Envía informacion. Servidor se utiliza para definir
la computadora donde se aloja el programa.
Pero un servidor tambien es el programa.

## Protocolo de comunicacion

Un protocolo define un conjunto de reglas que
permiten transmitir información entre
dispositivos de una red.
Para que el servidor y el cliente se comunican tiene
que haber una comunicacion con un formato especifico.
El servidor conoce el formato esperado del
mensaje que envía el cliente.
El cliente conoce el formato esperado
del mensaje que recibe del servidor.

## Protocolo HTTP

El protocolo HTTP define el formato de los mensajes.
HTTP protocolo de transferencia de hipértexto.

### Solicitudes HTTP

Cuando un cliente le pide informacion a un servidor
o desencadena un evento en el servidor para realizar
un proceso esta realizando un request (solicitud)

Solicitud HTTP (Request):
Una solicitud HTTP tiene los siguientes elementos.

- Métodos HTTP.
- Camino (path)
- Versión de HTTP
- Cabeceras (headers)
- Cuerpo (body)

tipos de metodos HTTP, un metodo es un verbo o sustantivo que indica
la intención de la solicitud. Por lo general se los denomina verbos HTTP.
Que es lo que quiere el cliente, quiere un recurso, quiere agregar, editar
o eliminar un recurso, cual es su intencion. Dentro de los metodos mas
comunes encontramos GET, POST, PUT, DELETE, entre otros.
**GET** es un verbo para solicitar un recurso específico.
Por ejemplo, un archivo HTML, CSS o una imagen.
**POST** es un verbo para crear un recurso específico.
Por ejemplo, agregar un usuario nuevo a una base de datos.
**PUT** es un verbo para modificar un recurso específico.
Por ejemplo, hacer un cambio en la base de datos.
**DELETE** es un verbo para eliminar un recurso específico.
Por ejemplo, eliminar un usario de una base de datos.

### Respuestas HTTP

Cuando un cliente envia una solicitud, el servidor la procesa y envia
una response (respuesta), la respuesta tiene una estructura especifica.

Respuesta HTTP:

- Código de estado
- Texto de estado
- Versión de HTTP
- Cabeceras (headers)
- Cuerpo (body)

### Codigos de estados HTTP

Los codigos de estado se utilizan para saber que paso en el servidor.
Un codigo de estado es un numero que indican que es lo que paso con
la solicitud HTTP.
Los codigos se dividen de la siguiente manera:

- Respuesta informativas (100-199).
- Respuestas satisfactorias (200-299).
- Redirecciones (300-399).
- Errores de los clientes (400-499).
- Errores de los servidores (500-599).

Con Node.js y express podemos especificar el código de estado de la respuesta HTTP en nuestro servidor.
Las respuestas mas comunes son:

- 200 (OK) La respuesta fue exitosa.
- 400 (Bad Request) El servidor no pudo interpretar la solicitud.
- 404 (Not Found) El servidor no pudo encontrar el recurso solicitado.
- 500 (Internal Server Error) El servidor encontró una situación que no sabe cómo manejar.
