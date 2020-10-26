var people = [
    {
        firstname: 'John',
        lastname: 'Doe',
        addresses: [
            '111 Main St',
            '222 Third St',
        ]
    },
    {
        firstname: 'Jane',
        lastname: 'Doe',
        address: [
            '333 Main St',
            '444 Fifth St'
        ],
        greet: function() {
            return 'Hello';
        }
    }
]


var a = 3;
console.log(typeof a);

var b = 'Hello';
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d);
console.log(Object.prototype.toString.call(d)); // better


function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log(typeof e);
console.log(e instanceof Person);

console.log(typeof undefined);
console.log(typeof null);

var z = function() {};
console.log(typeof z);

