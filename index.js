const _  = require('lodash');

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) : (global.Qarticles = factory());

})(this, function () {
  class Ken {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    greeting() {
      console.log(`Hi, ${_.get(this, 'name')}, ${this.age}.`);
    }
  }
  return Ken;
});
