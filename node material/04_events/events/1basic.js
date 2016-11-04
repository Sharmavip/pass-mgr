var em = require('events').EventEmitter;

var emitter = new em();

// Subscribe
emitter.on('callme', function (arg1, arg2) {
    console.log('Foo raised, Args:', arg1, arg2);
});

// Emit
emitter.emit('callme', { a: 123 }, { b: 456 });