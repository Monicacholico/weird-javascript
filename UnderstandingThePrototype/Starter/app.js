var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}


// don't do this EVER! for demo purposess only !!!!

john.__proto__ = person;
console.log(john.getFullName());
console.log(john.firstname);

for (var prop in john) {
    if(john.hasOwnProperty(prop)){
        console.log(prop + ': ' + john[prop]);
    }
}

var jane = {
    address: '111 Main St',
    getFormalFullName: function() {
        return this.lastname + ' ' + this.firstname
    }
}

var jim = {
    getFirstname: function() {
        return firstname;
    }
}

