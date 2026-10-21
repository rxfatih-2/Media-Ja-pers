(function () {
  "use strict";

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  function closeNav() {
    navToggle.classList.remove("open");
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      const isOpen = navMenu.classList.toggle("open");
      navToggle.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    navMenu.querySelectorAll(".nav-link").forEach((l) => l.addEventListener("click", closeNav));
    document.addEventListener("click", (e) => {
      if (navMenu.classList.contains("open") && !navMenu.contains(e.target) && !navToggle.contains(e.target)) closeNav();
    });
  }const header = document.getElementById("siteHeader");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
}, { passive: true });

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + id);
      });
    }
  });
}, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

sections.forEach((s) => observer.observe(s));  const modal = document.getElementById("videoModal");
  const player = document.getElementById("modalPlayer");
  const thumbs = document.querySelectorAll(".video-thumb");

  function openVideo(videoId) {
    if (!modal || !player) return;
    player.innerHTML = '<iframe src="https://www.youtube.com/embed/' + videoId +
      '?autoplay=1&rel=0" title="Pemutar video" ' +
      'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ' +
      'allowfullscreen></iframe>';
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeVideo() {
    if (!modal || !player) return;
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    player.innerHTML = "";
    document.body.style.overflow = "";
  }

  thumbs.forEach((t) => {
    t.addEventListener("click", () => {
      const id = t.getAttribute("data-video");
      if (id) openVideo(id);
    });
  });

  modal.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", closeVideo));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) closeVideo();
  });

  document.querySelectorAll(".video-thumb img").forEach((img) => {
    img.addEventListener("error", () => {
      img.src = "data:image/svg+xml;utf8," + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="480" height="270">' +
        '<rect width="100%" height="100%" fill="#161f2b"/>' +
        '<text x="50%" y="50%" fill="#9aa8b8" font-family="Arial" font-size="16" text-anchor="middle" dominant-baseline="middle">Media Ja\'pers</text></svg>'
      );
    });
  });
})();  const modal = document.getElementById("videoModal");
  const player = document.getElementById("modalPlayer");
  const thumbs = document.querySelectorAll(".video-thumb");

  function openVideo(videoId) {
    if (!modal || !player) return;
    player.innerHTML = '<iframe src="https://www.youtube.com/embed/' + videoId +
      '?autoplay=1&rel=0" title="Pemutar video" ' +
      'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ' +
      'allowfullscreen></iframe>';
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeVideo() {
    if (!modal || !player) return;
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    player.innerHTML = "";
    document.body.style.overflow = "";
  }

  thumbs.forEach((t) => {
    t.addEventListener("click", () => {
      const id = t.getAttribute("data-video");
      if (id) openVideo(id);
    });
  });

  modal.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", closeVideo));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) closeVideo();
  });

  document.querySelectorAll(".video-thumb img").forEach((img) => {
    img.addEventListener("error", () => {
      img.src = "data:image/svg+xml;utf8," + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="480" height="270">' +
        '<rect width="100%" height="100%" fill="#161f2b"/>' +
        '<text x="50%" y="50%" fill="#9aa8b8" font-family="Arial" font-size="16" text-anchor="middle" dominant-baseline="middle">Media Ja\'pers</text></svg>'
      );
    });
  });
})();
