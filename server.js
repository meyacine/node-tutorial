/**
 * Created by yacmed on 23/02/2016.
 */
var http = require('http');
/**
 * Initialize server to answer requests by prompting Salut tout le monde!
 * @param request
 * @param result
 */
var init = function(request, result) {
    result.writeHead(200);
    result.end('Salut tout le monde !');
}
var server = http.createServer(init);
server.listen(80);
