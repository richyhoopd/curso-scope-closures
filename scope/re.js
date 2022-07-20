// es6 es donde se introdujo let y const 

var firstName; // declarando, por defecto se le asigna un valor undefined
firstName = 'Ricardo'; // asignando
console.log(firstName);

var lastName = 'David'; // declarando y asignando 
lastName = 'Ana'; // reasignando
console.log(lastName);

var secondName = 'david'; // declarando / asignando
var secondName = 'Ana'; // declarando y reasignando 
console.log(secondName);

// let
 
let fruit = 'apple'; // declarar y asignar 
fruit = 'kiwi'; // reasignar si es posible con let
console.log(fruit);
let fruit = 'banana'; // no se puede re declarar una variable dentro del block scope

// let nos permite re asignar, pero no re declarar una variable dentro del bloque

// const
 
const animal = 'perrito'; //declarada la constante
animal = 'cat'; // no se puede reasignar con const, porque es una variable
console.log(animal)

const vehiculos = [];
vehiculos.push("perro");
console.log(vehiculos);

vehiculos.pop();
console.log(vehiculos)