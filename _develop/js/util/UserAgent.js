class UserAgent {
  constructor() {
    this.ua = window.navigator.userAgent.toLowerCase();
  }
  isIE() {
    if(this.ua.indexOf("msie") !== -1) {
        return true;
    }
  }
  isAndroid() {
    return this.ua.indexOf("android") >= 0;
  }
  getBrowser() {
    var ver = window.navigator.appVersion.toLowerCase();
    var name = "unknown";

    if(this.ua.indexOf("chrome") !== -1) {
        name = "chrome";
    } else if (this.ua.indexOf("safari") !== -1) {
        name = "safari";
    } else if (this.ua.indexOf("opera") !== -1) {
        name = "opera";
    } else if (this.ua.indexOf("firefox") !== -1) {
        name = "firefox";
    } else if (this.ua.indexOf("trident/7") !== -1) {
        name = "ie11";
    } else if (this.ua.indexOf("msie") !== -1) {
        if (ver.indexOf("msie 6.") !== -1) {
            name = "ie6";
        } else if (ver.indexOf("msie 7.") !== -1) {
            name = "ie7";
        } else if (ver.indexOf("msie 8.") !== -1) {
            name = "ie8";
        } else if (ver.indexOf("msie 9.") !== -1) {
            name = "ie9";
        } else if (ver.indexOf("msie 10.") !== -1) {
            name = "ie10";
        } else {
            name = "ie";
        }
    }
    return name;
  }
  isMobile() {
    var u = window.navigator.userAgent.toLowerCase();
    return {
        Tablet: (u.indexOf("windows") !== -1 && u.indexOf("touch") !== -1) ||
                u.indexOf("ipad") !== -1 ||
                (u.indexOf("android") !== -1 && u.indexOf("mobile") === -1) ||
                (u.indexOf("firefox") !== -1 && u.indexOf("tablet") !== -1) ||
                u.indexOf("kindle") !== -1 ||
                u.indexOf("silk") !== -1 ||
                u.indexOf("playbook") !== -1,
        Mobile: (u.indexOf("windows") !== -1 && u.indexOf("phone") !== -1) ||
                u.indexOf("iphone") !== -1 ||
                u.indexOf("ipod") !== -1 ||
                (u.indexOf("android") !== -1 && u.indexOf("mobile") !== -1) ||
                (u.indexOf("firefox") !== -1 && u.indexOf("mobile") !== -1) ||
                u.indexOf("blackberry") !== -1
    };
  }
}

module.exports = require("../util/singleton")(UserAgent);
