var functionTest = function functionTest(name)
{
    return function returnFunction()
    {
        console.log(name);
    }
};

var f1 = functionTest("1");
var f2 = functionTest("2");
var f3 = functionTest("3");
console.log('test');

