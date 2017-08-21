'use strict'
var tap = require('tap')
var OctoPrintServer = require('../../octoprint.js');
var test_settings = require('../../test_settings.json');

var settings = {
  address: test_settings.address,
  APIKey: test_settings.APIKey,
  version: "0.1",
}


var server = new OctoPrintServer(settings);



tap.test('Test connection', function (childTest) {
  server.getPrinterConnection().then(function (connection, e) {
    if (e) {
      throw error // tap will handle this
    }
    var settings = {
      "port": connection.current.port,
      "baudrate": connection.current.baudrate,
      "printerProfile": connection.current.printerProfile,
      "save": false,
      "autoconnect": true
    }

    childTest.equal((typeof e), 'undefined');
    childTest.equal((typeof connection), 'object');
    childTest.ok(connection.hasOwnProperty("current"));
    childTest.ok(connection.hasOwnProperty("options"));

    server.disconnectFromPrinter().then(function (result_one, er) {
      if (er) {
        throw error // tap will handle this
      }
      childTest.equal((typeof er), 'undefined');
      childTest.ok(result_one);

      server.connectToPrinter(settings).then(function (result_two, err) {
      if (err) {
        throw error // tap will handle this
      }
      childTest.equal((typeof err), 'undefined');
      childTest.ok(result_two);
      childTest.end();
    })

    });





  })
})

tap.test('Disconnect', function (childTest) {
  server.getPrinterConnection().then(function (connection, error) {
    if (error) {
      throw error // tap will handle this
    }
    var settings = {
      "port": connection.current.port,
      "baudrate": connection.current.baudrate,
      "printerProfile": connection.current.printerProfile,
      "save": false,
      "autoconnect": true
    }
    server.connectToPrinter(settings).then(function (result, error) {
      if (error) {
        throw error // tap will handle this
      }
      childTest.equal((typeof error), 'undefined');
      childTest.ok(result);
      childTest.end();
    })


  })
})
