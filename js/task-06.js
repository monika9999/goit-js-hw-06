const input = document.querySelector("#validation-input");

const checkLength = () => {
  if (input.value.length === Number(input.dataset.length)) {
    input.className = "valid";
  } else input.className = "invalid";
};

input.addEventListener("blur", checkLength);
