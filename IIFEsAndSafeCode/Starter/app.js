// function statement
function greet(name) {    
    console.log('hello ' + name);
}

greet( 'John');

// function expression
var greetFunction = function(name) {
    console.log('Hello ' + name);
}

greetFunction('John');


// Using an Immediately Invoked Function Expression (IIFE)
var greeting = function(name) {

    return ' HOla ' + name;

}('Monica');

console.log(greeting);

var firstname = 'John';

(function(name) {
    var greeting = 'Helloa';
    console.log(greeting + " " + name)
    // return 'Hello' + name;
})('Peanuts');


(function(name) {
    var greeting = 'Hola';
    console.log(greeting + ' ' + name);
}('Jaime'));















