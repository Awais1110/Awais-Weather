let inputValue = document.querySelector("input");
let searchBtn = document.querySelector(".s-btn");

async function checkWeather(city) {

    let apiKey = "05351fad8d437d128d12693b0ce87abd";
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    let data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&deg;C";
    document.querySelector(".feels").innerHTML = Math.round(data.main.feels_like) + "&deg;C";
    document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "%";
    document.querySelector(".winds").innerHTML = Math.round(data.wind.speed) + "km/h";
    document.querySelector(".clouds").innerHTML = Math.round(data.clouds.all) + "%";

    

    
    
}


searchBtn.addEventListener("click", ()=>{



    checkWeather(inputValue.value);
    inputValue.value = ""

})

function updateDailyDate() {
  const now = new Date();

  // Formats as "Monday, November 11" (or today's current date)
  const formattedDate = now.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  const dateElement = document.getElementById('live-date');
  dateElement.textContent = formattedDate;
  dateElement.setAttribute('datetime', now.toISOString().split('T')[0]);
}

// Run immediately when the page opens
updateDailyDate();

// Check every minute so the date changes automatically at midnight
setInterval(updateDailyDate, 60000);


