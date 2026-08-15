document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll effect
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // 3. Reveal elements on scroll
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Stop observing once revealed
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // 4. Stats Counter Animation
  const stats = document.querySelectorAll('.stat-number');
  const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-target'), 10);
        animateCounter(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  stats.forEach(stat => {
    statsObserver.observe(stat);
  });

  function animateCounter(element, target) {
    let count = 0;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // ~60fps
    
    function updateCount() {
      count += increment;
      if (count < target) {
        element.innerText = Math.floor(count) + '+';
        requestAnimationFrame(updateCount);
      } else {
        element.innerText = target + '+';
      }
    }
    updateCount();
  }

  // 5. Active link update on scroll
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-links a:not(.cta-btn)');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href').slice(1) === current) {
        item.classList.add('active');
      }
    });
  });

  // 6. Our Work Lightbox
  const wlModal = document.getElementById('work-lightbox');
  const wlIframe = document.getElementById('wl-iframe');
  const wlClose = document.getElementById('wl-close');
  const wlBackdrop = document.getElementById('wl-backdrop');
  const workCards = document.querySelectorAll('.work-card');

  function openLightbox(videoSrc) {
    if (wlModal && wlIframe) {
      wlIframe.src = videoSrc + '?autoplay=1';
      wlModal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Stop background scrolling
    }
  }

  function closeLightbox() {
    if (wlModal && wlIframe) {
      wlModal.classList.remove('active');
      wlIframe.src = '';
      document.body.style.overflow = '';
    }
  }

  // Setup click listeners for each card
  workCards.forEach(card => {
    card.addEventListener('click', () => {
      const src = card.getAttribute('data-src');
      if (src) openLightbox(src);
    });

    // Keyboard support for accessibility
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const src = card.getAttribute('data-src');
        if (src) openLightbox(src);
      }
    });
  });

  if (wlClose) wlClose.addEventListener('click', closeLightbox);
  if (wlBackdrop) wlBackdrop.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
});
