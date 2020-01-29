let contest_form = document.querySelector(".contest__form");
let contest_success = document.querySelector(".popup--success");
let contest_error = document.querySelector(".popup--error");
let contest_error_close = document.querySelector(".popup__button--error");
let contest_success_close = document.querySelector(".popup__button--success");
let first_name = document.getElementById("first-name");
let last_name = document.getElementById("last-name");
let email = document.getElementById("email");
let contest_submit = document.querySelector(".contest__button-submit");

contest_error_close.addEventListener("click", function(evt) {
  evt.preventDefault();
  contest_error.classList.remove("popup--opened");
});

contest_success_close.addEventListener("click", function(evt) {
  evt.preventDefault();
  contest_success.classList.remove("popup--opened");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    contest_error.classList.remove("popup--opened");
    contest_success.classList.remove("popup--opened");
  }
});

contest_form.addEventListener("submit", function(evt) {
  if (!first_name.value || !last_name.value || !email.value) {
    evt.preventDefault();
    contest_error.classList.add("popup--opened")
  }
  else {
    evt.preventDefault();
    contest_success.classList.add("popup--opened")
  }
});
