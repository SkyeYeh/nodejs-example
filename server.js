// 請求（require）Node.js自帶的 http 模組。
var http = require('http');

function start() {
    var server = http.createServer(function (req, res) {
        res.writeHead(200, {'Conten-Type': 'test/plain'});
        res.write('Hi');
        res.end();
    });

    // 指定這個HTTP伺服器監聽的埠號號。
    server.listen(8888, '127.0.0.1', function () {
        var address = server.address();
        console.log('Server address: ' + address.address + ':' + address.port);
    });
}

exports.start = start;
