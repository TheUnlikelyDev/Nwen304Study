const express = require('express');
const app = express();//represents application

var students = ['Sam','Steve','Kate'];
/*
app.get();
app.put();
app.post();
app.delete();
*/
//slash represents root of website
app.get('/',(req, res) => {
  res.send("Hello World!");
});//defines a route

app.get('/api/students',(req,res) => {
  res.send(students);
});

//:id to define the parameter.
app.get('/api/students/:id', (req,res) => {
  var student = students[req.params.id];
  //res.send( "Student: " + student);
  //res.send(req.params);
  res.send(req.query);
});

app.post('/api/students', (req, res) => {
  const
});


/* PORT enivronment variable: and EV is a variable that changes/students
depending on the environment the application is run.*/
const port = process.env.PORT || 3000;



app.listen(port,function(){
  console.log('Listening on port ${port}...')  ;
});
