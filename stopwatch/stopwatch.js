let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let stp;
let started = false;
document.getElementById("start").addEventListener("click", function () {
  stp = false;
  if (started) return;
  started = true;

  function run() {
    miliseconds = miliseconds + 1;
    if (miliseconds == 100) {
      miliseconds = 0;
      seconds = seconds + 1;
    }
    if (seconds == 60) {
      seconds = 0;
      minutes = minutes + 1;
    }
    if (minutes == 60) {
      minutes = 0;
      hours = hours + 1;
    }

    let a = `${hours > 9 ? hours : "0" + hours}:${
      minutes > 9 ? minutes : "0" + minutes
    }:${seconds > 9 ? seconds : "0" + seconds}:${
      miliseconds > 9 ? miliseconds : "0" + miliseconds
    }`;
    document.getElementById("screen").textContent = a;
  }

  if (stp == false) {
    interval = setInterval(run, 10);
  }
});
document.getElementById("stop").addEventListener("click", function () {
  stp = true;
  clearInterval(interval);
  started = false;
});
document.getElementById("reset").addEventListener("click", function () {
  clearInterval(interval);
  stp = true;
  miliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  let b = `00:00:00:00`;
  document.getElementById("screen").textContent = b;
  started = false;
});
