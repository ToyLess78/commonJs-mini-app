//Event Emitter
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

const logDbConnection = () => {
console.log('Db connected');
}

myEmitter.addListener('connected', logDbConnection);
myEmitter.emit('connected');

myEmitter.removeListener('connected', logDbConnection);
// myEmitter.off('connected', logDbConnection);
// myEmitter.removeAllListeners('connected');

myEmitter.emit('connected');

myEmitter.on('msg', (data) => {
    console.log(`Get: ${data}`);
});
myEmitter.prependListener('msg', (data) => {
    console.log(`Prepend: ${data}`);
});
myEmitter.emit('msg', 'Hi! This my messenger!');

myEmitter.once('off', () => {
    console.log('I emit only once!');
});

myEmitter.emit('off');
myEmitter.emit('off');

console.log(myEmitter.getMaxListeners());
myEmitter.setMaxListeners(1);
console.log(myEmitter.getMaxListeners());
console.log(myEmitter.listenerCount('msg'));
console.log(myEmitter.listenerCount('off'));
console.log(myEmitter.listeners('msg'));
console.log(myEmitter.eventNames());

myEmitter.on('error', (err) => {
    console.log(`Error: ${err.message}`)
});

myEmitter.emit('error', new Error('Send Error!'));

//Event Target
const target = new EventTarget();

const logTarget = () => {
    console.log('Connected to target');
}

target.addEventListener('connected', logTarget);
target.dispatchEvent(new Event('connected'));
