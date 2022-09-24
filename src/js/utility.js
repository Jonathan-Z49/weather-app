export function kelvinToTemp(temp, units) {
  // eslint-disable-next-line no-bitwise
  if (units === 'C') {
    // eslint-disable-next-line no-bitwise
    return Math.round((temp - 273.15)) | 0;
  }
  // eslint-disable-next-line no-bitwise
  return Math.round((((temp - 273.15) * 9) / 5) + 32) | 0;
}

export function convertTemp(temp, units) {
  if (units === 'C') {
    return kelvinToTemp(temp + 273.15, 'F');
  }
  const tempKelvin = (((temp - 32) * 5) / 9) + 273.15;
  return kelvinToTemp(tempKelvin, 'C');
}

export function updateTempDOM(arr, units) {
  arr.forEach((iterator) => {
    const s = iterator.innerText.slice(0, -1);
    iterator.innerText = `${convertTemp(parseInt(s, 10), units)}°`;
  });
}

export function formatForecastData(forecast) {
  let currentDate = forecast.list[0].dt_txt.slice(0, -9);
  const day = {
    date: currentDate,
    temp: 0,
    icons: [],
    description: [],
  };
  let dayClone = structuredClone(day);
  const newData = [];
  forecast.list.forEach((data) => {
    if (data.dt_txt.slice(0, -9) === currentDate) {
      dayClone.date = data.dt_txt.slice(0, -9);
      dayClone.temp += data.main.temp;
      dayClone.icons.push(data.weather[0].icon);
      dayClone.description.push(data.weather[0].description);
    } else if (data.dt_txt.slice(0, -9) !== currentDate) {
      forecastDataAverage(dayClone);
      newData.push(dayClone);
      dayClone = structuredClone(day);
      dayClone.date = data.dt_txt.slice(0, -9);
      dayClone.temp += data.main.temp;
      dayClone.icons.push(data.weather[0].icon);
      dayClone.description.push(data.weather[0].description);
      currentDate = data.dt_txt.slice(0, -9);
    }
  });

  return newData;
}

export function forecastDataAverage(obj) {
  obj.temp /= obj.icons.length;
  obj.icons = maxOccurence(obj.icons);
  obj.date = dateToWeekday(obj.date);
  obj.description = maxOccurence(obj.description);
}

export function maxOccurence(arr) {
  const counts = {};
  let maxCount = 0;
  let maxKey;
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];
    // eslint-disable-next-line no-multi-assign
    const count = (counts[key] = (counts[key] || 0) + 1);
    if (count > maxCount) {
      maxCount = count;
      maxKey = key;
    }
  }
  return maxKey;
}

export function dateToWeekday(date) {
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const today = new Date(date);
  return weekdays[today.getDay()];
}
