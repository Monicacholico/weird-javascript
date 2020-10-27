// gets a new object

var g = G$('john', 'doe');
console.log(g);

// use our object on the click of the logi button
g.greet().setLang('es').greet(true).log();



// let's use our object on the click of the login button
$('#login').click(function() {

    // create a new 'Greeter' object (let's pretend we know the name from the login)
    var loginGrtr = G$('john', 'doe');


    // hide the login on the screen
    $('#logindiv').hide();


    // fire off an HTML greeting, passing the '#greeting' as the selector and the chose language, and log the welcome as well
    loginGrtr.setLang($('#lang').val()).display('#greeting', true).log();

})