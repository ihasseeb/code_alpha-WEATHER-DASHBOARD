function getWeather() {
    var city = document.getElementById("cityInput").value;
    var apiKey = 'f32dc80266e3cd3cbc533390cb5ca620'; // Replace with your OpenWeatherMap API key

    // Make a request to the OpenWeatherMap API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
        });
}

function displayWeather(data) {
    var weatherInfo = document.getElementById("weatherInfo");
    weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <img class="weather-icon" src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon">
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].main}</p>
        <p>Description: ${data.weather[0].description}</p>
    `;
}
