const counterRef = document.querySelector("#value");

const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]'
);

const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]'
);

let counterValue = parseInt(counterRef.textContent);

const increment = () => (
  (counterValue += 1), (counterRef.textContent = counterValue)
);

const decrement = () => (
  (counterValue -= 1), (counterRef.textContent = counterValue)
);

incrementBtnRef.addEventListener("click", increment);
decrementBtnRef.addEventListener("click", decrement);
