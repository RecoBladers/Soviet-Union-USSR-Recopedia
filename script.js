document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll to top functionality
  const backToTop = document.querySelector('a[href="#"]');
  
  if (backToTop) {
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  console.log('Recopedia Soviet Union site loaded successfully.');

  // 2. Animate header on load (making it fade and slide into place)
  const header = document.querySelector('header');
  
  if (header) {
    header.style.opacity = 0;
    header.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
      header.style.transition = 'opacity 1s ease, transform 1s ease';
      header.style.opacity = 1;
      header.style.transform = 'translateY(0)';
    }, 100);
  }

  // 3. Scroll reveal effect for sections
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
  revealOnScroll(); // Ensure sections are revealed as soon as the page loads

  // 4. Optional: Add a "back to top" button at the bottom that shows up after scrolling
  const backToTopButton = document.createElement('button');
  backToTopButton.textContent = '↑ Back to Top';
  backToTopButton.classList.add('back-to-top-btn');
  document.body.appendChild(backToTopButton);

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Make sure the "Back to Top" button is only visible after scrolling
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
});
