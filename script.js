// ===============================
// Weather Dashboard - Yogyakarta
// ===============================

// Data cuaca sementara

const weather = {

    city: "Yogyakarta",

    temperature: 29,

    condition: "Mostly Sunny",

    feelsLike: 31,

    humidity: 75,

    wind: 10,

    uv: 8

};

// Elemen HTML

const dateElement = document.getElementById("date");

const timeElement = document.getElementById("time");

const iconElement = document.querySelector(".weather-icon");

const titleElement = document.querySelector(".main-card h1");

const temperatureElement = document.querySelector(".temperature");

const conditionElement = document.querySelector(".condition");

const cityElement = document.querySelector(".main-card h2");

const infoCards = document.querySelectorAll(".info-card p");

// ===============================
// Update Data Cuaca
// ===============================

function updateWeatherData(){

    temperatureElement.textContent = `${weather.temperature}°C`;

    conditionElement.textContent = weather.condition;

    cityElement.textContent = `📍 ${weather.city}`;

    infoCards[0].textContent = `${weather.feelsLike}°C`;

    infoCards[1].textContent = `${weather.humidity}%`;

    infoCards[2].textContent = `${weather.wind} km/h`;

    infoCards[3].textContent = weather.uv;

}

updateWeatherData();

// ===============================
// Update Jam & Tanggal
// ===============================

function updateDateTime(){

    const now = new Date();

    const date = now.toLocaleDateString("en-US",{
        weekday:"long",
        day:"numeric",
        month:"long",
        year:"numeric"
    });

    const time = now.toLocaleTimeString("en-US",{
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit"
    });

    dateElement.textContent = date;

    timeElement.textContent = time;

}

setInterval(updateDateTime,1000);

updateDateTime();

// ===============================
// Greeting
// ===============================

function updateGreeting(){

    const hour = new Date().getHours();

    if(hour>=5 && hour<12){

        titleElement.textContent="🌤️ Good Morning";

    }
    else if(hour>=12 && hour<16){

        titleElement.textContent="☀️ Good Afternoon";

    }
    else if(hour>=16 && hour<19){

        titleElement.textContent="🌇 Good Evening";

    }
    else{

        titleElement.textContent="🌙 Good Night";

    }

}

updateGreeting();

// ===============================
// Day / Night Icon
// ===============================

function updateWeatherIcon(){

    const hour=new Date().getHours();

    if(hour>=6 && hour<18){

        iconElement.textContent="☀️";

    }
    else{

        iconElement.textContent="🌙";

    }

}

updateWeatherIcon();

// ===============================
// Console
// ===============================

console.log("Weather Dashboard Loaded");

console.table(weather);
