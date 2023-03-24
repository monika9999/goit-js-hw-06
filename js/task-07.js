const size = document.getElementById(`font-size-control`);
const text = document.getElementById(`text`);

const newSize = () => {
  text.style.fontSize = `${size.value}px`;
};

size.addEventListener("input", newSize);
