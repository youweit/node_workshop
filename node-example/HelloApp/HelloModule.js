var PORT = 8080;
var http = require('http');

function start(){
    function onRequest(req, res){
        //console.log(req);
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write('<h1>QAQa, Hello Node Module</h1>');
        res.end();
    }
    
    //Chaining Pattern.
    http.createServer(onRequest).listen(8080);
    console.log('server start on port :'+PORT);
}

exports.start = start;