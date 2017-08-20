var OctoPrintServer = require('./octoprint.js');
var test_settings = require('./test_settings.json');

var settings = {address:test_settings.address,
               APIKey:test_settings.APIKey,
               version:"0.1",}


var server = new OctoPrintServer(settings);

server.api_version().then(function(version,error){
  if (!error)
    {
      console.log("api_version -> Working");
    }
});

server.getPrinterConnection().then(function(connection,error){
    if (!error)
    {
      console.log("getPrinterConnection -> Working");
    }
});

server.getAllFiles(false).then(function(files,error){
      if (!error)
    {
      console.log("getAllFiles(1/3) -> Working");
    }
});

server.getAllFiles(true).then(function(files,error){
      if (!error)
    {
      console.log("getAllFiles(2/3) -> Working");
    }
});

server.getAllFiles().then(function(files,error){
      if (!error)
    {
      console.log("getAllFiles(3/3) -> Working");
    }
});


