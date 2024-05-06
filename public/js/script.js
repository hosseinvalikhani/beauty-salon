const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.querySelector(".logo");
const body = document.querySelector("body");
btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
  logo.classList.toggle("flex");
  logo.classList.toggle("hidden");
  body.classList.toggle("overflow-hidden");
}

const slides = document.querySelectorAll(".slide");
const dotContainer = document.querySelector(".dots");
const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

createDots();

const activateDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};
activateDot(0);

const goToSlide = function (slide) {
  slides.forEach((s) => s.classList.add("hidden"));
  document
    .querySelector(`.slide[data-slide="${slide}"]`)
    .classList.remove("hidden");
  document.querySelector(`.slide[data-slide="${slide}"]`).classList.add("flex");
};

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});

let curSlide = 0;
const maxSlide = slides.length;
// Next slide
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
  activateDot(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide();
  if (e.key === "ArrowRight") nextSlide();
});

// mobile version
const slidesMob = document.querySelectorAll(".slide-mob");
const dotContainerMob = document.querySelector(".dots-mob");
const createDotsMob = function () {
  slidesMob.forEach(function (_, i) {
    dotContainerMob.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot__mob" data-slide="${i}"></button>`
    );
  });
};

createDotsMob();

const activateDotMob = function (slide) {
  document
    .querySelectorAll(".dots__dot__mob")
    .forEach((dot) => dot.classList.remove("dots__dot__mob--active"));

  document
    .querySelector(`.dots__dot__mob[data-slide="${slide}"]`)
    .classList.add("dots__dot__mob--active");
};

activateDotMob(0);

const goToSlideMob = function (slide) {
  slidesMob.forEach((s) => s.classList.add("hidden"));
  console.log(document.querySelector(`.slide-mob[data-slide="${slide}"]`));
  try {
    document
      .querySelector(`.slide-mob[data-slide="${slide}"]`)
      .classList.remove("hidden");
    document
      .querySelector(`.slide-mob[data-slide="${slide}"]`)
      .classList.add("flex-col");
  } catch (error) {
    console.log(error);
  }
};
goToSlideMob(0);

dotContainerMob.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot__mob")) {
    const { slide } = e.target.dataset;
    activateDotMob(slide);
    goToSlideMob(slide);
  }
});

const btnLeft = document.querySelector(".left");
const btnRight = document.querySelector(".right");
console.log(btnLeft, btnRight);

let curSlideMob = 0;
const maxSlideMob = slidesMob.length;

// Next slide
const nextSlideMob = function () {
  if (curSlideMob === maxSlideMob - 1) {
    curSlideMob = 0;
  } else {
    curSlideMob++;
  }

  goToSlideMob(curSlideMob);
  activateDotMob(curSlideMob);
};

const prevSlideMob = function () {
  if (curSlideMob === 0) {
    curSlideMob = maxSlideMob - 1;
  } else {
    curSlideMob--;
  }
  goToSlideMob(curSlideMob);
  activateDotMob(curSlideMob);
};

btnRight.addEventListener("click", nextSlideMob);
btnLeft.addEventListener("click", prevSlideMob);
