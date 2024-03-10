document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slides img');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentSlide = 0;
    let slideInterval;

    // next slide move
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    // previous slide
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function goToSlide(n) {
        slides[currentSlide].style.display = 'none';
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].style.display = 'block';
    }

    // auto play
    function startSlideShow() {
        // move after 1 second
        slideInterval = setInterval(nextSlide, 1000); // 
    }
    startSlideShow();

    // stop for hovering
    slides.forEach(slide => {
        slide.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
    });

    // Stop slider remove hover
    slides.forEach(slide => {
        slide.addEventListener('mouseleave', () => {
            startSlideShow();
        });
    });

    // clicks, next-prev
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    slides[currentSlide].style.display = 'block';
});
