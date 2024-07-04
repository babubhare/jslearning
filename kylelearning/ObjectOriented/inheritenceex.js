var Live = function Live()
{
    var closureTest = 'closure';
    this.type = 'Live';
    this.getType = function getType() {return this.type};
    this.getClosure = function getType() {return closureTest};
}

var person1 = new Live();
var person2 = new Live();

console.log('testing');

