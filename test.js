
const { Job, Worker } = require('./index');

// 1. create a lazy worker, tell him how lazy he is.
let worker = new Worker({ interval: 500 });

for (let i = 0; i < 10; ++i) {
  // 2. define a job whatever you want
  const job = new Job(() => {
    console.log(`run job ${i}, at ${Date.now()}`);
    return new Promise((resolve, reject) => {
      resolve(`result of job ${i}`);
    });
  });
  // push it into worker
  worker.push(job);
}

// 3. let worker help you to run the jobs one by one
worker.run().then((msg) => {
  console.log(msg);
  console.log(worker.dataArray);
}).catch((e) => {
  console.error(e);
});
