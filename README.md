# fileUploadApplication
This file assumes you already have node js and angular installed on your system.


please follow the below instructions to execute the Application . 

	1.download th zip file from github and uzip it . 
	2.navigate to 
		/fileUploadApplication-master/file-upload-application 
	  and execute the following command 
		 npm install 
	3.navigate into /fileUploadApplication-master/file-upload-application/backend/controllers/insertCSVIntoDb.js 
		change the "mongoose.connect('mongodb://root:root@localhost:27017/admin');" to specify connection to your mongo database .
	4.navigate to /fileUploadApplication-master/file-upload-application/ and 
		 start the front end application by executing  the command 
		ng serve 

	5.navigate to /fileUploadApplication-master/file-upload-application/ and run the following command to start backend server .
		npm run serve 



