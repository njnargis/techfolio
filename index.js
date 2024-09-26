
  


   // toggle menu/navbar script
   $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});

// typing text animation script
var typed = new Typed(".typing", {
    strings: ["Web Designer", "Developer", "Tech Enthusiast", "Learner"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// script.js

document.addEventListener('DOMContentLoaded', function () {
    const about = document.getElementById('about');
    const floatTextLeft = document.querySelectorAll('.about-content');
    const floatTextRight = document.querySelectorAll('.title3');
  
    // Create Intersection Observer
    const observerOptions = {
      root: null, // Uses the viewport as the root
      threshold: 0.2, // Trigger when 20% of the section is visible
    };
  
    const aboutObserver = new IntersectionObserver((entries,) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add 'visible' class to text elements to trigger animation
          floatTextLeft.forEach(el => el.classList.add('visible'));
          floatTextRight.forEach(el => el.classList.add('visible'));
        }
      });
    }, observerOptions);
  
    // Observe the "About Us" section
    aboutObserver.observe(about);
  });
  
