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

  /*VERSION API */

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

  /*Connection API */

  /**
   * Retrieve the current connection settings, including information regarding the available baudrates and serial ports and the current connection state.
   * @returns {object} An object with the available baudrates and serial ports and the current connection state.
   */
  getPrinterConnection() {
    var self = this;
    return new Promise(function (resolve, reject) {
      var path = self.getPath("connection");
      self.restGET(path).then(function (body, err) {
          resolve(body);
        })
        .catch(function (err) {
          reject(err)
        });
    });
  }

  connectToPrinter() {
    return new Promise(function (resolve, reject) {

    });
  }

  disconnectFromPrinter() {
    return new Promise(function (resolve, reject) {

    });
  }

  fakeAckToPrinter() {
    return new Promise(function (resolve, reject) {

    });
  }

  /*Files API */
  /**
   * Retrieve information regarding all files currently available and regarding the disk space still available locally in the system.


   * @param   {boolean} recusive [[ If the query parameter recursive is provided and set to true, returns all files and folders.Otherwise by default only returns the files and folders in the root directory.]]
   * @returns {object} An object withinformation regarding all files currently available and regarding the disk space still available
   */
  getAllFiles(recursive) {
    var self = this;
    return new Promise(function (resolve, reject) {

      recursive += (typeof recursive == "undefined") ? false : true;

      var path = self.getPath("files");

      var qs = {
        recursive: recursive
      };

      self.restGET(path, qs).then(function (body, err) {
          resolve(body);
        })
        .catch(function (err) {
          reject(err)
        });
    });
  }

    /**
     * Retrieve information regarding the files currently available on the selected location
     * @param   {string} folder_name [[Name of the folder to get files from]]
     * @param   {boolean} recursive   [[If the query parameter recursive is provided and set to true, returns all files and folders.Otherwise by default only returns the files and folders in the root directory.]]]
     * @returns {object} An object withinformation regarding all files currently available and regarding the disk space still available
     */
    getFilesFromFolder(folder_name,recursive) {
    var self = this;
    return new Promise(function (resolve, reject) {

      recursive += (typeof recursive == "undefined") ? false : true;

      var path = self.getPath("files");

      var qs = {
        recursive: recursive
      };

      self.restGET(path, qs).then(function (body, err) {
          resolve(body);
        })
        .catch(function (err) {
          reject(err)
        });
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

  restGET(path,qs) {
    var self = this;
    return new Promise(function (resolve, reject) {

      var url = self.address + path;
      var options = {
        url: url,
        headers: {
          'X-Api-Key': self.APIKey
        },
        qs: qs,
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

  restPOST(path, body) {
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
