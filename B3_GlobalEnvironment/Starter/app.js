(function(){
    function b() {
        console.log('Called b!')
    }
    b();
    
    var a = 'Hello World';
    
    console.log(a);

})();

function b() {
    var myVar;
    console.log(myVar);
}

function a() {
    var myVar = 2;
    console.log(myVar);
    b();
}

var myVar = 1;
console.log(myVar);
a();
