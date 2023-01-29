var sec = 0;
var min = 0;
var hrs = 0;

var interval;

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function start() {
  interval = setInterval(time, 1000);
}

function stop() {
  clearInterval(interval);
}

function reset() {
  clearInterval(interval);
  sec = 0;
  min = 0;
  hrs = 0;
  document.getElementById("time").innerText = "00:00:00";
}

function time() {
  sec++;
  if (sec == 60) {
    sec = 0;
    min++;
    if (min == 60) {
      min = 0;
      hrs++;
    }
  }
  document.getElementById("time").innerText = addZero(hrs) + ":" + addZero(min) + ":" + addZero(sec);
}
