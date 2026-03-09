/* ============================================
   MAIN.JS
============================================ */

/* Mobile nav toggle */
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const icon = document.getElementById('menuIcon');
  menu.classList.toggle('open');
  icon.className = menu.classList.contains('open') ? 'bi bi-x-lg' : 'bi bi-list';
}

/* Active navbar highlight on scroll */
window.addEventListener('scroll', () => {
  let current = '';
  document.querySelectorAll('[id]').forEach(s => {
    if (window.scrollY >= s.offsetTop - 110) current = s.id;
  });
  document.querySelectorAll('.nav-link-custom').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

/* Scroll reveal */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* Team carousel dot sync */
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('teamCarousel');
  if (!carousel) return;

  carousel.addEventListener('slid.bs.carousel', e => {
    document.querySelectorAll('.dot-btn').forEach((d, i) => {
      d.classList.toggle('active', i === e.to);
    });
  });
});

function goSlide(n) {
  const carousel = document.getElementById('teamCarousel');
  bootstrap.Carousel.getInstance(carousel).to(n);
}
