const API_KEY = '44607eba20e85d9aa8d0dc965346f1be'; // Replace with your OpenWeatherMap API key

document.getElementById('getWeather').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    if (city) {
        fetchWeather(city);
    } else {
        alert('Please enter a city');
    }
});

async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod === 200) {
            const weather = data.weather[0].description;
            const temp = data.main.temp;
            document.getElementById('weatherResult').innerHTML = `
                <h2>${data.name}</h2>
                <p><strong>Weather:</strong> ${weather}</p>
                <p><strong>Temperature:</strong> ${temp}°C</p>
            `;
        } else {
            document.getElementById('weatherResult').innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        document.getElementById('weatherResult').innerHTML = `<p>Error fetching weather data</p>`;
    }
}
