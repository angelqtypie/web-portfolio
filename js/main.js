AOS.init({
  once: true,
  duration: 800,
  easing: 'ease-out-cubic'
});

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('nav-scrolled', window.scrollY > 60);
});
