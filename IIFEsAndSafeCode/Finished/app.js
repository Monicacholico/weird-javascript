// IIFE
(function(global, name) {
    
    var greeting = 'Hello';
    global.greeting = 'global is Hello too!';
    console.log(greeting + ' ' + name);
    
}(window, 'John')); // IIFE

console.log(greeting);






















