/**
 * Created with JetBrains PhpStorm.
 * User: pooya
 * Date: 1/16/13
 * Time: 7:45 PM
 * To change this template use File | Settings | File Templates.
 */
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
