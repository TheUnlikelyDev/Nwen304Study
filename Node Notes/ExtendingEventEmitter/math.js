const EventEmitter = require('events');

class Math extends EventEmitter {

add(num){

  this.emit('NumberAddedEvent',num+num);
}

}

module.exports = Math;
