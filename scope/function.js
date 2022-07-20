// function scope

function greeting(){
    let user = 'ana'; // user es declarada y asignada dentro de la funcion
    console.log(user); // invocamos user
    
    if (user === 'ana') { // validacion 
        console.log(`hello ${user}!`); // user fue accedido dentro de un bloque (if) y dentro de la funcion
    } // user es una variable que puede ser usada por toda la funcion
}

greeting();
console.log(user) // si llamo a user aqui me dara un reference error, usuario no definido
