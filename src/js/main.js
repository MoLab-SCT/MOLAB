var index = 0;
window.onload = function slideShow() {
  let imgs = document.querySelectorAll(".img_slide_fade");
  console.log(imgs);
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  index++;
  if (index > imgs.length) {
    index = 1;
  }

  imgs[index - 1].style.display = "block";
  setTimeout(slideShow, 5000);
};

function move_img() {}
