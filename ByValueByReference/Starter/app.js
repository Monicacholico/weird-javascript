//by value (primitives)

var a = 3;
var b;

b = a; // same value with different spots in memory, one is a copy of the other
a = 2;


console.log(a);
console.log(b);


//by reference (all objectss (including functions))

var c = { greeting: 'hi'};
var d;

d = c;
c.greeting = 'hello'; // mutate

console.log(c);
console.log(d);

// by reference (eve as parameters)

function changeGreeting(obj) {
    obj.greeting = 'Hola'; // mutate
}

changeGreeting(d);
console.log(c);
console.log(d);

//equals operator sets up new memory space (new address)

c = {greeting: 'howdy'};

console.log(c);
console.log(d);