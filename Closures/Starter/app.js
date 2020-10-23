function greet(whattosay) {

    return function(name) {
        console.log(whattosay + ' ' + name);
    }

}



greet('Hi')('Monica');
// var sayHi = greet('Hi');
// sayHi('Tony');


function add(num1) {
    return function(num2) {
        return num1 + num2;
    }
}

const result = add(2)(3);
console.log(result)



function spacify(str) {
    const striArra = Array.from(str);
    const stryspacified = striArra.map(c => c + ' ');
    return stryspacified.join('');
}

const result2 = spacify('hello world');
console.log(result2);

function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }
  var resultRange = range(0, 99); // [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  console.log(resultRange);


function makeArray(arr) {
    arr.length = Math.floor(Math.random() * (50  - 1) + 1); 
    const newArray = arr.map(() => Math.floor(Math.random() * 99));
    return newArray;
}
var anyArry = [ 4, 5, 6, 5,6,6,6,6,6];

const arrayResult = makeArray(resultRange);
console.log(arrayResult);




const randomArry = Array.from({length: Math.floor(Math.random() * (50  - 1) + 1)}, () => Math.floor(Math.random() * 99));
console.log(randomArry);