var express = require('express');
var bp = require('body-parser');

var _  = require('underscore');


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

app.get('/getmytasks',function(req,res) {

	res.json(mytask);
});

app.get('/getmytasks/:id',function(req,res){
                var getmytasksId=parseInt(req.params.id,10);
                
                var matchedtodo;
                var matchedtodo=_.findWhere(mytask,{id:getmytasksId});
if(matchedtodo){
                res.json(matchedtodo);
}else{
                res.status(404).send();
}              
});


app.delete('/deletedata/:id',function(req,res) {
                var getmytasksId=parseInt(req.params.id,10);
                
                var matchedTodo;
                var matchedTodo=_.findWhere(mytask,{id:getmytasksId});
if(!matchedTodo) { 
                
                res.status(404).json({"error":"id not found"});
}              
else
{
	mytask=_.without(mytask,matchedTodo);
	res.json(matchedTodo);
}
});


app.listen(3000, function() {
	console.log('Express server is up on port 3000');
});