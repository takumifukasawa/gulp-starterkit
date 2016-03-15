const ns = window.APP;

class WheelManager {
  constructor(opts) {
    opts = opts || {};
   
    this.$root  = opts.$root || $(window);
    this.eventName = opts.eventName || "mousewheel.WheelManager";
    this.$dispatcher = opts.$dispatcher || $({});

    this.initListeners();
  }

  initListeners() {
    this.$root.on(this.eventName, (e) => {
      e.preventDefault();
      const value = -e.deltaY * e.deltaFactor;
      this.$dispatcher.trigger('wheel', value);
    });
  }

  clearListeners() {
    this.$root.off(this.eventName);
  }

}

module.exports = require("../util/singleton")(WheelManager);
