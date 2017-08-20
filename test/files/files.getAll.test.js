'use strict'
var tap = require('tap')
var OctoPrintServer = require('../../octoprint.js');
var test_settings = require('../../test_settings.json');

var settings = {address:test_settings.address,
               APIKey:test_settings.APIKey,
               version:"0.1",}


var server = new OctoPrintServer(settings);


tap.test('Get All Files recusion ==false', function (childTest) {
  server.getAllFiles(false).then(function(files,error){
    if (error) {
      throw error // tap will handle this
    }
    childTest.equal((typeof error), 'undefined');
    childTest.equal((typeof files), 'object');
    childTest.ok(files.hasOwnProperty("files"));
    childTest.end();
  })
})

tap.test('Get All Files recusion ==true', function (childTest) {
  server.getAllFiles(true).then(function(files,error){
    if (error) {
      throw error // tap will handle this
    }
    childTest.equal((typeof error), 'undefined');
    childTest.equal((typeof files), 'object');
    childTest.ok(files.hasOwnProperty("files"));
    childTest.end();
  })
})

tap.test('Get All Files recusion ==undefined', function (childTest) {
  server.getAllFiles().then(function(files,error){
    if (error) {
      throw error // tap will handle this
    }
    childTest.equal((typeof error), 'undefined');
    childTest.equal((typeof files), 'object');
    childTest.ok(files.hasOwnProperty("files"));
    childTest.end();
  })
})
