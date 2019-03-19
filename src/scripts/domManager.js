//To target the only element class currently located on the DOM
const parkObject = document.querySelector("#display-container");
//To create custom dom elements with CSS if the park has been visited
const makeParkComponentVisited = (parkElement, response) => {
  return `
    <article class ="visited">
    <h3>Park Name: ${parkElement.name}</h3>
    <p>State: ${parkElement.state}</p>
    <p>Weather: </p>
      <ul>
        <li>Currently: ${response.currently.summary}</li>
        <li>Today: ${response.hourly.summary}</li>
        <li>Week: ${response.daily.summary}</li>
      </ul>
    </article>
    `
}
//To create custom dom elements with CSS if the park has not been visited
const makeParkComponentNotVisited = (parkElement, response) => {
  return `
    <article class ="notVisited">
    <h3>Park Name: ${parkElement.name}</h3>
    <p>State: ${parkElement.state}</p>
    <p>Weather: </p>
      <ul>
        <li>Currently: ${response.currently.summary}</li>
        <li>Today: ${response.hourly.summary}</li>
        <li>Week: ${response.daily.summary}</li>
      </ul>
    </article>
    `
}
//To loop through the JSON parkObjects and determine if they have been visited or not
// and post them to the DOM accordingly
const renderParkElements = parsedParks => {
    parsedParks.forEach(parkElement => {
          let latitude = parkElement.latitude
          let longitude = parkElement.longitude
          getNationalParksWeather(latitude, longitude).then(response => {
            if (parkElement.visited === true) {
              parkObject.innerHTML += makeParkComponentVisited(parkElement, response)
            } else {
              parkObject.innerHTML += makeParkComponentNotVisited(parkElement, response)
            }
          })
    })
  }