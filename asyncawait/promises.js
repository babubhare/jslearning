function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var randomNumber = getRandomInt(2);

// Expected output: 0, 1 or 2

var resolve1 = function resolve()
{
    console.log('Zero');
};

var reject1 = function reject()
{
    console.log('One');
};


var promise = new Promise((resolve, reject) =>
{
    if(randomNumber == 0)
        resolve();
    else
        reject();
});
promise
    .then(resolve1)
    .catch(reject1);


console.log('testing');