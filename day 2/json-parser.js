var express = require('express');
var bp = require('body-parser');


var app = express();
app.use(bp.json())

var mytask=[
{
"description":"Watch movie",
"completed":true

},
{
"description":"talk to mom",
"completed":false

},
{
"description":"talk to Dad",
"completed":true

}

]



app.use(express.static('public'));

app.get('/about',function(req,res){
res.send('welcome to about page')

});

app.get('/contact',function(req,res) {
res.send('welcome to contact page')
});

app.get('/getmytasks',function(req,res) {

	res.json(mytask);
});



app.listen(3000, function() {
	console.log('Express server is up on port 3000');
});