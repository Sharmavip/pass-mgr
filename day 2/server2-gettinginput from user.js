var express = require('express');
var bp = require('body-parser');


var app = express();
app.use(bp.json())

var mytask=[]
var taskid=1;

app.post('/postmytasks',function(req,res) {

var body=req.body
body.id=taskid++
mytask.push(body);
res.json(body);

});


app.get('/getmytasks/:id',function(req,res) {
	var getmyid=parseInt(req.params.id,10);

var matchedgettask;
mytask.forEach(function(mytask) {
	if(getmyid===mytask.id) {
		matchedgettask=mytask;
	}

});

if(matchedgettask) {
	res.json(matchedgettask);

} else {
	res.status(404).send();
}


app.listen(3000, function() {
	console.log('Express server is up on port 3000');
});