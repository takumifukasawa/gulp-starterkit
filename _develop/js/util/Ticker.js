class Ticker extends require('imports?define=>false!eventemitter2').EventEmitter2 {
//class Ticker extends require('eventemitter2').EventEmitter2 {
  constructor() {
    super();
    const _update = () => {
      this.emit('tick', Date.now());
      //this.emit('cursorTick', Date.now());
      requestAnimationFrame(_update);
    };
    _update(); 
  }
}

var ticker = new Ticker();
module.exports = ticker;
