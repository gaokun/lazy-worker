# lazy-worker

  ![npm (scoped)](https://img.shields.io/npm/v/@cycle/core.svg)
  ![npm](https://img.shields.io/npm/l/express.svg)

## What is lazy-wokrer?
A lazy worker need to <b>`have a rest`</b> between jobs.

## What scenario need lazy-worker?
> Like a web spider, target website has firewall to forbid we access it frequently in short time.

## Installation
`npm install lazy-worker`

## How to use it?

```js
const { Job, Worker } = require('lazy-worker');

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
```

## Contact Me
Email: kytogether@vip.qq.com

## License
Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).

[npm-image]: https://img.shields.io/npm/v/@cycle/core.svg
[npm-url]: https://www.npmjs.com/package/lazy-worker

