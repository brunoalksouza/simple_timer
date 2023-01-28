var sec = 0;
var min = 0;
var hrs = 0;

function start() {
  setInterval(time, 1000);
}

function stop() {
  console.log("stop");
}

function reset() {
  console.log("reset");
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
  document.getElementById("time").innerText = hrs + ":" + min + ":" + sec;
}
