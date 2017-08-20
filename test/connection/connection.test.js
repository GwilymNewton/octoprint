'use strict'
var tap = require('tap')
var OctoPrintServer = require('../../octoprint.js');
var test_settings = require('../../test_settings.json');

var settings = {address:test_settings.address,
               APIKey:test_settings.APIKey,
               version:"0.1",}


var server = new OctoPrintServer(settings);


tap.test('Get Printer Connection', function (childTest) {
  server.getPrinterConnection().then(function(connection,error){
    if (error) {
      throw error // tap will handle this
    }
    childTest.equal((typeof error), 'undefined');
    childTest.equal((typeof connection), 'object');
    childTest.end();
  })
})
