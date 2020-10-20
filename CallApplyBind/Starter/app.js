var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}

var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
}.bind(person);


var logPersonName = logName.bind(person);

logName();

var logName = function(lang1, lang2) {

    // console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('----------------');
}


var logPersonName = logName.bind(person);

logPersonName('en', 'es');

logName.call(person, 'en', 'es');
logName.apply(person, ['en','es']);


(function(lang1, lang2){
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('----------------');
}).apply(person, ['es', 'en']);


// function borrowing

var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}

var result2 = person.getFullName.apply(person2);
console.log(result2);

var person2logName = logName.apply(person2, ['fr', 'dutch']);


// function currying

function multiply(a, b) {

    return a*b;
}

// function multipleByTwo( b) { // this is what multiply.bind is doing in the multipleByTwo, setting up my first parameter to 2
//     var a = 2;
//     return a*b;
// }

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(4))



// CURRYING - creating a copy of a function but with some preset parameters