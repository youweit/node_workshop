var hello = require('./HelloModule_1.js');
var router = require('./router.js');

hello.start(router.route);