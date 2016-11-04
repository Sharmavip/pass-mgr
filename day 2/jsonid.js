var mytask=[]
var taskid=1;

app.get('/getmytasks/:id',function(req,res){
                var getmytasksId=parseInt(req.params.id,10);
                
                var matchedTodo;
                mytask.forEach(function(todo){
                                if(getmytasksId === todo.id){
                                                matchedTodo=todo;
                                }
                });
if(matchedTodo){
                res.json(matchedTodo);
}else{
                res.status(404).send();
}              
});
