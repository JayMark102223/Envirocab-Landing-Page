const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let current = 0;

function updateSlider() {
  slides.forEach((slide, index) => {
    slide.classList.remove("active", "prev", "next", "hidden");

    if (index === current) {
      slide.classList.add("active");
    } else if (index === (current - 1 + slides.length) % slides.length) {
      slide.classList.add("prev");
    } else if (index === (current + 1) % slides.length) {
      slide.classList.add("next");
    } else {
      slide.classList.add("hidden");
    }
  });
}

nextBtn.addEventListener("click", () => {
  current = (current + 1) % slides.length;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  updateSlider();
});

updateSlider();






