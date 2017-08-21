'use strict'
var tap = require('tap')
var OctoPrintServer = require('../../octoprint.js');
var test_settings = require('../../test_settings.json');

var settings = {address:test_settings.address,
               APIKey:test_settings.APIKey,
               version:"0.1",}


var server = new OctoPrintServer(settings);


tap.test('Job Status', function (childTest) {
  server.jobStatus().then(function(output,error){
    if (error) {
      throw error // tap will handle this
    }
    childTest.equal((typeof error), 'undefined');
    childTest.equal((typeof output), 'object');
    childTest.ok(output.hasOwnProperty("job"));
    childTest.ok(output.hasOwnProperty("progress"));
    childTest.end();
  })
})
