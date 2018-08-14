const EventEmitter = require('events');
const emitter = new EventEmitter();




const MathClass = require('./math.js');
const mathObj = new MathClass();

mathObj.on('NumberAddedEvent', (arg) => {
  console.log("NumberAddedEvent handled, result is: ", arg);
});


mathObj.add(4);


const ButtonClass = require('./triangleButton.js');
const buttonObj = new ButtonClass();

buttonObj.on('buttonPress_Event',(arg) =>{
console.log('Triangle Button Pressed opening: ' + arg);
});

buttonObj.buttonPress();
