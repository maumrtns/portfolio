// Menu mobile 
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// fechar menu ao clickar no link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// animação de entrada nas seções (IntersectionObserver)
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach(sec => observer.observe(sec));

//ano corespondente no footer

const year = document.getElementById('year');

if (year) {
    year.textContent = new Date().getFullYear();
}

// form de contato teste

const form = document.getElementById('contactForm');

if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        alert('Mensagem enviada! (demo - ainda sem o backend');

        form.reset();
    });
}

