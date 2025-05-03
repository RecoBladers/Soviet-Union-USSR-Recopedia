// script.js

document.addEventListener('DOMContentLoaded', () => {
  const backToTop = document.querySelector('a[href="#"]');

  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  console.log('Recopedia Soviet Union site loaded successfully.');

  // Optional: Animate header on load
  const header = document.querySelector('header');
  header.style.opacity = 0;
  header.style.transform = 'translateY(-20px)';
  setTimeout(() => {
    header.style.transition = 'opacity 1s ease, transform 1s ease';
    header.style.opacity = 1;
    header.style.transform = 'translateY(0)';
  }, 100);

  // Scroll reveal effect for sections
  const sections = document.querySelectorAll('section');
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach((sec) => {
      const boxTop = sec.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        sec.classList.add('show');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});
