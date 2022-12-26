// Header Scroll
let nav=document.querySelectorAll(".navbar")
window.onscroll= function(){
    if(document.documentElement.scrollTop > 30){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove(".header-scrolled");
    }
}

// nav hide
let navBar=document.querySelectorAll(".nav-link");
let navCollapse= document.querySelector(".navbar-collapse.collpase");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}