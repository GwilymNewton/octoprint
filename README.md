# octoprint

npm wrapper for the OcotoPrint  [REST API](http://docs.octoprint.org/en/master/api/index.html), Still largely incomplete 

##API
 - `api_version()` - Retrieve information regarding server and API version.

##Connection
 - `getPrinterConnection()` - Retrieve the current connection settings, including information regarding the available baudrates and serial ports and the current connection state.version.
 - `connectToPrinter()` - Instructs OctoPrint to connect to the printer 
 -  `disconnectFromPrinter()` - Instructs OctoPrint to disconnect from the printer.
 - `fakeAckToPrinter()` - **NOT YET IMPLIMENTED**
##Files
 - `getAllFiles()` -  Retrieve information regarding all files currently available and regarding the disk space still available locally in the system.
 - `getFilesFromFolder()` -  Retrieve information regarding the files currently available on the selected location.
 -   `sendFile()` - Upload a file to the selected location, and select or print.
 -  `createFolder()` - create a new empty folder on the file system
 -  `deleteFolder()` - delete folder on the file system
 -  `fileDetails()` - **NOT YET IMPLIMENTED**
 -  `selectFile()` - **NOT YET IMPLIMENTED**
 - `sliceFile()` - **NOT YET IMPLIMENTED**
 - `copyFile()` - **NOT YET IMPLIMENTED**
 - `moveFile()` - **NOT YET IMPLIMENTED**
 - `deleteFile()` - **NOT YET IMPLIMENTED**

##Jobs
-`jobStatus() ` - Retrieve information about the current job (if there is one).
