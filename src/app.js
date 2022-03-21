function displayTemperature (response) {
    console.log(response.data.main.temp);
}

let apiKey = "7c0a7bf7120da0d635ff53ea1528f155";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q= New York&appid=${apiKey}&units=metric`;


axios.get(apiUrl).then(displayTemperature);