// // como name of dog no fue declarado arriba el valor sera undefined
// console.log(nameDog);
// var nameDog = 'eLMO'; // Si la asignacion se hace despues del llamaddo dara problemas de hoisting

// // el return es undefined 


nameOfDog();

function nameOfDog () {
    console.log(`1el mejor perrito es ${elmo}`)
}

var elmo = 'Elmito'; // elmo es undefined porque automaticamente ses declara arriba pero sin valor

// elmo es llamado dentro de la funcion, pero lleg sin definir

nameOfDog("Elmo"); function nameOfDog(name) { console.log(name); };