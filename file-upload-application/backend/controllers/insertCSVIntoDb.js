const csv=require('csvtojson');
const mongoose = require('mongoose');
mongoose.connect('mongodb://root:root@localhost:27017/admin');
db = mongoose.connection;
function insertCSVIntoDb (data,collectionName,res){
  var schema= mongoose.Schema({},{ strict: false });
  var Record= mongoose.model('Records',schema,collectionName);

  csv().fromString(data).then((obj)=>{
     obj.forEach((value)=>{var tempRecord = new Record(value);
     tempRecord.save()});
     res.send({message:'records succefully sent'});
     res.end();

  });

}

module.exports = insertCSVIntoDb ;




