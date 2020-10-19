console.log(this);

function a() {
    console.log(this);
}

a();

var b = function () {
    console.log(this);
}

b();

var c = {
    name: 'The c object',
    log: function() {
        var self = this;

         
        self.name = 'Updated c object';
        console.log(self);

        var setname = function(newname) {
            self.name = newname;
        }
        setname('updated again the c object');
        console.log(self);
    }
}

c.log();