function dieToss() {
    return Math.floor(Math.random() * 6) + 1;
}
const promiseFunction1 = promiseFunction(fulfill1, reject1)



function* promiseFunction(fulfill, reject) {
    var n = dieToss();
    if (n === 6) {
        fulfill(n);
    } else {
        reject(n);
    }
    console.log('2');
};

var promise = new Promise(promiseFunction1);



var fulfill1 = function fulfill1() {
    console.log("FULL FILLED");
};

var reject1 = function reject1() {
    console.log("REJECTED");
};


promise.then();