var OctoPrintServer = require('./octoprint.js');
var test_settings = require('./test_settings.json');

var settings = {address:test_settings.address,
               APIKey:test_settings.APIKey,
               version:"0.1",}


var server = new OctoPrintServer(settings);

server.api_version().then(function(version,error){

  console.log(version);
  console.log(error);
});
