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
    // fs.readFile();

    // use archive-helpers to handle request correctly

    // use on method request
    // req.on('data', function(chunk) {
    //   // need to parse our data received
    //   var parsedData = JSON.parse(chunk);
    //   fs.writeFile(archive.paths.list, '\n', function (err, data) {
    //     if (err) {
    //       console.log('Here is your error: ', err);
    //       res.writeHead(404, httpHelper.headers);
    //       res.end();
    //     } else {
    //       statusCode = 302;
    //       console.log('Here is your data: ', data);
    //       console.log('parsed data', parsedData);
    //       console.log('JSON parse', JSON.parse(chunk));
    //       res.writeHead(statusCode, httpHelper.headers);
    //       res.end(data);
    //     }
    //   });
    req.on('data', function (chunk) {
      body.push(chunk.toString().slice(4));
      fs.writeFile(archive.paths.list, body.join('') + '\n', function (err, data) {
        if (err) {
          res.writeHead(404, httpHelper.headers);
          res.end();
        } else {
          statusCode = 302;
          res.writeHead(statusCode, httpHelper.headers);
          console.log('Here 3:', body[0]);
          res.end(data);
        }
      });
    });
  }

  // read list of URLS
    // check if urlinList
      // if url is in list, check if url is archived

      // else, addUrltothelist

      // also, download the URL





  // res.end(archive.paths.list);
};

