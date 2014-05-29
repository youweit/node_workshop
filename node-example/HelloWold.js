'use strict';

var PORT = 8080;
var http = require('http');

var httpServer = http.createServer(function(req,res){
    
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.end('<h1>Hello node server!!!</h1>');
    
});

httpServer.listen(PORT);

console.log('server running at port :'+ PORT);