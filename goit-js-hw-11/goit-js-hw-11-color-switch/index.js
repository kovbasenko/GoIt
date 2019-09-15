const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector("body"),
};

let intervalId = 0;

function colorChange() {
  const color = randomIntegerFromInterval(0, 5);
  refs.body.style.backgroundColor = colors[color];
}

function colorStart() {
  intervalId = setInterval(colorChange, 1000);
  refs.start.removeEventListener("click", colorStart);
  refs.stop.addEventListener("click", colorStop);
}

function colorStop() {
  clearInterval(intervalId);
  refs.start.addEventListener("click", colorStart);
  refs.stop.removeEventListener("click", colorStop);
}

refs.start.addEventListener("click", colorStart);
