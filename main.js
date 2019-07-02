const clockTick = () => {
  const now = getTime();
  const delta = (now - lastUpdate) / FRAME_DURATION;
  lastUpdate = now;

  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  if (h < 10) { h = "0" + h; }
  if (m < 10) { m = "0" + m; }
  if (s < 10) { s = "0" + s; }

  var h2 = h - 4;
  if (h2 < 0) { h2 = 24 + h2; }
  else if (h2 < 10) {h2 = "0" + h2; }

  time1.innerHTML = `${h}:${m}`;
  secs1.innerHTML = `:${s}`;
  time2.innerHTML = `${h2}:${m}`;
  secs2.innerHTML = `:${s}`;
};

const startClock = () => {
  lastUpdate = getTime();
  runClock = setInterval(function() {
    clockTick();
  }, 1000);
};

const FRAME_DURATION = 1000;
const getTime = typeof performance === 'function' ? performance.now : Date.now;
let lastUpdate = getTime();

let time1 = document.getElementById('time1');
let secs1 = document.getElementById('secs1');
let time2 = document.getElementById('time2');
let secs2 = document.getElementById('secs2');

startClock();
