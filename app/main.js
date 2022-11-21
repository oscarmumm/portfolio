const botonEntrarAndroid = document.getElementById("botonEntrarAndroid");
const introAndroid = document.getElementById("introAndroid");
const circulosInicio = document.querySelectorAll(".circulo_inicio");

botonEntrarAndroid.addEventListener("click", () => {
    circulosInicio.forEach((element)=> {
        element.classList.remove("saltar");
        element.classList.add("irse");
    });
    introAndroid.classList.add("desaparecerArriba");
})