var Foo = {
    init: function(who) {
        this.me = who;
    },
    identify: function() {
        return this.me;
    }
};


var Bar = Object.create(Foo);
Bar.newfunction = function()
{
    return this.me;
};

var f = Object.create(Foo);
var f1 = Object.create(Bar);

console.log('testing function with literal & dynamic scoping');


