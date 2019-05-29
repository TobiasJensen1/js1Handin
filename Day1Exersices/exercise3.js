var fs = require('fs');

var path = process.argv[2];

var readFile = fs.readFileSync(path);
var myString = readFile.toString();
output = myString.split('\n');

console.log(output.length - 1);
