var http = require('http');
var nodeStatic = require('node-static');

var fileServer = new nodeStatic.Server('./public'),
	serverPort = 5000;

var fileServerConfig = function (req, res) {
	req.addListener('end', function () {
		fileServer.serve(req, res);
	}).resume();
}

http.createServer(fileServerConfig).listen(serverPort);

console.log('O servidor do teste AB está rodando na porta ' + serverPort);