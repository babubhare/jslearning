function foo()
{
    var bar = 1;
    console.log(bar++);

    // setTimeout(function (){
    //     console.log(bar++)
    // }, 100)

    function inside()
    {
        console.log(bar++);
    }
    return inside;
}

var functiontest = foo();
functiontest();
functiontest();
var functiontest1 = foo();
functiontest1();