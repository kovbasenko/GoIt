const inputRef = document.getElementById("font-size-control");
const textRef = document.getElementById("text");

console.dir(inputRef);

const fontSizeChange = function () {
  textRef.style.fontSize = `${inputRef.value}px`;
};

inputRef.addEventListener("input", fontSizeChange);
