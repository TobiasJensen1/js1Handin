var fs = require('fs');
var path = process.argv[2];

output = fs.readFile(path, 'utf8', function(err, data) {
    console.log(data.split('\n').length - 1);
});