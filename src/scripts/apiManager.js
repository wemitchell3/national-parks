const getNationalParks = () => {
    fetch(
      "http://localhost:9099/parks"
    )
      .then(r => r.json())
      .then(parks => {
renderParkElements(parks)
      });
  };

  getNationalParks()
 

  