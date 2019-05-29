var net = require('net');
var portNumber = process.argv[2];

var server = net.createServer(function(socket) {
    socket.end(getFormattedDate() + '\n');
})

server.listen(portNumber);

function getFormattedDate() {
    var today = new Date();

    return [today.getFullYear(),
    formatNumber(today.getMonth() + 1),
    formatNumber(today.getDate())].join("-") 
    + " " + 
    [formatNumber(today.getHours()),
    formatNumber(today.getMinutes())].join(":");
}

function formatNumber(number) {
    return number < 10 ? "0" + number : number;
}