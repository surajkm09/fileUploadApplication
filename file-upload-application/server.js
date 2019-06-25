const http = require("http");
const app = require('./backend/app');


const server = http.createServer(app);



server.on('listening',()=>{
  console.log("the server has started listening !!");
});

server.on('error',(err)=>{
  console.log("error has occurred");
  console.log(err);
});
server.on('connection',()=>{
  console.log("connection has occurred");
})

server.listen(3333);




