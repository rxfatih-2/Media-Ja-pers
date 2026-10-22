/* ===== HAMBURGER DRAWER ===== */
const hamburger = document.getElementById('hamburger');
const drawer = document.getElementById('drawer');
const backdrop = document.getElementById('drawerBackdrop');

function openDrawer() {
  drawer.classList.add('open');
  backdrop.classList.add('show');
  hamburger.classList.add('active');
  hamburger.setAttribute('aria-expanded', 'true');
  drawer.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  drawer.classList.remove('open');
  backdrop.classList.remove('show');
  hamburger.classList.remove('active');
  hamburger.setAttribute('aria-expanded', 'false');
  drawer.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  drawer.classList.contains('open') ? closeDrawer() : openDrawer();
});
backdrop.addEventListener('click', closeDrawer);

document.querySelectorAll('[data-nav]').forEach(link => {
  link.addEventListener('click', closeDrawer);
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
});

/* ===== WHATSAPP ===== */
document.getElementById('waBtn').addEventListener('click', e => {
  e.preventDefault();
  const nomor = '628818217251'; // ganti nomor panitia
  const pesan = encodeURIComponent(
    "Halo Media Ja'pers, saya ingin bertanya / bekerja sama terkait pemberitaan dan konten video."
  );
  window.open(`https://wa.me/${nomor}?text=${pesan}`, '_blank', 'noopener');
});

/* ===== REVEAL ON SCROLL ===== */
const revealTargets = document.querySelectorAll(
  '.section-head, .banner-card, .video-card, .photo-card, .channel-section .container, .contact-section .container'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealTargets.forEach(el => observer.observe(el));
