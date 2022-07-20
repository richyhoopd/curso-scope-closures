// block scope

// un bloque es cualquier casi cosa dentro de {} 

function fruits() {
    if (true) {
        // aqui adentro es un bloque de validacion
        var fruit1 = 'apple'; // function scope
        let fruit2 = 'kiwi'; // block scope
        const fruit3 = 'banana'; // block scope
        console.log(fruit2);
    console.log(fruit3);
    }
    console.log(fruit1);

}

fruits();