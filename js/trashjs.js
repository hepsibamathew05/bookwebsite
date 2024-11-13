let currentCarouselSlide = 0;
const carousel = document.querySelector(".carousel");
const carouselPrevButton = document.querySelector(".carousel-prev-button");
const carouselNextButton = document.querySelector(".carousel-next-button");
const carouselSlideCount = document.querySelectorAll(".cover").length;
const carouselSlideWidth = 100; // Adjust this value to match your cover image width

function showCarouselSlide(n) {
    currentCarouselSlide = (n + carouselSlideCount) % carouselSlideCount;
    const translateX = -currentCarouselSlide * carouselSlideWidth;
    carousel.style.transform = `translateX(${translateX}%)`;
}

function changeCarouselSlide(n) {
    showCarouselSlide(currentCarouselSlide + n);
}

carouselPrevButton.addEventListener("click", function () {
    changeCarouselSlide(-1);
});

carouselNextButton.addEventListener("click", function () {
    changeCarouselSlide(1);
});

showCarouselSlide(currentCarouselSlide);


let currentSlide = 0;
const slides = document.querySelector(".images");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const slideCount = document.querySelectorAll(".photo").length;

function showSlide(n) {
    currentSlide = (n + slideCount) % slideCount; // Ensure the slide index wraps around
    const translateX = -currentSlide * 25; // 25% for each slide
    slides.style.transform = `translateX(${translateX}%)`;
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

prevButton.addEventListener("click", function() {
    changeSlide(-1);
});

nextButton.addEventListener("click", function() {
    changeSlide(1);
});

showSlide(currentSlide);
