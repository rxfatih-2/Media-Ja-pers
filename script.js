document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  const form = document.getElementById('subscribeForm');
  const email = document.getElementById('emailInput');
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      email.style.outline = '2px solid #e11d2e';
      setTimeout(() => (email.style.outline = ''), 1500);
      return;
    }
    const btn = form.querySelector('button');
    const original = btn.textContent;
    btn.textContent = '✓ Terdaftar!';
    btn.style.background = '#0d0d0f';
    email.value = '';
    setTimeout(() => { btn.textContent = original; btn.style.background = ''; }, 2500);
  });
});
