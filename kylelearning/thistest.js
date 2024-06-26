///use strict

function foo(bar)
{
    console.log(this.bar);
}

var bar = 'bar';

var o2 = {bar: 'bar02', foo: foo};
var o3 = {bar: 'bar03', foo: foo};

foo();
o2.foo();
o3.foo();
