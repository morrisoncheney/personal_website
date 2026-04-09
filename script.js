// Auto-fill current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Animate skill bars on scroll into view
const bars = document.querySelectorAll('.skill-bar');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.getAttribute('data-width') || entry.target.style.width;
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

bars.forEach(bar => {
  const targetWidth = bar.style.width;
  bar.setAttribute('data-width', targetWidth);
  bar.style.width = '0%';
  observer.observe(bar);
});

// Smooth active nav link highlighting
const sections = document.querySelectorAll('.sheet-section');
const navLinks = document.querySelectorAll('.scroll-nav a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}`
          ? 'var(--gold)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));
