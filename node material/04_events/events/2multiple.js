var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.on('onswipe', function () {
    console.log('door is opened');
});

emitter.on('onswipe', function () {
    console.log('fan is on');
});

emitter.on('onswipe', function () {
    console.log('AC is on');
});

// Emit
emitter.emit('onswipe');
