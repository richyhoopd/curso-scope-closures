// variables 

var a; //declarando
var b = 'b'; //asignando y declarando simultaneamiente
b = 'bb' // reasignacion 
var a = 'aa'; // redeclaracion 

// variables globales se instancian dentro del objeto window

// global scope

var fruit = 'apple'; // global

function bestFruite () {
    console.log(fruit);
}

bestFruite();

function countries() {
    country = 'colombia'; // asignamos una variable sin declararla
    console.log(country)
}

countries();
console.log(country)