// Obtener datos de ubicación y clima del usuario
const iconoClima = document.getElementById("iconoClima");
const homeTemp = document.getElementById("homeTemp");
const homeCiudad = document.getElementById("homeCiudad");
const apiKeyClima = "1e0852abb42466a00a4d6d999c3e2b64";

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

const ubicacionClima = (pos) => {
    const crd = pos.coords;
    console.log("location ready")
    let lat = crd.latitude;
    let lon = crd.longitude;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKeyClima}&units=metric`)
    .then((response) => response.json())
    .then((data) => {
        homeTemp.innerText = `${Math.round(data.main.temp)}°C`;
        iconoClima.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        return datosClima = data;
    })
};

const error = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
};


navigator.geolocation.getCurrentPosition(ubicacionClima, error, options);


// Funcionalidades para el estilo Android
const botonEntrarAndroid = document.getElementById("botonEntrarAndroid");
const introAndroid = document.getElementById("introAndroid");
const circulosInicio = document.querySelectorAll(".circulo_inicio");

// Datos de hora y fecha
const date = new Date();
const [horas, minutos, segundos] = [date.getHours(), date.getMinutes(), date.getSeconds()]

// Datos del clima 


const divFecha = document.getElementById("divFecha");

const fecha = new Date();
const [dia, mes, anio] = [fecha.getDate(), fecha.getMonth(), fecha.getFullYear()]; 
const actualizarFecha = (fecha) => {
    divFecha.innerText = `${dia}-${mes}-${anio} `
}  
actualizarFecha()

const fechaHora = () => {
    const divReloj = document.getElementById("divReloj");

    let date = new Date()
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()

    hh = hh < 10 ? `0${hh}` : hh
    mm = mm < 10 ? `0${mm}` : mm
    ss = ss < 10 ? `0${ss}` : ss

    let hora = `${hh}:${mm}:${ss}`
    divReloj.innerText = hora
}

fechaHora()
setInterval(fechaHora, 1000)


botonEntrarAndroid.addEventListener("click", () => {
    circulosInicio.forEach((element)=> {
        element.classList.remove("saltar");
        element.classList.add("irse");
    });
    introAndroid.classList.add("desaparecerArriba");
})