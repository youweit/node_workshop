'use strict';

//require filesystem module
var fs = require('fs');

console.log('DO YOU CODE?');

//Async task
fs.readFile(__dirname+'/images/baracktocat.jpg', function(error, data){
    console.log(error|'File loaded!');
});

console.log('YES WE CODE!');