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

  /**
   * Instructs OctoPrint to connect to the printer
   * @param   {[[object]]} settings      Settings for connecting to the printer
   * @param {string} settings.port The port to connect to
   * @param {int} settings.baudrate The baudrate to connect with
   * @param {string} settings.printerProfile The id of the printer profile to use for the connection
   * @param {boolean} settings.save Whether to save the supplied connection settings as the new preference
   * @param {boolean} settings.autoconnect Whether to attempt to automatically connect to the printer on server startup
   * @returns {Promise} resolve(true) - No error, reject(err)
   */
  connectToPrinter(settings) {
    var self = this;
    return new Promise(function (resolve, reject) {
      settings.command = "connect";
      var path = self.getPath("connection");
      self.restPOST(path, settings).then(function (body, err) {
          resolve(true);
        })
        .catch(function (err) {
          reject(err)
        });

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
  getFilesFromFolder(folder_name, recursive) {
    var self = this;
    return new Promise(function (resolve, reject) {

      recursive += (typeof recursive == "undefined") ? false : true;

      var path = self.getPath("files");
      path += "/" + folder_name;

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


  sendFile() {
    var self = this;
    return new Promise(function (resolve, reject) {

      reject("Not yet implimented")
    });
  }

  createFolder() {
    var self = this;
    return new Promise(function (resolve, reject) {

      reject("Not yet implimented")
    });
  }

  fileDetails() {
    var self = this;
    return new Promise(function (resolve, reject) {

      reject("Not yet implimented")
    });
  }

  folderDetails() {
    var self = this;
    return new Promise(function (resolve, reject) {

      reject("Not yet implimented")
    });
  }

  selectFile() {
    var self = this;
    return new Promise(function (resolve, reject) {

      reject("Not yet implimented")
    });
  }

  sliceFile() {
    var self = this;
    return new Promise(function (resolve, reject) {

      reject("Not yet implimented")
    });
  }

  copyFile() {
    var self = this;
    return new Promise(function (resolve, reject) {

      reject("Not yet implimented")
    });
  }

  moveFile() {
    var self = this;
    return new Promise(function (resolve, reject) {

      reject("Not yet implimented")
    });
  }

  deleteFile() {
    var self = this;
    return new Promise(function (resolve, reject) {

      reject("Not yet implimented")
    });
  }



  /*Jobs API */
  startJob() {
    var self = this;
    return new Promise(function (resolve, reject) {

      reject("Not yet implimented")
    });
  }

  cancelJob() {
    var self = this;
    return new Promise(function (resolve, reject) {

      reject("Not yet implimented")
    });
  }

  restartJob() {
    var self = this;
    return new Promise(function (resolve, reject) {

      reject("Not yet implimented")
    });
  }

  startJob() {
    var self = this;
    return new Promise(function (resolve, reject) {

      reject("Not yet implimented")
    });
  }

  pauseJob() {
    var self = this;
    return new Promise(function (resolve, reject) {

      reject("Not yet implimented")
    });
  }

  resumeJob() {
    var self = this;
    return new Promise(function (resolve, reject) {

      reject("Not yet implimented")
    });
  }

  toggleJob() {
    var self = this;
    return new Promise(function (resolve, reject) {

      reject("Not yet implimented")
    });
  }

  /**
   * [[Retrieve information about the current job (if there is one).]]
   * @returns {[[object]]} job information response
   */
  jobStatus() {
    var self = this;
    return new Promise(function (resolve, reject) {

      var path = self.getPath("job");
      self.restGET(path).then(function (body, err) {
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

  restGET(path, qs) {
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
    var self = this;
    return new Promise(function (resolve, reject) {

      var url = self.address + path;
      var options = {
        url: url,
        headers: {
          'X-Api-Key': self.APIKey
        },
        body:body,
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
