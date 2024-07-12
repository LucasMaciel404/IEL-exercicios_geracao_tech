const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
const navDots = document.querySelectorAll('.nav-dot');
let currentIndex = 0;

function nextSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    updateSlidePosition();
    updateNavDots();
}

function updateSlidePosition() {
    const slideWidth = document.querySelector('.slide').clientWidth;
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function updateNavDots() {
    navDots.forEach(dot => dot.classList.remove('active'));
    navDots[currentIndex].classList.add('active');
}

navDots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.getAttribute('data-index'));
        updateSlidePosition();
        updateNavDots();
    });
});

setInterval(nextSlide, 3000); // Muda a cada 3 segundos
