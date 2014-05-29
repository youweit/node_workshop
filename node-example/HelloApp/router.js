function route(pathname){
    console.log('request',pathname);
    // 檢查 pathname 是否有對應的 request handlers 
    if (typeof handlers[pathname] == "function") {
        
        console.log('hi',pathname);
    }else{
        console.log('No request handler for this pat\
hname:',pathname);
    }
}

exports.route = route;



