const getNationalParks = () => {
  return fetch(
      "http://localhost:9099/parks"
    )
    .then(r => r.json())
    .then(parks => {
      renderParkElements(parks)
    });
};

getNationalParks()

// const getNationalParksWeather = () => {
//   return fetch(
//       "http://locahttps://api.darksky.net/forecast/0ca9b8198755c7e5839fa4e60a0bb6cc/${latitude},${longitude}lhost:9099/parks"
//     )
//     .then(r => r.json())
//     .then(parksWeather => {
//       renderParkWeatherElements(parksWeather)
//     });
// };

// getNationalParksWeather()