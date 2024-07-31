function who() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("♫♀");
        }, 10);
    });
}

function what() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("lurks");
        }, 100);
    });
}

function where() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("in the shadows");
        }, 1000);
    });
}

async function msg() {
    const a = await who();
    const b = await what();
    const c = await where();

    console.log(`${a} ${b} ${c}`);
}
console.log('We are looking for:')
msg();
console.log('Hello')