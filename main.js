document.addEventListener('DOMContentLoaded', function () {
    // Animação de entrada dos cards
    var cards = document.querySelectorAll('.projeto-card');
    cards.forEach(function (card, i) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        setTimeout(function () {
            card.style.transition = 'opacity 0.7s cubic-bezier(.4,2,.6,1), transform 0.7s cubic-bezier(.4,2,.6,1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 + i * 120);
    });
    // Highlight do menu ao rolar
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', function () {
        var current = '';
        sections.forEach(function (section) {
            var sectionTop = section.offsetTop - 80;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id') || '';
            }
        });
        navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === "#".concat(current)) {
                link.classList.add('active');
            }
        });
    });
});
