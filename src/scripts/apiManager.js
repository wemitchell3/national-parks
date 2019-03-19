const getNationalParks = () => {
  return fetch("http://localhost:9099/parks")
    .then(r => r.json())
    .then(parsedParks => renderParkElements(parsedParks))
};
getNationalParks()

const getNationalParksWeather = (latitude, longitude) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/0ca9b8198755c7e5839fa4e60a0bb6cc/${latitude},${longitude}`)
    .then(response => response.json())
  };
// getNationalParksWeather()