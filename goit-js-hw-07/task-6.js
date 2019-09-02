const inputRef = document.getElementById("validation-input");
console.dir(inputRef);

const inputValidation = function () {
  if (
    inputRef.value.length === parseInt(inputRef.getAttribute("data-length"))
  ) {
    !inputRef.classList.contains("invalid")
      ? inputRef.classList.add("valid")
      : inputRef.classList.replace("invalid", "valid");
  } else
    !inputRef.classList.contains("valid")
      ? inputRef.classList.add("invalid")
      : inputRef.classList.replace("valid", "invalid");
};

inputRef.addEventListener("blur", inputValidation);
