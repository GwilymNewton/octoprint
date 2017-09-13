'use strict'
var tap = require('tap')
var OctoPrintServer = require('../../octoprint.js');
var test_settings = require('../../test_settings.json');

var settings = {address:test_settings.address,
               APIKey:test_settings.APIKey,
               version:"0.1",}


var server = new OctoPrintServer(settings);

var file  = test_settings.test_filename;


tap.test('Files -> Upload File', function (childTest) {
  server.sendFile(file).then(function(responce){
    console.log(responce)

    childTest.end();


  }).catch(function(error){

    childTest.fail("'Files -> Upload File'", error);
    console.log(error);
    childTest.end();

  });
});
