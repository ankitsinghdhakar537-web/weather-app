async function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const apiKey = "86435251523d3a34d4899924b06bec56";

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod != 200) {
            document.getElementById("cityName").innerText = "City not found 😞";
            document.getElementById("temperature").innerText = "";
            document.getElementById("description").innerText = "";
            document.getElementById("humidity").innerText = "";
            document.getElementById("wind").innerText = "";
            return;
        }

        document.getElementById("cityName").innerText =
            `${data.name}, ${data.sys.country}`;

        document.getElementById("temperature").innerText =
            `🌡 Temperature: ${data.main.temp} °C`;

        document.getElementById("description").innerText =
            `🌥 Weather: ${data.weather[0].description}`;

        document.getElementById("humidity").innerText =
            `💧 Humidity: ${data.main.humidity}%`;

        document.getElementById("wind").innerText =
            `💨 Wind Speed: ${data.wind.speed} m/s`;

    } catch (error) {
        console.log(error);
        alert("Something went wrong!");
    }
}