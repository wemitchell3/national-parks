//To target the only element class currently located on the DOM
const parkObject = document.querySelector("#display-container");

//To create custom dom elements if the park has been visited
const makeParkComponentVisited = (parkElement) => {
    return `
    <article class ="visited">
    <h3>Park Name: ${parkElement.name}</h3>
    <p>State: ${parkElement.state}</p>
    </article>
    `
}

//To create custom dom elements if the park has not been visited
const makeParkComponentNotVisited = (parkElement) => {
    return `
    <article class ="notVisited">
    <h3>Park Name: ${parkElement.name}</h3>
    <p>State: ${parkElement.state}</p>
    </article>
    `
}

//To loop through the JSON parkObjects and determine if they have been visited or not 
// and post them to the DOM accordingly
const renderParkElements = parks => {
    parks.forEach(parkElement => {   
        if(parkElement.visited === true) {
        parkObject.innerHTML += makeParkComponentVisited(parkElement)
    } else {
        parkObject.innerHTML += makeParkComponentNotVisited(parkElement)
    }
})
}
