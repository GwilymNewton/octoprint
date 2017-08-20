'use strict'
var tap = require('tap')
var OctoPrintServer = require('../../octoprint.js');
var test_settings = require('../../test_settings.json');

var settings = {address:test_settings.address,
               APIKey:test_settings.APIKey,
               version:"0.1",}


var server = new OctoPrintServer(settings);


tap.test('api_version', function (childTest) {
  server.api_version().then(function(version,error){
    if (error) {
      throw error // tap will handle this
    }
    childTest.equal((typeof error), 'undefined');
    childTest.equal((typeof version), 'object');
    childTest.ok(version.hasOwnProperty("api"));
    childTest.ok(version.hasOwnProperty("server"));
    childTest.end();
  })
})
