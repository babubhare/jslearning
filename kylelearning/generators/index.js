class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}



var testfunc = function testfunc() {

  this.propertya = "propertya";

  return {
    returnFunction: function () {
      return "return test function";
    }
  };
};

function testfunc1() {

  this.returnFunction = function returnFunction() {
    return "return test function1";
  };

}

var a = new testfunc();
var b = new testfunc1();
var obj = {};
var car1 = new Car("tesla", 2024);
var car2 = new Car("skoda", 2000);

