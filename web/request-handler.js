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
  var url = req.url;

  var statusCode = 200; 
  var body = [];
  // refactor this code for serveAssets modularity
  if (req.method === 'GET') {

    if (req.url === '/') {

      fs.readFile(__dirname + '/public/index.html', 'utf8', function(err, data) {
        if (err) {
          console.log('Here is your error: ', err);
        } else {
          console.log('Here is your data: ', data);
          res.writeHead(statusCode, httpHelper.headers);
          res.end(data);
        }
      });
    } else {
    // testing the second test with hardcoded test site
      fs.readFile(archive.paths.archivedSites + '/' + req.url, 'utf8', function(err, data) {
        if (err) {
          console.log('Here is your error: ', err);
          res.writeHead(404, httpHelper.headers);
          res.end();
        } else {
          console.log('Here is your data: ', data);
          res.writeHead(statusCode, httpHelper.headers);
          res.end(data);
        }
      });
    }
  } 

  if (req.method === 'POST') {
    fs.readFile(archive.paths.list + '/' + )
    // use archive-helpers to handle request correctly
  }
  // res.end(archive.paths.list);
};

