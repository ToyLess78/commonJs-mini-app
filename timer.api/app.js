// const start = performance.now();
// setTimeout(() => {
//     console.log(performance.now() - start);
//     console.log('One second left!');
// }, 1000);

// function myFunc(arg) {
//     console.log(`Arg => ${arg}`);
// }

// setTimeout(myFunc, 1500, 'With arg');

// const timerId = setTimeout(() => {
//     console.log('Five second left!');
// }, 5000);
//
// setTimeout(() => {
//     clearTimeout(timerId);
//     console.log('Clear Timeout')
// }, 1000)

// const intervalId = setInterval(() => {
//     console.log(performance.now());
// }, 1000);
//
// setTimeout(() => {
//     clearInterval(intervalId);
//     console.log('Clear Interval')
// }, 5000)


// !setImmediate --------------- //

// console.log('Before');
// setImmediate(() => {
//     console.log('After all');
// })
// console.log('After');

const timerId = setTimeout(() => {
    console.log('Five second left!');
}, 5000);

timerId.unref();

setImmediate(() => {
    console.log('After all');
    timerId.ref();
})