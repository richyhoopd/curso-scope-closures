// closures

// un closure permite acceder al ambito de una funcion exterior desde una
// funcion interior

// se puede decir que tenemos un closure cuando una funcion cualquiera accede a una variable
// fuera de su contexto.

// ambito lexico 

const myGlobal = 0;

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);

    // al definir una funcion dentro de otra funcion ya tenemos un closure

    function parent () { // function interna // ya tenemos un closure
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child () {
            console.log(inner, myNumber, myGlobal);
        }

        return child();
    }

    return parent();
}

myFunction();