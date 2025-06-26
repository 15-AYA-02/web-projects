const apikey = "ab19a6cef5ce03e5738b8f3351c68d83";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icone")

async function  checkWeather(city) {
    const response = await fetch(apiUrl + city +`&appid=${apikey}`);
    
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();


    document.querySelector(".ville").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp)+ "°C"; 
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "pictures/cloudly.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "pictures/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "pictures/rainy.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "pictures/drizzly.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "pictures/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
    
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

