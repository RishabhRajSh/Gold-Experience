
// logic for weather card
let weather = {
  apiKey: "9fccf9d133d749eb15f04824bde9e690",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q="
      + city +"&units=metric&appid="
      + this.apiKey
    )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));

  },
  displayWeather: function(data){
    const {name} = data;
    const{icon, description} =data.weather[0];
    const {temp, humidity} = data.main;
    const {speed} = data.wind;
    // console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon +".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "C";
    document.querySelector(".humidity").innerText = "Humidity :" + humidity + "%";
    document.querySelector(".wind").innerText = "Wind Speed : " + speed + "km/h";
    document.querySelector(".weather").classList.remove("Loading");
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name + "')"

  },
// search function
search : function(){
  this.fetchWeather(document.querySelector(".search-bar").value);
}
};
document.querySelector(".search button").addEventListener("click",function(){
  weather.search();
  });

document.querySelector(".search-bar").addEventListener("keyup",function(event){
  if(event.key == "Enter"){
  weather.search();
  }
});

// // logic for time display card

let time = document.getElementById("current-Time");
setInterval(()=>{
let d = new Date();
//  time.innerHTML = d.toLocaleTimeString();
document.querySelector(".current-Time").innerText = d.toLocaleTimeString();
},1000)

weather.fetchWeather("Varanasi");