var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/about',function(req,res){
res.send('welcome to about page')

});

app.get('/contact',function(req,res) {
res.send('welcome to contact page')
});

app.listen(3000, function() {
	console.log('Express server is up on port 3000');
});