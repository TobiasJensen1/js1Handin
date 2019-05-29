var http = require('http');
var url = process.argv[2].toString();

http.get(url, function(response) {
    response.setEncoding('utf8');
    response.on('data', console.log);

}).on('error', console.error);