var typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  typeSpeed: 60,
  backSpeed: 40,
  smartBackspace: true, // this is a default
  cursorChar: "|",
  autoInsertCss: true,
});

var navbar = document.getElementById("myNav");

window.onscroll = () => {
  if (window.pageYOffset > 20) {
    navbar.classList.add("nav-colored");
  } else {
    navbar.classList.remove("nav-colored");
  }
};

new Splide(".splide", {
  type: "loop",
  perPage: 3,
  speed: 1500,
  gap: "50px",
}).mount();

let cardhoverstate = document.getElementsByClassName("card");
console.log(cardhoverstate);
for (let card of cardhoverstate) {
  console.log(card);
  card.onmouseout = function () {
    card.style.backgroundColor = "";
  };
}
