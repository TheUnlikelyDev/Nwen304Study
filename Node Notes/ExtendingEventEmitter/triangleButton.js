const EventEmitter = require('events');


class TriangleButton extends EventEmitter{

  buttonPress(){
    this.emit('buttonPress_Event','www.google.com');
  }
}

module.exports = TriangleButton;
