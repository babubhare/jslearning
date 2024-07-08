var getData = function getData(param) {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(`promise execution progress; param: ${param}`);
            resolve(param + 1);
        }, 1000);
    });
    return promise;
};


getData(10).then(function (firstParam) {
    return getData(firstParam);
}).then(function (secondParam) {
    console.log(`promise execution completed; param: ${secondParam}`);
}
);