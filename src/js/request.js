var x = document.querySelector(".submenu_down");
var rotate;
x.onclick = function () {
  if (x.classList.length === 1) {
    document.querySelector(".request_submenu").style.display = "none";
    x.classList.add("close");
  } else if (x.classList.length === 2) {
    document.querySelector(".request_submenu").style.display = "block";
    x.classList.remove("close");
  }
};
