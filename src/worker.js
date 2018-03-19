
const Q = require('q');

const JOB_INTERVAL = 1000;

class Worker {
  constructor(setting) {
    this.jobs = [];
    this.dataArray = [];
    this.setting = { interval: JOB_INTERVAL };
    Object.assign(this.setting, setting);
  }

  push(job) {
    this.jobs.push(job);
  }

  run(index) {
    const deferred = Q.defer();
    const _this = this;
    if(!index) {
      index = 0;
      _this.dataArray = [];
    }
    if(_this.jobs.length === 0) {
      deferred.resolve('no jobs');
    }
    else if(index < 0 || index >= _this.jobs.length) {
      deferred.reject('job index is out of area');
    }
    else {
      const job = _this.jobs[index];
      // job cursor
      _this.cursor = index;
      job.run().then(function(data){
        const nextJobIndex = index + 1;
        _this.dataArray[index] = data;
        if(nextJobIndex < _this.jobs.length) {
          setTimeout(function(){
            _this.run(nextJobIndex).then(function(data){
              deferred.resolve(data);
            }).catch(function(error){
              deferred.reject(error);
            });
          }, _this.setting.interval);
        }
        else {
          deferred.resolve(`worker have done all its ${_this.jobs.length} jobs`);
        }
      }).catch(function(error){
        deferred.reject(error);
      });
    }
    return deferred.promise;
  }
}

module.exports = Worker;

