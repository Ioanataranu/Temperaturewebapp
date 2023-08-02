function getTemperature() {
    const cityInput = document.getElementById("cityInput").value;
    const apiKey = "d1aa2d5495026f35fbf7c70ae124fe63";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            if (data.main && data.main.temp) {
                const temperature = data.main.temp;
                document.getElementById("temperatureDisplay").innerText = `Temperature: ${temperature} °C`;
            } else {
                document.getElementById("temperatureDisplay").innerText = "Temperature data not available";
            }
        })
        .catch((error) => {
            document.getElementById("temperatureDisplay").innerText = "Error fetching data";
            console.error("Error fetching data:", error);
        });
}
