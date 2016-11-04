var htp=require('http');
htp.createServer(function(req,res){
	res.end('hello world\n');
}).listen(3000,"127.0.0.1");
console.log('server is running');