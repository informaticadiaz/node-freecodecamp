# Routing

Manejar las solicitudes del cliente en base a
Dos criterios principales: el método (HTTP) y el path.
El método de la solicitud HTTP, el método es un verbo que define
que tipo de operación que se realizará. De esta forma el servidor
sabe qué tipo de operación se realizará.
El path (camino) de la solicitud HTTP. De esta forma el servidor
sabe el recurso específico que se usar, crear, modificar o eliminar.
Una ruta se puede definir como una combinacion de:
Método de la solicitud + Path + Cómo Manejarlo.
que va hacer, donde lo va hacer, como lo va hacer.

Por ejemplo si el cliente envia una petición HTTP
con el método POST y el path /personas, el servidor
debe crear una nueva persona en la base de datos.
