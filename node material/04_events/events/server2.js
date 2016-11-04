var htp=require('http');
htp.createServer(function(req,res){
	 
	res.writeHead(301,{
	'Location':'http://www.zeolearn.com'
	});
	res.end();
}).listen(3000,"127.0.0.1");
console.log('server is running');