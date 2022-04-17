window.onscroll = function() {
  myFunction()
};

let navbar = document.getElementsByClassName("navbar");

let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}