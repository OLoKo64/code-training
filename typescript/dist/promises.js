"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// Promises are a way to handle asynchronous code.
function promises() {
    return new Promise((resolve) => {
        const n1 = 6;
        const n2 = 4;
        if (n1 > n2) {
            setTimeout(() => {
                resolve(n1 + n2);
            }, 1000);
        }
        else {
            throw new Error('Error');
        }
    });
}
// Async/Await
async function asyncAwait() {
    try {
        const result = await promises();
        console.log(`Async/Await ----> ${result}`);
    }
    catch (error) {
        console.log(`Async/Await ----> ${error}`);
    }
}
console.log('Start Promise');
promises()
    .then((result) => {
    console.log(`Promise -----> ${result}`);
})
    .catch((error) => {
    console.log(`Promise -----> ${error}`);
});
console.log('End Promise');
console.log('Start Async/Await');
asyncAwait();
console.log('End Async/Await');
// #############################################################################
// #############################################################################
async function getData() {
    try {
        const result = await axios_1.default.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log(`Async/Await ----> ${result.data.title}`);
    }
    catch (error) {
        console.log(`Async/Await ----> ${error}`);
    }
}
getData();
// #################################################################
// Same code synchronous and asynchronous
// #################################################################
function sleepSync(ms, index) {
    return new Promise((resolve) => setTimeout(() => {
        console.log(index);
        return resolve();
    }, ms));
}
async function waitFiveSync() {
    for (let i = 0; i < 5; i++) {
        await sleepSync(1000, i);
    }
}
// This will be synchronous
waitFiveSync();
function sleep(ms, index) {
    setTimeout(() => {
        console.log(index);
    }, ms);
}
function waitFive() {
    for (let i = 0; i < 5; i++) {
        sleep(3000, i);
    }
}
// This will be asynchronous
waitFive();
