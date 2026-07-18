const hamburger = document.getElementById('hamburger')
const nav = document.getElementById('nav')


hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open')
});

document.querySelectorAll('.nav a').forEach(function(link) {
    link.addEventListener('click', function() {
        hamburger.classList.remove('open');
        nav.classList.remove('open')
    });
});

const header = document.getElementById('header');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        header.classList.add(scrolled);
    } else {
        header.classList.remove('scrolled')
    }
})

document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

