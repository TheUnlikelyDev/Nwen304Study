const http = require('http');

//server is event emitter so has all the functionality
/**
const server = http.createServer();

low level
server.on('connection',(socket) => {
  console.log('new connection');
});
server.listen(3000);
**/

const server = http.createServer((req,res)=>{
  if(req.url === '/')
  {
    res.write("Hello World!") ;
    res.end();
  }
  //deal with different routes
  if(req.url === '/numbers'){
    res.write(JSON.stringify([1,2,3]));
    res.end();

  }

  //NOT IDEAL FOR COMPLEX APP --> use Express Framework.
});
server.listen(3030);


console.log('Listening on port 3000....');
