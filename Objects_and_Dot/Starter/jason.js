var objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
}

console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse(
    '{ "firstName": "Mary", "isAProgrammer": true}'
);

console.log(jsonValue);



const lis = document.getElementsByClassName('myClass');
const arrayLis = Array.from(lis);
// console.log('first lis')
// console.log(lis);

const theLis = document.querySelectorAll('li');
const arrayOfLis = Array.prototype.slice.call(theLis);
// console.log(arrayOfLis);


function crateLis() {
    console.log(arrayLis);
    console.log(arrayOfLis)
   const newLi = document.createElement('li');
   newLi.classList.add('myClass');
   const ul = document.querySelector('ul');
   ul.appendChild(newLi);
   console.log(arrayLis);
   console.log(arrayOfLis);

}

const btn = document.querySelector('button');
btn.addEventListener('click', crateLis);

