/**
 * define global variables
 */

window.throttle = require('./../util/Throttle.js');
window.async = require('async');
window.EventTrigger = require('./../util/EventTrigger.js');

/**
 * define applications global varialbes, methods
 */
window.APP = {};
let ns = window.APP;

ns.ANIMATION_END = "animationend webkitAnimationEnd";
ns.TRANSITION_END = "transitionend webkitTransitionEnd";
ns.BREAK_POINT = 750;

ns.XMLNS = 'http://www.w3.org/2000/svg';

ns.isDebug = true;

ns.isSP = false;

if(window.innerWidth < ns.BREAK_POINT) ns.isSP = true;



