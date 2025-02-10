const carousel = document.getElementById('customerCarousel');

function prevSlide() {
    const carouselInstance = bootstrap.Carousel.getInstance(carousel);
    carouselInstance.prev();
}

function nextSlide() {
    const carouselInstance = bootstrap.Carousel.getInstance(carousel);
    carouselInstance.next();
}