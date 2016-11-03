var request = require ('request');
var url = 
'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=9d9cde5d3c2b8b55bd9287ddda4cd096';


module.exports = function (vipincallback) {
request({
	url: url,
	json: true
}, function (error,response,body)
{
if (error)
{

	vipincallback('Unable to fetch weather');
}
else {
	vipincallback('It\'s ' + body.main.temp + ' in ' + body.name + '!');
}

});
}