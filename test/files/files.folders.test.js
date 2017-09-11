'use strict'
var tap = require('tap')
var OctoPrintServer = require('../../octoprint.js');
var test_settings = require('../../test_settings.json');

var settings = {address:test_settings.address,
               APIKey:test_settings.APIKey,
               version:"0.1",}


var server = new OctoPrintServer(settings);


tap.test('Files -> Create Folder', function (childTest) {
  server.createFolder(test_settings.test_folder_name).then(function(responce){

    childTest.equal((typeof responce), 'object');
    childTest.ok(responce.hasOwnProperty("folder") && responce.folder.hasOwnProperty("name"));
    childTest.equal(responce.folder.name, test_settings.test_folder_name);

    server.deleteFolder(test_settings.test_folder_name).then(function(resp){

      //We should do a better check here
      childTest.end();

    }).catch(function(err){

    childTest.fail("'Files -> Delete Folder'", err)

  });


  }).catch(function(error){

    childTest.fail("'Files -> Create Folder'", error)

  });
});
