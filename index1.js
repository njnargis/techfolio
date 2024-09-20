
  


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

