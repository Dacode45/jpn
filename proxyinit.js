var http = require('http'),
httpProxy = require('http-proxy'),
proxy = httpProxy.createServer({}),
url = require('url');

http.createServer(function(req, res){
var hostname = req.headers.host.split(":")[0];
var pathname = url.parse(req.url).pathname;

console.log(hostname);
console.log(pathname);

switch(hostname){
	default:
		proxy.web(req, res, {target: 'http://localhost:8000'});
}
}).listen(80, function(){
console.log('proxy listining on port 80');
});

