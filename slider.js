document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slides img');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentSlide = 0;
    let slideInterval;

    // İleri gitme işlevi
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    // Geri gitme işlevi
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    // Belirli bir slayda gitme işlevi
    function goToSlide(n) {
        slides[currentSlide].style.display = 'none';
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].style.display = 'block';
    }

    // Otomatik geçiş işlevi
    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 1000); // 2 saniyede bir geçiş yap
    }

    // Otomatik geçişi başlat
    startSlideShow();

    // Slider üzerine gelindiğinde otomatik geçişi durdur
    slides.forEach(slide => {
        slide.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
    });

    // Slider üzerinden çıkıldığında otomatik geçişi başlat
    slides.forEach(slide => {
        slide.addEventListener('mouseleave', () => {
            startSlideShow();
        });
    });

    // Önceki düğmeye tıklama olayı
    prevButton.addEventListener('click', prevSlide);

    // Sonraki düğmeye tıklama olayı
    nextButton.addEventListener('click', nextSlide);

    // İlk slaydı göster
    slides[currentSlide].style.display = 'block';
});
