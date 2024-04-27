const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.querySelector(".logo");

console.log(logo);
btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
  logo.classList.toggle("flex");
  logo.classList.toggle("hidden");
}

const btnFaq = document.querySelectorAll(".btn-faq");
const txtFaq = document.querySelectorAll(".faq-text");
btnFaq.forEach((button, index) => {
  button.addEventListener("click", () => {
    txtFaq.forEach((div, divIndex) => {
      console.log(div, divIndex, index);
      if (divIndex === index) {
        div.classList.toggle("hidden");
        div.classList.toggle("flex");
        // Add the 'active' class to the clicked div
      }
    });
  });
});

const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination", // Add pagination
  },
  navigation: {
    nextEl: ".swiper-button-next", // Add navigation buttons
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar", // Add a scrollbar if needed
  },
});
