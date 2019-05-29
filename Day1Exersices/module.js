var fs = require('fs');
var path = require('path');

function filterFiles(list, filter) {
  return list.filter(function(file) {
    return path.extname(file) == '.' + filter;
  });
};

module.exports = function(directory, filter, callback) {

  fs.readdir(directory, function(error, list) {
    if (error) {
      return callback(error);
    }
    var filtered = filterFiles(list, filter);
    return callback(null, filtered);
  });

};