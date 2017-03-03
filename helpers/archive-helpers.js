var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {

  fs.readFile(exports.paths.list, 'utf8', function(err, contents) {
    if (err) {
      console.log('BUD you got an error, here it is: ', err);
    } else {
      console.log('Success, here are the contents: ', contents);
      callback(contents.split('\n'));

    }
  });
  // reads list of URLs in sites.txt 

  // use readFile to go through the list of URLs
};

exports.isUrlInList = function(url, callback) {
  // checks if url is in the list
  
  // if true, isUrlArchived

  // 
};

exports.addUrlToList = function(url, callback) {
  // fs.appendFile
};

exports.isUrlArchived = function(url, callback) {
  // checks if file or url exists in archives/sites
};

exports.downloadUrls = function(urls) {
  // for htmlfetcher worker

  // how does the worker download
};
