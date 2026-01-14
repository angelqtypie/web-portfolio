
AOS.init({
  once: true,
  duration: 600,
  easing: 'ease-out'
});

// 2 Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) navbar.classList.add('nav-scrolled');
  else navbar.classList.remove('nav-scrolled');
});

//  Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
      // Close mobile menu if open
      const navCollapse = document.querySelector('.navbar-collapse');
      if (navCollapse.classList.contains('show')) navCollapse.classList.remove('show');
    }
  });
});


function animateCounter(element, target) {
  let current = 0;
  const increment = target / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else element.textContent = Math.floor(current);
  }, 30);
}


const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.stat-number').forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        animateCounter(stat, target);
      });
      statsObserver.unobserve(entry.target);
    }
  });
});

const statsSection = document.querySelector('.stats-section');
if (statsSection) statsObserver.observe(statsSection);


const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) backToTopButton.classList.add('show');
  else backToTopButton.classList.remove('show');
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


const yearElement = document.querySelector('footer small');
if (yearElement) {
  const currentYear = new Date().getFullYear();
  yearElement.innerHTML = yearElement.innerHTML.replace('2026', currentYear);
}


// Contact Form EmailJS Integration


emailjs.init("dqAfm-F8W6usvDImk");

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Send the form using EmailJS
    emailjs.sendForm(
      "service_cl7up6n", 
      "template_79z6jap",  
      this
    )
    .then(() => {
      alert("Thank you! Your message has been sent.");
      contactForm.reset();
    })
    .catch((error) => {
      console.error("Failed to send message:", error);
      alert("Oops! Something went wrong. Please try again.");
    });
  });
}

console.log('Portfolio loaded successfully with EmailJS!');
