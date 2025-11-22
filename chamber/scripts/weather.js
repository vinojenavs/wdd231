// SELECT HTML ELEMENTS IN THE DOCUMENT 
const myTown = document.querySelector('#city');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

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
    myTown.innerHTML = data.name
    myDescription.innerHTML = data.weather[0].description
    myTemperature.innerHTML = `${data.main.temp}&deg;C`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    myGraphic.setAttribute('SRC', iconsrc)
    myGraphic.setAttribute('alt', data.weather[0].description)
}

fetchCurentWeather();
