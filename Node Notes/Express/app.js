const express = require('express');
const app = express();//represents application

app.use(express.json());// middleware

const students = [
{id: 1 , name: 'Sam'},
{id: 2 , name: 'Max'},
{id: 3 , name: 'Liam'}
];
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
  const students = students.find(c => c.id === parseInt(req.params.id));
  if(!students) return res.status(404).send('The student with that id was not found.');
  res.send(course);
});

app.post('/api/students?name',(req,res) => {
  const student = {
    id: students.length +1,
    name: req.body.name//need express.json()

  };
  students.push(student);
  res.send(student);
});




/* PORT enivronment variable: and EV is a variable that changes/students
depending on the environment the application is run.*/
const port = process.env.PORT || 3000;



app.listen(port,function(){
  //console.log('Listening on port ${port}...');
  console.log('Listenting on port 3000');
});
