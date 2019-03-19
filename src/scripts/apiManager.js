//Function to fetch parks api data. This JSON is located within C:\Users\William\workspace\national-parks
const getNationalParks = () => {
  return fetch("http://localhost:9099/parks")
    .then(r => r.json())
    .then(parsedParks => renderParkElements(parsedParks))
};
//This is the function call since there is not a call for it in the dom manager.
getNationalParks()

//Function to fetch the weather for the parks using their lat long coords in the getNationalParks function
const getNationalParksWeather = (latitude, longitude) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/0ca9b8198755c7e5839fa4e60a0bb6cc/${latitude},${longitude}`)
    .then(response => response.json())
  };
