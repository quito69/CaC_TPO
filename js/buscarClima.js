const result = document.querySelector('.resultado');
const form = document.querySelector('.get-weather');
let lat= localStorage.getItem("latitud");
let lon=localStorage.getItem("longitud");
if (lat == null){
    miUbicacion();
} else {
    buscarClima(lat,lon);
}


function buscarClima(latitud,longitud){
    // const llave='e99194fae5b76f5191eb2226c96c552f';
    // const url = `//api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${llave}`;
    const url = `//api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=e99194fae5b76f5191eb2226c96c552f`;
    fetch(url)
        .then(data => {
            return data.json();
        })
        .then(dataJSON => {
            if (dataJSON.cod === '404') {
                console.log('Ciudad no encontrada...');
            } else {
                showWeather(dataJSON);
            }
        })
        .catch(error => {
            console.log(error);
        })
}
function miUbicacion(){
   navigator.geolocation.getCurrentPosition(exito);
}
function exito(posicion){
    let latitud=posicion.coords.latitude;
    let longitud=posicion.coords.longitude;
    localStorage.setItem("latitud", latitud);
    localStorage.setItem("longitud", longitud);
    buscarClima(latitud,longitud);
}

function showWeather(data){
    const {name, main:{temp, temp_min, temp_max}, weather:[arr]} = data;

    const degrees = kelvinToCentigrade(temp);
    const min = kelvinToCentigrade(temp_min);
    const max = kelvinToCentigrade(temp_max);

    const content = document.createElement('div');
    content.innerHTML = `
        <h5>Clima en ${name}</h5>
        <img src="https://openweathermap.org/img/wn/${arr.icon}@2x.png" alt="icon">
        <h4>${degrees}°C</h4>
        <h5>Max: ${max}°C - Min: ${min}°C</h5>
    `;

    result.appendChild(content);
}


function kelvinToCentigrade(temp){
    return parseInt(temp - 273.15);
}