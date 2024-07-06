$(document).ready(function() {
    // Animation for the heading text
    gsap.from(".menu-section h1", { duration: 1, opacity: 0, y: -50 });
    // Animation for the text
    gsap.from(".menu-section h2", { duration: 1, opacity: 0, y: 50, delay: 0.5 });
    // Animation for the text
    gsap.from(".menu-section h3", { duration: 1, opacity: 0, y: 50, delay: 0.5 });
    // Animation for the image
    gsap.from(".image-section img", { duration: 1.5, opacity: 0, x: -100 });
});

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            if (target) {
                window.location.href = target;
            }
        });
    });
});
