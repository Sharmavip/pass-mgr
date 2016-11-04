var express = require('express');
var bp = require('body-parser');

var _  = require('underscore');
var MongoClient = require('mongodb'),MongoClient

var app = express();
app.use(bp.json())



var db;

MongoClient.connect('mongodb://admin:admin@ds143767.mlab.com:43767/vipdb',
(err,database) => {
	if (err) return console.log(err)
		db=database
}
)

app.post('/posttodb',(req,res)=> {
db.collection('userdb').save(req.body, (err, result) => {
	if (err) return console.log(err)
		console.log('saved to database')
	console.log('Record Saved')
	res.redirect('/')
})

})



app.get('/getmytask',(req,res)=> {
db.collection('userdb').find().toArray((err, result) => {
if (err) return console.log(err)
	res.json(result);

})



})

app.listen(3000, function() {
	console.log('Express server is up on port 3000');
});