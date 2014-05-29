var PORT = 8080;
var http = require('http');
var url = require('url');

function start(){
    function onRequest(req, res){
       
        var pathName = url.parse(req.url).pathname;
         //.pathname -> http://localhost/pathname
         
        console.log(pathName);
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write('<h1>QAQa, Hello Node Module</h1>');
        res.end();
    }
    
    //Chaining Pattern.
    http.createServer(onRequest).listen(8080);
    console.log('server start on port :'+PORT);
}

exports.start = start;