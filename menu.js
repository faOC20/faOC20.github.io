const abrir = document.querySelector("#menu");
const nav = document.querySelector(".container-nav");

abrir.addEventListener("mouseenter", () => {
  nav.classList.add("visible");
});

nav.addEventListener("mouseleave", () => {
  if (nav.classList.contains("visible")) {
    nav.classList.remove("visible");
  }
});



