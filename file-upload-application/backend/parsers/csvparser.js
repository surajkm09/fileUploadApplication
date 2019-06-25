 module.exports=function csvParser(data){
  const csv=require('csvtojson');

  csv().fromString(data).then((obj)=>{
    return(obj);
  });


}



