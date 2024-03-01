# package-lock.json

Este archivo se genera automáticamente cuando
npm modifica el árbol de node_modules
o package.json. Nos va a permitir mantener
un registro del arbol de dependencias que
necesita nuestro paquete.
El archivo describe el árbol generado
para que futuras instalaciones puedan generar
exactamente el mismo árbol.
Asi otros desarrolladores pueden instalar
exactamente las mismas dependencias.
package-lock.json es una version mas detallada
de package.json.

## Propiedad del archivo package-lock.json

### name

name es el nombre del paquete. Es el mismo nombre
que incluimos en package.json.

### version

version es la versión del paquete. Es la misma
versión que incluimos en package.json.

### lockfileVersion

La versión del archivo package-lock.json.
cuantas veces se ha modificado el archivo package-lock.

### packages

packages es un objeto que asocia la ubicación de cada
paquete con un objeto que contiene información sobre ese paquete
entre la informacion que podemos encontrar estan su version,
su ubicacion, si es o no una dependencia de desarrollo, las
dependencias de ese paquete
