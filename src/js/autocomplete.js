import getWeather from './weather.js';

export default function initialize() {
  const searchButton = document.getElementById('searchPlace');

  const input = document.getElementById('searchTextField');
  input.addEventListener('click', () => { input.value = ''; });

  const autocomplete = new google.maps.places.Autocomplete(input);

  searchButton.addEventListener('click', () => {
    input.focus();
    let place = autocomplete.getPlace();
    if (!place || input.value === '') {
      input.value = '';
      place = undefined;
    } else {
      const latVal = place.geometry.location.lat();
      const lonVal = place.geometry.location.lng();
      getWeather(latVal, lonVal, place.formatted_address);
    }
  });
  getWeather(51.5072178, -0.1275862, 'London, UK');
}
