# Estructura de una URL

Una URL es una dirección de un recurso en la web

URL significa Uniform Resource Locator

Analizamos una URL

https://www.freecodecamp.org/espanol

## Protocolo

Protocolo es la parte antes del nombre de la URL
Ejemplo:

https:

## Subdominio

www. Esto representa un subdominio.

Un subdominio es información adicional agregada al
inicio del dominio de una página web. El subdominio
permite a los sitios web organizar y separar la
información para distintos propósitos.

## Dominio

freecodecamp el dominio es una referencia única a un
sitio web en internet.

## Dominio de nivel superior 

.org es un dominio de nivel superior.
en ingles se denomina TLD Top Level Domain.

## Path

/espanol es el path de la URL.
El path representa al archivo o directorio
em el servidor web.
Puede tener parámetros para personalizarlo.
Estos parámetros son parte de la URL.
Hay dos tipos de parámetros los parámetros de ruta
y los parámetros query (de consulta o de busqueda).

## Parámetros de query

Los parámetros query son parámetros usados para
obtener contenido dinámico. Por ejemplo,
filtrar una lista de recursos.
Los parametros query se separan de la parte
principal de la url por un simbolo de interrogación (?).

Ejemplo:

?q=cursos+de+node

pares clave valor separados por un simbolo de igual (=)

?categoria=programacion

el parametro es categoria el valor es programacion

podemos utilizar los parametros query para filtrar
una lista de recursos.

Podemos tener varios parametro query.
Los tendriamos que unir con un simbolo de &.
Ejemplo:
?clave=valor&clave2=valor2&clave3=valor3

Normalmente usamos parámetros query para filtrar
solicitudes GET (para obtener recursos específicos)

En node existe un modulo para trabajar con URL
