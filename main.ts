document.addEventListener('DOMContentLoaded', () => {
  // Animação de entrada dos cards, botões e seções ao rolar
  const animatedElements = document.querySelectorAll('.projeto-card, .habilidade-card, .btn, section, .discord-card');
  animatedElements.forEach(el => {
    (el as HTMLElement).classList.add('hidden-anim');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  animatedElements.forEach(el => {
    observer.observe(el);
  });

  // Highlight do menu ao rolar
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = (section as HTMLElement).offsetTop - 80;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id') || '';
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Alternância de tema dark/light
  const toggleThemeBtn = document.getElementById('toggle-theme');
  const iconMoon = '<span class="icon-moon"></span>';
  const iconSun = '<span class="icon-sun"></span>';
  function setTheme(light: boolean) {
    if (light) {
      document.body.classList.add('light-mode');
      if (toggleThemeBtn) toggleThemeBtn.innerHTML = iconSun;
    } else {
      document.body.classList.remove('light-mode');
      if (toggleThemeBtn) toggleThemeBtn.innerHTML = iconMoon;
    }
  }
  let isLight = false;
  if (toggleThemeBtn) {
    toggleThemeBtn.addEventListener('click', () => {
      isLight = !isLight;
      setTheme(isLight);
    });
  }
  setTheme(isLight);
}); 