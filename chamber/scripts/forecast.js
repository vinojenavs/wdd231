const myTown1 = document.querySelector('#town1');
const myDescription1 = document.querySelector('#description1');
const myTemperature1 = document.querySelector('#temperature1');
const myGraphic1 = document.querySelector('#graphic1');

const weather1 = document.querySelector('.weather1');

const myKey1 = "3fda8d4d8c1cdd165ec0a7fe31fc21e0"
const myLat1 = "5.534657"
const myLong1 = "5.736095"

const myURL1 = `//api.openweathermap.org/data/2.5/forecast?lat=${myLat1}&lon=${myLong1}&appid=${myKey1}&units=metric`


async function fetchForecast() {
  try {
    const response = await fetch(myURL1);
    if (response.ok) {
      const data1 = await response.json();
      console.log(data1); // testing only
      displayForecast(data1); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

// DISPLAY THE JSON DATA 

function displayForecast(data1) {
    console.log('hello')
    weather1.innerHTML = `
            <h2>3 Day Weather Forecast</h2>
            <div class="forecast">
                <h3 id="town1">${data1.city.name}</h3>
                <img id="graphic1" src="//openweathermap.org/img/wn/${data1.list[0].weather[0].icon}@2x.png" alt="${data1.list[0].weather[0].description}">
                <p id="description1">${data1.list[0].weather[0].description}</p>
                <p id="temperature1">${data1.list[0].main.temp}&deg;C</p>
            </div>`
}

fetchForecast();