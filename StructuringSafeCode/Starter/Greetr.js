(function( global, $){

    // 'new' an object
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    // hidden within the scope of the IFEE  and never directly accessible
    var supportedLangs = ['en', 'es'];

    // informal greetings
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    }

    // formal greetings
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    }

    //logger messages
    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    }

    //prototype holds methods (to save memory space)
    Greetr.prototype = {

        //'this' refers to the calling object at execution time
        fullname: function() {
            return this.firsName + ' ' + this.lastName;
        },

        validate: function() {
            // check that is a valid language
            //references the externally inacessibl 'supportedLangs' within the closure

           if (supportedLangs.indexOf(this.language) === -1){
               throw 'Invalid language';
           }
        },

        //retrieve messages from object by referring to properties using [] syntax
        greeting: function() {
            return greetings[this.language] + ' ' + this.firsName + '!';
        },
        formalGreeting: function() {
            return formalGreetings[this.language] + ' ' + this.fullname();
        },
        
        // chainable methods return their own containing object
        greet: function(formal) {
            var msg;
            //if undefined or null it will be coerced to 'false';
            if(formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting()
            }

            if(console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },
        log: function() {
            if(console){
                console.log(logMessages[this.language] + ': ' + this.fullname());
            }

            //make chainable
            return this;
        },
        setLang: function(lang) {
            this.language = lang;
            this.validate();
            return this;
        },

        display: function(ele, formal) {
            if(!jQuery) {
                throw 'jQuery not loaded';
            }
            if(!ele) {
                throw "Missing jQuery selector";
            }
            // determine the message
            var msg;
            if(formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }
            // inject the message in the chosen place in the DOM
            $(ele).text(msg);
            
            // make chainable
            return this;
        }
    };

    // the actual object is created here, allwoing us to 'new' an object without calling 'new'
    Greetr.init = function(firstName, lastName, language) {

        var self = this;
        self.firsName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

        self.validate();

    }

    // trick borrowed from jQuery so we don't have to use the 'new' keyword;
    Greetr.init.prototype = Greetr.prototype;


    //atach our Greetr to the global object, and proved a shorthand '$G' for ease our poor fingers
    global.Greetr = global.G$ = Greetr;



})(window, jQuery);


