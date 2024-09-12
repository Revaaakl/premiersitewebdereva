const scrollBtn = document.querySelector('.scroll-button1');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollBtn.classList.add('active');
    } else {
        scrollBtn.classList.remove('active');
    }
});