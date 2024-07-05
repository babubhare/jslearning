function* generatorFunctionExpression() {

    console.log('Function Start');
    yield null;

    for (let count = 100; count < 110; count++) {
        console.log(`iterator count: ${count}`);
        yield null;
    }
}

var it = generatorFunctionExpression();
it.next();
it.next();
it.next();

