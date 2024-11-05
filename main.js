"use strict";
const optionsEl = document.querySelector(".options");
const options = document.querySelectorAll("li");
const ratingPage = document.querySelector(".rating-page");
const thanksPage = document.querySelector(".thanks-page");
const body = document.querySelector("body");
const submitBtn = document.querySelector(".submit");
const errorMsg = document.querySelector(".error-msg");
let activeElement = null;

optionsEl.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    options.forEach((opt) => opt.classList.remove("active"));
    e.target.classList.add("active");
    activeElement = e.target;
  }
});

submitBtn.addEventListener("click", () => {
  if (!activeElement) {
    showErrorMessage();
  } else {
    submitRating();
  }
});

const submitRating = () => {
  console.log();
  body.innerHTML = "";
  const html = `
  <section class="thanks-page">
      <div class="container">
      <div class="icon-container">
          <img
          src="/images/illustration-thank-you.svg"
          alt="a creditcard and bill illustration"
          class="thanks-icon"
          />
      </div>
      <div class="rating">You selected ${activeElement.innerHTML} out of ${options.length}</div>
      <h1>Thank you!</h1>
      <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
      </p>
      </div>
  </section>
    `;
  body.insertAdjacentHTML("beforeend", html);

  setTimeout(() => {
    location.reload();
  }, 2500);
};

const showErrorMessage = () => {
  ratingPage.classList.add("active");
  errorMsg.classList.add("active");

  setTimeout(() => {
    ratingPage.classList.remove("active");
    errorMsg.classList.remove("active");
  }, 1000);
};
