var http = require('http');
var upperCase = require('upper-case');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('Hello World. Welcome to my website. ');


}).listen(8080);
console.log("Listening in port 8080");