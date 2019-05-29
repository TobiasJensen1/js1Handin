var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;
var urlsArray = process.argv.slice(2);
var numberOfUrls = urlsArray.length;

function printResults() {
    for (let i = 0; i < numberOfUrls; i++) {
        console.log(results[i])
    }
}

function httpGet(index) {
    http.get(urlsArray[index], function(response) {
        response.pipe(bl(function(err, data) {
            if(err) {
                console.error(err);
            }
            results[index] = data.toString();
            count++
            if(count === numberOfUrls) {
                printResults();
            }
        }))
    })
}

for (let i = 0; i < numberOfUrls; i++) {
    httpGet(i);
}