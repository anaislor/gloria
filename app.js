const storyTelling = document.querySelectorAll("#storyTelling li");
const firstScreen = document.getElementById("firstScreen");
const advantages = document.querySelectorAll(".advantage");
const sliderPoint = document.querySelectorAll(".slider.shoes .fa-circle");
const sliderShoes = document.querySelector(".slider.shoes");
const sliderPointHeels = document.querySelectorAll(".slider.heels .fa-circle");
const sliderHeels = document.querySelector(".slider.heels");
const sliderPointResult = document.querySelectorAll(
  ".slider.result .fa-circle"
);
const sliderResult = document.querySelector(".slider.result");

storyTelling.forEach((title, i) => {
  title.addEventListener("mouseenter", function(event) {
    if (i == 0) {
      firstScreen.style.backgroundImage = "url(./images/walk.png)";
      title.classList.add("active");
      storyTelling[1].classList.remove("active");
      storyTelling[2].classList.remove("active");
    } else if (i == 1) {
      firstScreen.style.backgroundImage = "url(./images/work.png)";
      title.classList.add("active");
      storyTelling[0].classList.remove("active");
      storyTelling[2].classList.remove("active");
    } else if (i == 2) {
      firstScreen.style.backgroundImage = "url(./images/waltz.png)";
      title.classList.add("active");
      storyTelling[0].classList.remove("active");
      storyTelling[1].classList.remove("active");
    }
  });
});

advantages.forEach(ad => {
  ad.addEventListener("mouseover", function(event) {
    document.querySelector(".advantage.middle").classList.remove("active");
  });
});

advantages.forEach(ad => {
  ad.addEventListener("mouseout", function(event) {
    document.querySelector(".advantage.middle").classList.add("active");
  });
});

function shoesResult(color, heels) {
  sliderResult.style.backgroundImage = `url(./images/${color}-${heels}.jpg`;
}

var color = "gris";
var heels = "plat";

shoesResult(color, heels);

sliderPoint.forEach((point, i) => {
  point.addEventListener("click", function(event) {
    if (i == 0) {
      sliderShoes.style.backgroundImage = "url(./images/gris.jpg)";
      color = "gris";
      point.classList.add("fas");
      sliderPoint[1].classList.remove("fas");
      sliderPoint[2].classList.remove("fas");
    } else if (i == 1) {
      sliderShoes.style.backgroundImage = "url(./images/rose.jpg)";
      color = "rose";
      point.classList.add("fas");
      sliderPoint[0].classList.remove("fas");
      sliderPoint[2].classList.remove("fas");
    } else if (i == 2) {
      sliderShoes.style.backgroundImage = "url(./images/noir.jpg)";
      color = "noir";
      point.classList.add("fas");
      sliderPoint[0].classList.remove("fas");
      sliderPoint[1].classList.remove("fas");
    }
    shoesResult(color, heels);
  });
});

sliderPointHeels.forEach((point, i) => {
  point.addEventListener("click", function(event) {
    if (i == 0) {
      sliderHeels.style.backgroundImage = "url(./images/plat.jpg)";
      heels = "plat";
      point.classList.add("fas");
      sliderPointHeels[1].classList.remove("fas");
      sliderPointHeels[2].classList.remove("fas");
    } else if (i == 1) {
      sliderHeels.style.backgroundImage = "url(./images/moyen.jpg)";
      heels = "moyen";
      point.classList.add("fas");
      sliderPointHeels[0].classList.remove("fas");
      sliderPointHeels[2].classList.remove("fas");
    } else if (i == 2) {
      sliderHeels.style.backgroundImage = "url(./images/haut.jpg)";
      heels = "haut";
      point.classList.add("fas");
      sliderPointHeels[0].classList.remove("fas");
      sliderPointHeels[1].classList.remove("fas");
    }
    shoesResult(color, heels);
  });
});
