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
