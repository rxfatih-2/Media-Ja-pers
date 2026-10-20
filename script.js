document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

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

  const sections = document.querySelectorAll('section[id]');
  const links = navLinks.querySelectorAll('a');
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute('id');
      const link = navLinks.querySelector(`a[href="#${id}"]`);
      if (!link) return;
      if (scrollPos >= top && scrollPos < bottom) {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { passive: true });

  const heroVideo = document.getElementById('heroVideo');
  if (heroVideo) heroVideo.play().catch(() => {});const modal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideo');
  const modalTitle = document.getElementById('modalTitle');
  const modalClose = document.getElementById('modalClose');

  const sampleVideos = [
    'https://cdn.coverr.co/videos/coverr-a-man-working-on-a-laptop-1573/1080p.mp4',
    'https://cdn.coverr.co/videos/coverr-typing-on-a-laptop-1575/1080p.mp4',
    'https://cdn.coverr.co/videos/coverr-a-city-at-night-1579/1080p.mp4'
  ];

  const openModal = (index, title) => {
    modalVideo.src = sampleVideos[index % sampleVideos.length];
    modalTitle.textContent = title || "Video Ja'pers";
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalVideo.play().catch(() => {});
  };
  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    modalVideo.pause();
    modalVideo.removeAttribute('src');
    modalVideo.load();
  };

  document.querySelectorAll('[data-video]').forEach((card, index) => {
    card.addEventListener('click', () => {
      const title = card.querySelector('h3')?.textContent || '';
      openModal(index, title);
    });
  });
  modalClose.addEventListener('click', closeModal);
  modal.querySelector('[data-close]').addEventListener('click', closeModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  const subscribeForm = document.getElementById('subscribeForm');
  const emailInput = document.getElementById('emailInput');
  subscribeForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = emailInput.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailInput.style.outline = '2px solid #e11d2e';
      setTimeout(() => (emailInput.style.outline = ''), 1500);
      return;
    }
    const btn = subscribeForm.querySelector('button');
    const original = btn.textContent;
    btn.textContent = '✓ Terdaftar!';
    btn.style.background = '#0d0d0f';
    emailInput.value = '';
    setTimeout(() => { btn.textContent = original; btn.style.background = ''; }, 2500);
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  const targets = document.querySelectorAll('.video-card, .trend-item, .stat-card, .about-text, .contact-box');
  targets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .6s ease, transform .6s cubic-bezier(.4,0,.2,1)';
  });
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  targets.forEach(el => observer.observe(el));
});
