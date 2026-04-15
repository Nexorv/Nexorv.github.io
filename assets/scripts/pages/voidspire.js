// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// simple reveal animation
const elements = document.querySelectorAll('.vs-section, .vs-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    el.style.transition = "0.5s";
    observer.observe(el);
});