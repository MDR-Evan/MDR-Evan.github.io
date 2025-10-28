const API_KEY = "2456e080fcae1b3b564da2242163150a";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`;
    
    fetch(weather_url)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const icon = document.querySelector("#weather-ccontainer img");
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        icon.alt = data.weather[0].description;
        weather.innerText = `날씨: ${data.weather[0].main} | 온도: ${data.main.temp}℃`;
        city.innerText = data.name;
    })
}

function onGeoError() {
    alert("위치 좌표를 찾을 수 없습니다.");
}


console.log(navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError));