let currentSlide = 0;
const slides = document.querySelector(".images");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const slideCount = document.querySelectorAll(".photo").length;

const currentCarouselSlide = 0;
const carouselSlides = document.querySelector(".carousel");
const carouselPrevButton = document.querySelector(".carousel-prev-button");
const carouselNextButton = document.querySelector(".carousel-next-button");
const carouselSlideCount = document.querySelectorAll(".cover").length;

function showSlide(n, element) {
  const slideCount = element.querySelectorAll(".photo").length;
  currentSlide = (n + slideCount) % slideCount; // Ensure the slide index wraps around
  const translateX = -currentSlide * 25; // 25% for each slide
  element.style.transform = `translateX(${translateX}%)`;
}

function showCarouselSlide(n) {
  currentCarouselSlide = (n + carouselSlideCount) % carouselSlideCount;
  const translateX = -currentCarouselSlide * 50; // 50% for each cover
  carouselSlides.style.transform = `translateX(${translateX}%)`;
}

function changeSlide(n, element) {
  showSlide(currentSlide + n, element);
}

function changeCarouselSlide(n) {
  showCarouselSlide(currentCarouselSlide + n);
}

prevButton.addEventListener("click", function () {
  changeSlide(-1, slides);
});

nextButton.addEventListener("click", function () {
  changeSlide(1, slides);
});

carouselPrevButton.addEventListener("click", function () {
  changeCarouselSlide(-1);
});

carouselNextButton.addEventListener("click", function () {
  changeCarouselSlide(1);
});

showSlide(currentSlide, slides);
showCarouselSlide(currentCarouselSlide);
