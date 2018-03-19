
const Q = require('q');

class Job {
  constructor(fn) {
    // fn : must be a function return promise
    this.fn = fn;
  }

  run() {
    const deferred = Q.defer();
    if(typeof this.fn === 'function') {
      return this.fn();
    } else {
      deferred.reject('no fn for Job');
      return deferred.promise;
    }
  }
}

module.exports = Job;