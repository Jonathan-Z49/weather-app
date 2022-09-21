export default async function getWeather(lat, lon) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?&lat=${lat.toString()}&lon=${lon.toString()}&appid=${'f152e0b03af8ce0e123e26e8484591e8'}`);
    const obj = await response.json();
    console.log(obj);
  } catch (error) {
    console.log(error);
  }
}
