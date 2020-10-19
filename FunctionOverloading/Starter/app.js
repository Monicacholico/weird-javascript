function greet(firstname, lastname, language = 'english') {
    
    if(language === 'english') {
        console.log('Hello ' + firstname + lastname);
    }

    if(language === 'espanol') {
        console.log('Hola ' + firstname + lastname );
    }

}

function greetEnglish(firstname, lastname) {
    greet(firstname, lastname, 'english');
}
function greetSpanish(firstname, lastname) {
    greet(firstname, lastname, 'espanol');
}



// greet('John', 'Doe');
// greet('John', 'Doe', 'espanol');
greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');