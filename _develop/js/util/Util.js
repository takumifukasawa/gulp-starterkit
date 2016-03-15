class Util {

  constructor() {}

  animationCallback ($el, eventName) {
    var animateEndTiming = [
      "animationend",
      "oAnimationEnd",
      "mozAnimationEnd",
      "webkitAnimationEnd"
    ];
    var timing = animateEndTiming.join(" ");
    
    $el.on(timing, function() {
      $el.trigger(eventName);
    });
  }

  transitionCallback($el, eventName) {
    var animateEndTiming = [
      "transitionend",
      "oTransitionEnd",
      "mozTransitionEnd",
      "webkitTransitionEnd"
    ];
    var timing = animateEndTiming.join(" ");
  
    $el.on(timing, function() {
      $el.trigger(eventName);
    });
  }

}

module.exports = require("../util/singleton")(Util);
