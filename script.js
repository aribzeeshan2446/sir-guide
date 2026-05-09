document.addEventListener('DOMContentLoaded', () => {

  // ——— Sticky nav shadow on scroll ———
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  // ——— Mobile menu toggle ———
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('open');
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      mobileMenu.classList.remove('open');
    });
  });

  // ——— Scroll reveal animations ———
  const reveals = document.querySelectorAll(
    '.step-block, .scenario, .doc-item, .summary-step, .doc-notice, .urgency-inner'
  );

  // Add the reveal class
  reveals.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach((el, i) => {
    // Stagger sibling animations slightly
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
    observer.observe(el);
  });

});
