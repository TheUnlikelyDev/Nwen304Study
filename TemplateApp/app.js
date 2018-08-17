//1.Import modules
const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');

//2.Instantiate app
var app = express();

//3.Configure app
app.set('appName', 'Template App');
app.set('port',process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));//__dirname is he directory in which the currently executing script resides
app.set('view engine', 'jade');


//4.Define middleware
app.use(bodyParser.json());//converts JSON doc <--> JS object

//5.Define routes -(get,post,put,del,all)
app.all('*', (req,res) => {
  res.render('index', {msg: 'Welcome to Template App'});//renders the specified view, 2nd param = data object used by view engine
});

//6.Create Server
http.createServer(app).listen(app.get('port'),function(){
  console.log("Express server listening om port " + app.get('port'));
}
);

//API SUMMARY:
/*
POST/collections/{collection}

*/
