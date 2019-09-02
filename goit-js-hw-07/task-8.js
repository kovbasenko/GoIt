const inputRef = document.querySelector("#controls > input");
const createButtonRef = document.querySelector('button[data-action="render"]');
const clearButtonRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.getElementById("boxes");

function rgb() {
  let r, g, b;
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

let boxes = [];

const createBoxes = function () {
  const amount = parseInt(inputRef.value);

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = rgb();
    if (boxes.length === 0) {
      div.style.width = "30px";
      div.style.height = "30px";
      boxes = [...boxes, div];
      continue;
    }
    div.style.width = parseInt(boxes[boxes.length - 1].style.width) + 10 + "px";
    div.style.height =
      parseInt(boxes[boxes.length - 1].style.height) + 10 + "px";
    boxes = [...boxes, div];
  }
  boxesRef.append(...boxes);
};

const clearDOM = function () {
  while (boxesRef.firstChild) {
    boxesRef.removeChild(boxesRef.firstChild);
  }
};

createButtonRef.addEventListener("click", createBoxes);

clearButtonRef.addEventListener("click", clearDOM);
