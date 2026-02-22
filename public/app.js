// Respect prefers-reduced-motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Fade-in on scroll (Intersection Observer)
if (!prefersReducedMotion) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('section:not(:first-child)').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    observer.observe(section);
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Accessibility statement dialog
const dialog = document.getElementById('accessibility-statement');
if (dialog) {
  // Open
  document.querySelector('a[href="#accessibility-statement"]').addEventListener('click', (e) => {
    e.preventDefault();
    dialog.showModal();
  });
  // Close button
  dialog.querySelector('.a11y-dialog-close').addEventListener('click', () => dialog.close());
  // Close on backdrop click
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });
}
