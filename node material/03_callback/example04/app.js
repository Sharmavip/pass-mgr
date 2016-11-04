var fs = require('fs'),
    http = require('http');

http.get({ host: 'yahoo.com' }, function(res) {
    console.log("Got a response from yahoo.com");
}).on('error', function(e) {
    console.log("There was an error from yahoo.com");
});

fs.readFile('file1.txt', function (err, data) {
    if (err) { throw err; }
    console.log('File 1 read!');
});

http.get({ host: 'www.asreet-tech.com' }, function(res) {
    console.log("Got a response from asreet");
}).on('error', function(e) {
    console.log("There was an error from asreet");
});

fs.readFile('file2.txt', 'utf8', function (err, data) {
    if (err) { throw err; }
    console.log('File 2 read!');
});
