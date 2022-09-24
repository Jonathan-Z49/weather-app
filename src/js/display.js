import * as utility from './utility';

const tempUnitsCont = document.querySelector('.unit');
let unitTemp = 'C';
tempUnitsCont.addEventListener('click', () => {
  const celsius = document.querySelector('.celsius');
  const fahrenheit = document.querySelector('.fahrenheit');
  const allTemps = document.querySelectorAll('.val-temp');

  celsius.classList.toggle('active');
  fahrenheit.classList.toggle('active');

  if (allTemps.length > 0) {
    utility.updateTempDOM(allTemps, unitTemp);
  }
  unitTemp = fahrenheit.classList.contains('active') ? 'F' : 'C';
});

export default function createWeatherWidgets(daily, forecast, place) {
  const location = document.querySelector('.location');
  const dailyCont = document.querySelector('.daily');
  const description = document.querySelector('.description');
  const dailyDetails = document.querySelector('.weather__daily--details');
  const forecastDOM = document.querySelector('.weather__forecast');

  location.replaceChildren();
  dailyCont.replaceChildren();

  const placeName = document.createElement('p');
  placeName.innerText = place;

  location.appendChild(placeName);

  const weatherConditionImg = document.createElement('img');
  weatherConditionImg.src = `http://openweathermap.org/img/wn/${daily.weather[0].icon}@4x.png`;

  const dailytemp = document.createElement('p');
  dailytemp.classList.add('daily-temp', 'val-temp');
  dailytemp.innerText = `${utility.kelvinToTemp(daily.main.temp, unitTemp)}°`;

  dailyCont.append(weatherConditionImg, dailytemp);
  description.innerText = '';

  description.innerText = daily.weather[0].description.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');

  dailyDetails.innerHTML = '';
  dailyDetails.innerHTML = `<div class="feeltemp">
                            <p>Feels like:</p>
                              <p class="val-temp">${utility.kelvinToTemp(daily.main.feels_like, unitTemp)}°</p>
                            </div>
                            <div class="temp-min">
                              <p>Minimum:</p>
                              <p class="val-temp">${utility.kelvinToTemp(daily.main.temp_min, unitTemp)}°</p>
                            </div>
                            <div class="temp-max">
                              <p>Maximum:</p>
                              <p class="val-temp">${utility.kelvinToTemp(daily.main.temp_max, unitTemp)}°</p>
                            </div>
                            <div class="pressure">
                              <p>Pressure:</p>
                              <p>${daily.main.pressure} hPa</p>
                            </div>
                            <div class="humidity">
                              <p>Humidity:</p>
                              <p>${daily.main.humidity}%</p>
                            </div>
                            <div class="wind">
                              <p>Wind Speed:</p>
                              <p>${daily.wind.speed} m/s</p>
                            </div>`;
  const forecastData = utility.formatForecastData(forecast);
  forecastDOM.replaceChildren();
  forecastData.forEach((element) => {
    const forecastHTML = `<div class="forecast--details">
    <p class="day-val">${element.date}</p>
    <img src="http://openweathermap.org/img/wn/${element.icons}@4x.png" alt="">
    <p class="val-temp">${utility.kelvinToTemp(element.temp, unitTemp)}°</p>
  </div>`;
    forecastDOM.insertAdjacentHTML('beforeend', forecastHTML);
  });
}
