function StopWatch() {
  let isRunning = false;
  let duration = 0;
  let startTime = null;
  let endTime = null;

  this.start = function () {
    if (isRunning) throw new Error("StopWatch is already running!");
    isRunning = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!isRunning) throw new Error("StopWatch is not started");
    isRunning = false;
    endTime = new Date();
    duration = endTime.getSeconds() - startTime.getSeconds();

    // new Date().getSeconds()
  };

  this.reset = function () {
    duration = 0;
    isRunning = false;
    startTime = null;
    endTime = null;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const sw = new StopWatch();
sw.start();
setTimeout(() => {
  sw.stop();
  console.log(sw.duration);
}, 5000);
