function resolveAfter2Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // Expected output: "resolved"
}

resolveAfter2Seconds().then((message) => {
    console.log(message);
});

var resolve = resolveAfter2Seconds();




console.log('completed');