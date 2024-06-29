


AOS.init({
    offset: 300,
    duration: 1000,
  });

var navVar = document.querySelector(".navbar");
var lastScroll = window.pageYOffset;

window.onscroll = function() {
var currentscroll= window.pageYOffset;

  if(currentscroll>lastScroll) {
    navVar.style.top = "-100px";
    navVar.style.opacity = "0";
    navVar.style.transition = ".4s linear";
  }
  else {
    navVar.style.top = "0";
    navVar.style.opacity = "1";
    navVar.style.transition = ".4s linear";
  }
  lastScroll=currentscroll;

}

