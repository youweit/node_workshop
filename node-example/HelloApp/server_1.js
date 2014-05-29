var hello = require('./HelloModule_1.js');
var router = require('./router.js');
var handlers = require("./requestHandlers");

// 使用 Object 來對應 pathname 與 request handlers 
var req = {
    "/": handlers.index,
    "/hi": handlers.index,
}

// 傳遞 request handler
server.start(router.route, req);
