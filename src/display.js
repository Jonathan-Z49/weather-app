const tempUnitsCont = document.querySelector('.unit');
let unitTemp = 'C';
tempUnitsCont.addEventListener('click', () => {
  console.log('click');
  const celsius = document.querySelector('.celsius');
  const fahrenheit = document.querySelector('.fahrenheit');
  celsius.classList.toggle('active');
  fahrenheit.classList.toggle('active');
  unitTemp = fahrenheit.classList.contains('active') ? 'F' : 'C';
});

export default function createWeatherWidgets(daily, forecast, place) {
  const location = document.querySelector('.location');
  location.replaceChildren();
  const placeName = document.createElement('p');
  placeName.innerText = place;
  location.appendChild(placeName);

  const dailyCont = document.querySelector('.daily');
  dailyCont.replaceChildren();
  const weatherConditionImg = document.createElement('img');
  weatherConditionImg.src = `http://openweathermap.org/img/wn/${daily.weather[0].icon}@4x.png`;
  const dailytemp = document.createElement('p');
  dailytemp.classList.add('daily-temp', 'val-temp');
  dailytemp.innerText = `${convertTemp(daily.main.temp)}°`;
  dailyCont.append(weatherConditionImg, dailytemp);
  const description = document.querySelector('.description');
  description.innerText = '';
  description.innerText = daily.weather[0].description.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');

  const dailyDetails = document.querySelector('.weather__daily--details');
  dailyDetails.innerHTML = '';
  dailyDetails.innerHTML = `<div class="feeltemp">
                            <p>Feels like:</p>
                              <p class="val-temp">${convertTemp(daily.main.feels_like)}°</p>
                            </div>
                            <div class="temp-min">
                              <p>Minimum:</p>
                              <p "val-temp">${convertTemp(daily.main.temp_min)}°</p>
                            </div>
                            <div class="temp-max">
                              <p>Maximum:</p>
                              <p "val-temp">${convertTemp(daily.main.temp_max)}°</p>
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
}

function kelvinToF(temp) {
  // eslint-disable-next-line no-bitwise
  return (((temp - 273.15) * 9) / 5) + 32 | 0;
}

function kelvinToC(temp) {
  // eslint-disable-next-line no-bitwise
  return (temp - 273.15) | 0;
}

function convertTemp(temp) {
  if (unitTemp === 'C') {
    return kelvinToC(temp);
  }
  return kelvinToF(temp);
}
