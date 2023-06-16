
const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");




 
navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});






const appearOptions = { 
  threshold: 1,
  rootMargin: "0px 0px -100px 0px"

};



const appearOnScroll= new IntersectionObserver 
(function(entries, 
  appearOnScroll) 
{
entries.forEach(entry => {
  if (!entry.isIntersecting) {
    return;
  } else{
    entry.target.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
  }

});


}, 
appearOptions);

fader.forEach(fader => {
  appearOnScroll.observe(fader);
});





//Menu Functionality
const breakfest = document.querySelector("#breakfast");
const sandwhiches = document.querySelector("#sandwhiches");
const dinner = document.querySelector("#dinner");
const beverages = document.querySelector("#beverages");
const desserts = document.querySelector("#desserts");


//Menu Functionality
const menu1 = document.querySelector("#menu1");
const menu2 = document.querySelector("#menu2");
const menu3 = document.querySelector("#menu3");
const menu4 = document.querySelector("#menu4");
const menu5 = document.querySelector("#menu5");




//Menu 1
  breakfest.addEventListener('click',() => {
  breakfest.classList.add('active-menu');
  menu1.classList.add('visible');

  sandwhiches.classList.remove('active-menu');
  dinner.classList.remove('active-menu');
  beverages.classList.remove('active-menu');
  desserts.classList.remove('active-menu');

  menu2.classList.remove('visible');
  menu3.classList.remove('visible');
  menu4.classList.remove('visible');
  menu5.classList.remove('visible');
})




//Menu 2
sandwhiches.addEventListener('click',() => {
sandwhiches.classList.add('active-menu');
menu2.classList.add('visible');



  breakfest.classList.remove('active-menu');
  dinner.classList.remove('active-menu');
  beverages.classList.remove('active-menu');
  desserts.classList.remove('active-menu');


  menu1.classList.remove('visible');
  menu3.classList.remove('visible');
  menu4.classList.remove('visible');
  menu5.classList.remove('visible');
})





//Menu 3
dinner.addEventListener('click',() => {
  dinner.classList.add('active-menu');
menu3.classList.add('visible');



  breakfest.classList.remove('active-menu');
  sandwhiches.classList.remove('active-menu');
  beverages.classList.remove('active-menu');
  desserts.classList.remove('active-menu');


   menu2.classList.remove('visible');
  menu1.classList.remove('visible');
  menu4.classList.remove('visible');
  menu5.classList.remove('visible');
})






//Menu 4
beverages.addEventListener('click',() => {
beverages.classList.add('active-menu');
menu4.classList.add('visible');




   breakfest.classList.remove('active-menu');
  dinner.classList.remove('active-menu');
  sandwhiches.classList.remove('active-menu');
  desserts.classList.remove('active-menu');

  menu2.classList.remove('visible');
  menu3.classList.remove('visible');
  menu1.classList.remove('visible');
  menu5.classList.remove('visible');
})






//Menu 5
desserts.addEventListener('click',() => {
desserts.classList.add('active-menu');
menu5.classList.add('visible');



  breakfest.classList.remove('active-menu');
  dinner.classList.remove('active-menu');
  beverages.classList.remove('active-menu');
  sandwhiches.classList.remove('active-menu');

 menu1.classList.remove('visible');
  menu2.classList.remove('visible');
  menu3.classList.remove('visible');
  menu4.classList.remove('visible');
})


