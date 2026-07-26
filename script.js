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
const dateElement = document.getElementById("datetime");
const iconElement = document.querySelector(".weather-icon");
const titleElement = document.querySelector(".main-card h1");

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

    dateElement.innerHTML = `${date}<br>${time}`;

}

setInterval(updateDateTime,1000);
updateDateTime();


// ===============================
// Greeting
// ===============================

function updateGreeting(){

    const hour = new Date().getHours();

    if(hour>=5 && hour<12){

        titleElement.innerHTML="🌤️ Good Morning";

    }
    else if(hour>=12 && hour<16){

        titleElement.innerHTML="☀️ Good Afternoon";

    }
    else if(hour>=16 && hour<19){

        titleElement.innerHTML="🌇 Good Evening";

    }
    else{

        titleElement.innerHTML="🌙 Good Night";

    }

}

updateGreeting();


// ===============================
// Day / Night Icon
// ===============================

function updateWeatherIcon(){

    const hour=new Date().getHours();

    if(hour>=6 && hour<18){

        iconElement.innerHTML="☀️";

    }
    else{

        iconElement.innerHTML="🌙";

    }

}

updateWeatherIcon();


// ===============================
// Console
// ===============================

console.log("Weather Dashboard Loaded");

console.table(weather);
