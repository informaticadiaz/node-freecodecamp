/*
Contiene funcionalidad para obtener
informacion sobre el sistema operativo
*/

const os = require('os');

console.log(os.type());

console.log(os.homedir());

console.log(os.uptime());

console.log(os.userInfo());