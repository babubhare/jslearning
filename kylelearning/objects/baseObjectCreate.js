var v = {
    type: 'car',
    name: 'car1'
};

var v1 = Object.create(v);

var v2 = Object.create(v);

console.log('test');

var funcExp = function funcExp()
{
    this.name = 'Name';
    this.getName = function getName() {
        return this.name;
    }
};


var f1 = new funcExp();
var f2 = new funcExp();


var f3 = Object.create(f1);

console.log('test');