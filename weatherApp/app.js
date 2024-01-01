// replave this 'apiKey' strin with your actual API KEY 
const API_KEY = "apiKey";
const API_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const search = document.querySelector(".searchBox input");
const searchB = document.querySelector(".searchBox button");
const weatherIcon = document.querySelector(".weather-icon");

async function getWeather(city){
    console.log("fetching weather for city");
    console.log(city)
    const url =  API_url + city + `&appid=${API_KEY}`;

    const response = await fetch(url);
    var data = await response.json();
    console.log(data);

    if(data.cod == "404"){
        document.querySelector(".Details").innerHTML = "City Not Found";
        return;
    }

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".windSpeed").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }

    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }

    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }

    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }

    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
    }

}

searchB.addEventListener("click",
    ()=>{
        getWeather(search.value);
        event.preventDefault();
    }
)