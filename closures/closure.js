// practicando closures
// las closures proporcionan acceso al ambito lexico

function greeting () {
    let username = 'ricardo';

    function display() {
        return `hola ${username}`;
    }

    return display;
}

const g = greeting();
console.log(g);
console.log(g());