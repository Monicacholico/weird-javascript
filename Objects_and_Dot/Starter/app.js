// var person = new Object();

// person["firstName"] = "Tony";
// person["lastName"] = "Alicea";

// var firstNameProperty = "firstName";

// console.log(person);
// console.log(person[firstNameProperty]);

// console.log(person.firstName);
// console.log(person.lastName);

// person.address = new Object();
// person.address.street = "111 Main St";
// person.address.city = "New York";
// person.address.state = "NY";

// console.log(person.address.street);
// console.log(person.address.city);
// console.log(person["address"]["state"]);

var Defaults = {
    firstName: 'No name',
    lastName: 'no last name',
    address: {
        street: 'no street found',
        city: 'no city found',
        state: 'no state found'
    }
}

var Tony = {
    firstName: 'Tony',
    lastName: 'Alicea',
    address: {
        street: '111 Main St',
        city: 'New York',
        state: 'NY'
    }
};

function greet(person) {
   person.firstName = person.firstName || Defaults.firstName;
    console.log('Hi! I am ' + person.firstName + " " + person.lastName + ' and my address is ' + person.address.street + ' ' + person.address.city);
}

greet(Tony);

greet({
    lastName: 'L Cholico',
    address: 'I dont have an address'
})

