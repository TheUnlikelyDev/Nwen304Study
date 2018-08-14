//When we recieve a hhtp request on a port, the http object raises an event
const EventsEmitter = require('events');
const emitter = new EventsEmitter();
// Register a listener
emitter.on('eventOne', function(){
  console.log("EventOne handled");
});

emitter.on('eventTwo', function(arg){

  console.log('EventTwo handled with object id ' + arg.id);



});

//arrow function syntax ECMA6
emitter.on('eventOne', (arg) => {
  console.log('Listener called');
});

//raise event
emitter.emit('eventOne');
//send message about event via object parameter, we will also need function in handler
//that processes the event info object:
emitter.emit('eventTwo',{ id: 0001})
