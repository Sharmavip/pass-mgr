var argv = require('yargs').argv;
var command = argv._[0];

console.log(argv);

if (command ==='hello' && typeof argv.name !=='undefined' && typeof argv.lname !=='undefined') {
	console.log('Hello ' + argv.name + ' ' + argv.lname);
}
else if (command ==='hello' && typeof argv.name !=='undefined') {
	console.log('Hello ' + argv.name);
	}

else if (command ==='hello') {
	console.log('Hello World');
	}

