const body = document.querySelector("body");

const formBtn = document.querySelector(".register_btn");

const formModal = document.querySelector(".form_modal");

const closeBtn = document.querySelector(".close");

formBtn.onclick = function () {
  formModal.style.display = "block";
  body.style.overflow = "hidden";
};

closeBtn.onclick = function () {
  formModal.style.display = "none";
  body.style.overflow = "auto";
};

window.onclick = function (event) {
  if (event.target == formModal) {
    formModal.style.display = "none";
    body.style.overflow = "auto";
  }
};
