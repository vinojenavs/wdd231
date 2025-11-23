// SELECT HTML ELEMENTS IN THE DOCUMENT 
const weather = document.querySelector('.weather');

// CREATE REQUIRED VARIABLES FOR THE URL
const myKey = "3fda8d4d8c1cdd165ec0a7fe31fc21e0"
const myLat = "5.534657"
const myLong = "5.736095"

// CONSTRUCT A FULL PATH USING TEMPLATE LITERALS
const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`

// TRY TO GRAB THE CURRENT WEATHER DATA
async function fetchCurentWeather() {
  try {
    const response = await fetch(myURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayCurrentWeather(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

// DISPLAY THE JSON DATA 

function displayCurrentWeather(data) {
    console.log('hello')
    weather.innerHTML = `
            <h2>Current Weather</h2>
            <div class="current">
                <h3 id="town1">${data.name}</h3>
                <img id="graphic1" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}">
                <p id="description1">${data.weather[0].description}</p>
                <p id="temperature1">${data.main.temp}&deg;C</p>
            </div>`

}


fetchCurentWeather();
