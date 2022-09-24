import createWeatherWidgets from './display';

export default async function getWeather(lat, lon, place) {
  try {
    const responseDaily = await fetch(`https://api.openweathermap.org/data/2.5/weather?&lat=${lat.toString()}&lon=${lon.toString()}&appid=${'f152e0b03af8ce0e123e26e8484591e8'}`);
    const objDaily = await responseDaily.json();
    const responseForecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?&lat=${lat.toString()}&lon=${lon.toString()}&appid=${'f152e0b03af8ce0e123e26e8484591e8'}`);
    const objForecast = await responseForecast.json();
    createWeatherWidgets(objDaily, objForecast, place);
  } catch (error) {
    console.log(error);
  }
}
