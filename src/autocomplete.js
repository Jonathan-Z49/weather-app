import getWeather from './weather';

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
      console.log(place);
    } else {
      console.log(place);
      const latVal = place.geometry.location.lat();
      const lonVal = place.geometry.location.lng();
      getWeather(latVal, lonVal);
    }
  });
}
