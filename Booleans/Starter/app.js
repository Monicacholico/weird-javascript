var a;

//goes to internet and looks for a value

a = 0;

if (a || true) {
    console.log('Somethin is there');
}

function greet(name) {
     name = document.querySelector('input').value;
    if(!name) {
        console.log('Hello you need to enter a name');
        return;
    }
    console.log( 'Hello ' + name);
}

const button = document.querySelector('button');
button.addEventListener('click', greet);

function theGreet(name) {
    name = name || 'You need to pass your name';
    console.log( 'Hello agaiiin!!! whats up ' + name);
}

theGreet('Peanuts');


// ES6

function greeting(name = 'Juan') {
    console.log('Helloooo ' + name);
}

greeting();