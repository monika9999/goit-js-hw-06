const inputText = document.getElementById("name-input");
const noText = document.getElementById("name-output");

const name = (event) => {
  if (event.currentTarget.value) {
    noText.textContent = event.currentTarget.value;
  } else noText.textContent = "Anonymous";
};

inputText.addEventListener("input", name);
