//const { myFetch, addDestinationInfo, pickPlanet, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
        //Assign random planet from listedPlanets, fill out destination info
        let featuredPlanet = pickPlanet(listedPlanets);
        let fPlanetName = featuredPlanet.name;
        let fPlanetDiameter = featuredPlanet.diameter;
        let fPlanetStar = featuredPlanet.star;
        let fPlanetDistance = featuredPlanet.distance;
        let fPlanetMoons = featuredPlanet.moons;
        let fPlanetImage = featuredPlanet.image;
        
        addDestinationInfo(document, fPlanetName, fPlanetDiameter, fPlanetStar, fPlanetDistance, fPlanetMoons, fPlanetImage);
    })
    
    
    const launchForm = document.getElementById("launchForm");
    //Possibly grab form by type rather than Id since only one form on page?

    launchForm.addEventListener("submit", function(event) {

        event.preventDefault();
        
        const list = document.getElementById("faultyItems");
        let pilot = document.querySelector('[name="pilotName"]').value;
        let copilot = document.querySelector('[name="copilotName"]').value;
        let fuelLevel = document.querySelector('[name="fuelLevel"]').value;
        let cargoLevel = document.querySelector('[name="cargoMass"]').value;
        //Function Execution
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);  
     });
 });