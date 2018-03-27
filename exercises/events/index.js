// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {

  constructor() {
  	this.handlers = {};
  }

  // Register an event handler
  on(eventName, callback) {
  	if (!this.handlers[eventName]) {
  		this.handlers[eventName] = [callback];
  	} else {
  		this.handlers[eventName].push(callback);
  	}
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
  	if (this.handlers[eventName]) {
  		for (let cb of this.handlers[eventName]) {
  			cb();
  		}
  	}
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
  	this.handlers[eventName] = undefined;
  }
}

module.exports = Events;
