let counterValue = 0;
const value = document.getElementById(`value`);
const minBtn = document.querySelector(`button[data-action="decrement"]`);
const plusBtn = document.querySelector(`button[data-action="increment"]`);

const increment = () => {
  counterValue++;
  display();
};
plusBtn.addEventListener("click", increment);

const decrement = () => {
  counterValue--;
  display();
};
minBtn.addEventListener("click", decrement);

function display() {
  value.innerHTML = counterValue;
}
