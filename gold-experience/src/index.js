let weather = {
  apiKey: "9fccf9d133d749eb15f04824bde9e690",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q="
      + city +"&units=metric&appid="
      + this.apiKey
    )
    .then((response) => response.json())
    .then((data) => console.log(data));

  },
  displayWeather: function(data){

  }
};