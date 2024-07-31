function PromiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

console.log('Start');
promiseTimeOut(2000)
    .then(() => {
        console.log("Done!!");
        return promiseTimeOut(3000);
    })
    .then(() => {
        console.log("Also Done!!")
    })
    .catch(() => {
        console.log("Error!");
    })
    console.log('End');