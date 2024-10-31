const input = document.querySelector(".form-section__form");
const button = document.querySelector(".form-section__button");
const errorText = document.querySelector(".form-section__error-text");
const validation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

button.addEventListener("click", () => {
  if (input.value == "") {
    input.classList.add("error");
    errorText.style.color = "hsl(354, 100%, 66%)";
    errorText.style.display = "block";
    errorText.innerText = "Please provide an email address";
  } else if (!validation.test(input.value)) {
    input.classList.add("error");
    errorText.style.color = "hsl(354, 100%, 66%)";
    errorText.style.display = "block";
    errorText.innerText = "Please provide a valid email address";
  } else if (validation.test(input.value)) {
    input.classList.remove("error");
    errorText.style.color = "hsl(209, 33%, 12%)";
    errorText.style.display = "block";
    errorText.innerText = "Success!";

    setTimeout(() => {
      location.reload();
    }, 3000);
  }
});
