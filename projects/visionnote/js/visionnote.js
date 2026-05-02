// Scroll reveal with sibling stagger
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const delay = Number(entry.target.dataset.stagger ?? 0);
      setTimeout(() => entry.target.classList.add('visible'), delay);
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.animate-on-scroll').forEach((el) => {
  const siblings = [...el.parentElement.querySelectorAll('.animate-on-scroll')];
  el.dataset.stagger = siblings.indexOf(el) * 110;
  revealObserver.observe(el);
});

// Nav border on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });
