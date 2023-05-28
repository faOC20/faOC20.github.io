var imagenDinamica = document.querySelector(".principal");
var leftButton = document.querySelector(".botonizq");
var rightButton = document.querySelector(".botonder")
var screenText = document.querySelector(".screen-text")
var otherScreenText = document.querySelector(".screen-text-description")

let currentImage = 1

leftButton.addEventListener("click", function () {

  if (currentImage === 1) {
    imagenDinamica.style.backgroundImage = "url('principal2.jpg')";
    screenText.innerHTML = "De que se puede, se puede!"
    otherScreenText.innerHTML = ""
    currentImage = 2
  }
  else {
    imagenDinamica.style.backgroundImage = "url('principal.jpg')";
    screenText.innerHTML = "Gilberto Pinto"
    otherScreenText.innerHTML = "Gobernador del Estado Sucre"
    currentImage = 1
  }
});

rightButton.addEventListener("click", function () {

  if (currentImage === 1) {
    imagenDinamica.style.backgroundImage = "url('principal2.jpg')";
    screenText.innerHTML = "De que se puede, se puede!"
    otherScreenText.innerHTML = ""
    currentImage = 2
  }
  else {
    imagenDinamica.style.backgroundImage = "url('principal.jpg')";
    screenText.innerHTML = "Gilberto Pinto"
    otherScreenText.innerHTML = "Gobernador del Estado Sucre"
    currentImage = 1
  }
});



