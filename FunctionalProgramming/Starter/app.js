function mapForEach(arr, fn) {

    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    }
    return newArr;
}


var arr1 = [1,2,3];

console.log(arr1);


var arr2 = [];

for(var i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2);
}

console.log(arr2);


///////////////////////////////////////////////////////////////////


function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }
  var resultRange = range(0, 99); // [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  console.log(resultRange);
      
      
function makingArrays(arr) {
    arr = resultRange;
    var arrayLength = Math.floor(Math.random() * (50  - 1) + 1);
    for(var i = 0; i < arrayLength; i++){
        resultRange[i] ;
        resultRange.push(i);

    }
    return resultRange;

}

const result = makingArrays();
console.log(result);



function makeRandomArray(arr) {
    var arrayLength = Math.floor(Math.random() * (50  - 1) + 1);
    arr.length = arrayLength;
    for(var i = 0; i < arrayLength; i++) {
        resultRange[i];
        resultRange.push(i);
    }
    return resultRange;
}

const arrResult = makeRandomArray(arr2);
console.log(arrResult);


