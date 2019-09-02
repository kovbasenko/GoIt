const inputRef = document.getElementById("name-input");
const outputRef = document.getElementById("name-output");

const changeText = function () {
  if (inputRef.value != "") {
    outputRef.textContent = inputRef.value;
  } else outputRef.textContent = "незнакомец";
};

inputRef.addEventListener("input", changeText);
