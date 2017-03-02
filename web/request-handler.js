var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');
var httpHelper = require('./http-helpers');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  // var index;

  // fs.readFile(__dirname + '/public/index.html', 'utf8', function(err, data) {
  //   if (err) {
  //     console.log('Here is your error: ', err);
  //   } else {
  //     // console.log('Here is your data: ', data);
  //     res.write(data);    
  //   }
  // });
  // // write the head shit with 200 status code response
  // res.writeHead(200, httpHelper.headers);
  // // end response html

  // console.log('this is index: ', data);
  // res.end();

  var statusCode = 200; 
  var body = [];
  if (req.url === '/') {
    var getHtml = fs.readFile(__dirname + '/public/index.html', 'utf8', function(err, data) {
      if (err) {
        console.log('Here is your error: ', err);
      } else {
        console.log('Here is your data: ', data);
        res.writeHead(statusCode, httpHelper.headers);
        res.end(data);
      }
    });
  } else {
    var getGoogle = fs.readFile('/Users/student/Desktop/hrsf73-web-historian' + '/test/testdata/sites/www.google.com', 'utf8', function(err, data) {
      if (err) {
        console.log('Here is your error: ', err);
      } else {
        console.log('Here is your data: ', data);
        res.writeHead(statusCode, httpHelper.headers);
        res.end(data);
      }
    });
  }


  // res.end(archive.paths.list);
};

