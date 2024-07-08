var getData = function getData()
{
    var promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('promise execution progress');
            resolve();
        }, 1000);
    });
    return promise;
};

getData().then(
    function() {
        console.log('Promise Executed');
    }
);

console.log('finished main routine');



