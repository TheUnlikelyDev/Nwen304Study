const path = require('path');
const os = require('os');
const fs = require('fs');

var pathObj = path.parse(__filename);
/*{ root: '/',
  dir: '/am/courtenay/home1/morrissam/Desktop/Nwen304/tbc',
  base: 'app.js',
  ext: '.js',
  name: 'app' }*/
console.log(pathObj);

var totalMem = os.totalmem();
console.log(totalMem);

//const files = fs.readdirSync('./');// read all files in cur dir
//console.log("Files: " + files);

fs.readdir('$',function(err, files){
  if(err) console.log('Error',err);
  else console.log('Result',files);

});//asyn version, all take callback function
