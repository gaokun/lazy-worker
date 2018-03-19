
const Job = require('./src/job');
const Worker = require('./src/worker');

((global, factory) => {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) : (global.LazyWoker = factory());

})(this, () => ({ Job, Worker}));
