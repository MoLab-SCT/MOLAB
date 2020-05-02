var index = 0;
function slideShow() {
  let imgs = document.querySelectorAll(".img_slide_fade");
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  index++;
  if (index > imgs.length) {
    index = 1;
  }

  imgs[index - 1].style.display = "block";
  setTimeout(slideShow, 8000);
}

function slideMove() {
  var slideRarr = document.querySelectorAll("#slide_right_arrow");
  var slideLarr = document.querySelectorAll("#slide_left_arrow");

  slideRarr[0].onclick = function () {
    move(1);
  };

  slideLarr[0].onclick = function () {
    move(-1);
  };

  function move(n) {
    let imgs = document.querySelectorAll(".img_slide_fade");
    let current;
    for (let i = 0; i < imgs.length; i++) {
      if (imgs[i].style.display === "block") {
        imgs[i].style.display = "none";
        current = i;
        break;
      }
    }

    if (n + current >= imgs.length) {
      imgs[0].style.display = "block";
    } else if (n + current < 0) {
      imgs[imgs.length - 1].style.display = "block";
    } else {
      imgs[n + current].style.display = "block";
    }
  }
}

window.onload = function () {
  slideShow();
  slideMove();
};
