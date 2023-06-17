const abrir = document.querySelector("#menu");
const nav = document.querySelector(".container-nav");
const cerrar = document.querySelector("#cerrar")

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
  nav.classList.toggle('active');
});

cerrar.addEventListener("click", () => {
  
    nav.classList.remove("visible");
    nav.classList.toggle('active');
  
});


