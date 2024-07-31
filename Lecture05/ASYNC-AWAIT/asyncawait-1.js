function promiseTimeOut(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function run() {
    console.log("strat!!");
    await promiseTimeOut(2000);
    console.log("Stop!!");
}

console.log('Before run');
run();
console.log('After run');