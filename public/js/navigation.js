document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links li');
  
  // Add index attribute to nav items for staggered animation
  navItems.forEach((item, index) => {
    item.style.setProperty('--i', index + 1);
  });
  
  // Handle scroll effect for navbar
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Handle mobile menu toggle
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }
  
  // Close mobile menu when clicking on a link
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  });
});
