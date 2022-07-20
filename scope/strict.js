'use strict';
// modo estricto se incorporo en es5
// sirve para que el codigo cumpla con el amyor de los standards

// en este caso nunca declaramos la variable pi y aun asi funciono
pi = 3.1416; // aqui la definimos
console.log(pi);

// al comenzar a usar el modo estricto y ejecutar este mismo codigo
// arrojara un error, (pi no esta definido)

function myfuncion () {
    'use strict';
    return pi = 3.1416;
}

console.log(myfuncion());