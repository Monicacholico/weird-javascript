function greet(whattosay) {

    return function(name) {
        console.log(whattosay + ' ' + name);
    }

}



// greet('Hi')('Monica');
var sayHi = greet('Hi');
sayHi('Tony');