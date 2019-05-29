var fs = require('fs');
var path = require('path');
var pathToDir = process.argv[2];
var fileExtension = '.' + process.argv[3];

fs.readdir(pathToDir, function(err, list) {
    for (let i = 0; i < list.length; i++) {
        if (path.extname(list[i]) === fileExtension) {
            console.log(list[i]);
        }
        
    }
});