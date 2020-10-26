

Array.prototype.myCustomfunction = 'cool';

var arr = ['John', 'Paul', 'Ringo', 'George'];

for(var prop in arr) {
    console.log(prop + ': ' + arr[prop]);
}

