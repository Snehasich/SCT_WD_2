const input = document.querySelector(".text");
const buttons = document.querySelectorAll(".box");
const clearBtn = document.querySelector(".boxx");
const equalBtn = document.querySelector(".box15");

input.value = "0";

// operator/no buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const val = button.textContent;
    if (input.value === "0") {
      input.value = val;
    } else {
      input.value += val;
    }
  });
});

// equal button
equalBtn.addEventListener("click", () => {
  try {
    input.value = eval(input.value);
  } catch (err) {
    input.value = "ERROR";
  }
});

// clear button
clearBtn.addEventListener("click", () => {
  input.value = "0";
});
