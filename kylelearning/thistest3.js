function foo1()
{
    console.log(this);
}

function foo2()
{
    foo1();
}

function foo3()
{
    foo2();
}

foo3();