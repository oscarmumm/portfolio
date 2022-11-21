// Obtener datos de ubicación del usuario
const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    const crd = pos.coords;
    console.log("location ready")
    return ubicacion = {
        lat: crd.latitude,
        lon: crd.longitude
    }
};

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
};

navigator.geolocation.getCurrentPosition(success, error, options);


// Funcionalidades para el estilo Android
const botonEntrarAndroid = document.getElementById("botonEntrarAndroid");
const introAndroid = document.getElementById("introAndroid");
const circulosInicio = document.querySelectorAll(".circulo_inicio");

// Datos de hora y fecha
const date = new Date();
const [day, month, year] = [date.getDate(), date.getMonth(), date.getFullYear()];

// Datos del clima 
const apiKeyClima = "1e0852abb42466a00a4d6d999c3e2b64";

function obtenerClima() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${ubicacion.lat}&lon=${ubicacion.lon}&appid=${apiKeyClima}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

const fechaClima = document.getElementById("fechaClima"); 

function actualizarDatosFechaClima () {
    fechaClima.innerText = `${day}-${month}-${year}`;
};

actualizarDatosFechaClima();

botonEntrarAndroid.addEventListener("click", () => {
    circulosInicio.forEach((element)=> {
        element.classList.remove("saltar");
        element.classList.add("irse");
    });
    introAndroid.classList.add("desaparecerArriba");
})