'use strict';
//REMINDER: npm install image-to-ascii
//require ImageToAscii module
var ImageToAscii = require ('image-to-ascii')
  , myImage = new ImageToAscii ({
        resize: {
            height: "100%"
          , width:  "50%"
        }
      , multiplyWidth: 2
      , colored: true
    });

console.log('DO YOU CODE?');

//Async task
myImage.convert(__dirname+'/images/baracktocat.jpg', function(err, converted) {
    console.log(err || converted);
});

console.log('YES WE CODE!');