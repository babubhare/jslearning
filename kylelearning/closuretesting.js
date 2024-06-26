var foo = (function() {

    var refVariable = Math.random();

    return {
        funcTest: function funcTest()
        {
            console.log(refVariable);
        }
    };
})();

foo.funcTest();

foo.funcTest();