function promiseTimeOut(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function longRunningOpeeration() {
    return 42;
}

async function run() {
    console.log("Start!!");
    await promiseTimeOut(2000);
    const response = await longRunningOpeeration();
    console.log(response);

    console.log("stop!!");
}

console.log('Before run');
run();
console.log('After run');