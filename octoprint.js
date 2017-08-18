var request = require('request-promise');
var api = require('./API.json');

class OctoPrintServer {

  /**
   * [[Description]]
   * @param {object} settings Settings for your OctoPrintServer
   * @param {String} settings.APIKey APIKey
   * @param {String} settings.address Addess of your OctoPrintServer
   * @param {String} settings.version Version of the API you want to use. Otherwise defaults to latest.
   */
  constructor(settings) {

    this.address = settings.address;
    this.APIKey = settings.APIKey;
    this.version = settings.version;

  }

  /**
   * Retrieve information regarding server and API version.
   * @returns {object} Returns a JSON object with two keys, api containing the API version, server containing the server version.
   */
  api_version() {
    var self = this;
    return new Promise(function (resolve, reject) {
      var path = self.getPath("version");
      self.restGET(path).then(function (body, err) {
          resolve(body);
        })
        .catch(function (err) {
          reject(err)
        });
    });
  }

  getPrinterConnection(){
       return new Promise(function (resolve, reject) {

       });
  }

    connectToPrinter(){
       return new Promise(function (resolve, reject) {

       });
  }

      disconnectFromPrinter(){
       return new Promise(function (resolve, reject) {

       });
      }

       fakeAckToPrinter(){
       return new Promise(function (resolve, reject) {

       });
  }


  /*
  None public functions Below
  */

  getPath(name) {
    if (typeof this.version != "undefined" && api.hasOwnProperty(this.version) && api[this.version].hasOwnProperty(name)) {
      return api[this.version][name]
    } else {
      return api[api.latest][name]
    }
  }

  restGET(path) {
    var self = this;
    return new Promise(function (resolve, reject) {

      var url = self.address + path;
      var options = {
        url: url,
        headers: {
          'X-Api-Key': self.APIKey
        },
        json: true // Automatically parses the JSON string in the response
      };

      request(options)
        .then(function (body) {
          resolve(body);
        })
        .catch(function (err) {
          reject(err)
        });


    })
  }

  restPOST(path,body) {
    return new Promise(function (resolve, reject) {

      url = this.address + this.path;
      var options = {
        url: url,
        headers: {
          'X-Api-Key': this.APIKey
        },
        json: true // Automatically parses the JSON string in the response
      };

      request(options)
        .then(function (body) {
          resolve(body);
        })
        .catch(function (err) {
          reject(err)
        });


    })
  }


}

module.exports = OctoPrintServer;
