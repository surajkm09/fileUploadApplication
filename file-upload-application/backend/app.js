const express = require("express");
const fileUpload = require('express-fileupload');
const insertIntoDb = require('./controllers/insertCSVIntoDb');


const app = express() ;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(fileUpload());
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin' , 'http://localhost:4200');
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append("Access-Control-Allow-Headers", "Origin, Accept,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  res.append('Access-Control-Allow-Credentials', true);
  console.log("inside use");
  next();
});

app.post('/upload',(req,res)=>{
  console.log("inside upload");
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }

  insertIntoDb(req.files.file.data.toString(),req.body.collection,res);



});


module.exports = app ;


