greet();

function greet() { //function statement
    console.log('hi');
}
// anonuymousGreet();

var anonuymousGreet = function() { //function expresion
    console.log('hello');
} 

anonuymousGreet();

function log(a){ //function expresion that you can pass functions
//    console.log(a);
    a();
}

// log(3);
// log('Hello');
// log({ greeting: 'hi'});
log(function(){
    console.log('hi!');
});

