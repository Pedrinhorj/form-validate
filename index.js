const isValidEmail = (email) => {
  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  return regex.test(String(email).toLowerCase());
};

const form = document.querySelector("form");
const inputName = document.querySelector("input[name='name']");
const inputEmail = document.querySelector("input[name='email']");
const errorMessage = document.querySelector(".error");
const errorMessageE = document.querySelector(".error-hidden-e");
let message = document.querySelector(".thanks");

let isValidForm = false;

const validateInput = () => {
  isValidForm = true;
  if (!inputName.value) {
    inputName.classList.add("invalid");
    errorMessage.classList.remove("error-hidden");
    isValidForm = false;
  } else {
    inputName.classList.remove("invalid");
    errorMessage.classList.add("error-hidden");
  }
  if (!inputEmail.value || !isValidEmail(inputEmail.value)) {
    inputEmail.classList.add("invalid");
    errorMessageE.classList.remove("error-hidden-e");
    isValidForm = false;
  } else {
    inputEmail.classList.remove("invalid");
    errorMessageE.classList.add("error-hidden-e");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInput();
  if (isValidForm) {
    form.remove();
    message.classList.remove("error-hidden");
    console.log("Validou enviou");
  }
});

const resetInput = (input) => {
  input.classList.remove("invalid");
  if (input === inputName) {
    errorMessage.classList.add("error-hidden");
  } else if (input === inputEmail) {
    errorMessageE.classList.add("error-hidden-e");
  }
};

inputName.addEventListener("input", () => {
  resetInput(inputName);
  if (inputName.value) {
    errorMessage.classList.add("error-hidden");
  }
});
inputEmail.addEventListener("input", () => {
  resetInput(inputEmail);
  if (inputEmail.value && isValidEmail(inputEmail.value)) {
    errorMessageE.classList.add("error-hidden-e");
  }
});
