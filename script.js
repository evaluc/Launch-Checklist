//const { myFetch, addDestinationInfo, pickPlanet, formSubmission } = require("./scriptHelper");

// Write your JavaScript code here!

window.addEventListener("load", function() {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);

        // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
        //These could probably be lets? If I even need them at all aside from marqueePlanet
        const marqueePlanet = pickPlanet(listedPlanets);
        const mPlanetName = marqueePlanet.name;
        const mPlanetDiameter = marqueePlanet.diameter;
        const mPlanetStar = marqueePlanet.star;
        const mPlanetDistance = marqueePlanet.distance;
        const mPlanetMoons = marqueePlanet.moons;
        const mPlanetImage = marqueePlanet.image;
        
        addDestinationInfo(document, mPlanetName, mPlanetDiameter, mPlanetStar, mPlanetDistance, mPlanetMoons, mPlanetImage);
    })
    
    
    const launchForm = document.getElementById("launchForm");
    //Or just grab form by type? Since launchForm is a div

    launchForm.addEventListener("submit", function(event) {

    event.preventDefault();
        //add event to function()? 
        //Do I need this? let launchForm = document.getElementById("launchForm");
    let list = document.getElementById("faultyItems");
    let pilot = document.querySelector('[name="pilotName"]').value;
    let copilot = document.querySelector('[name="copilotName"]').value;
    let fuelLevel = document.querySelector('[name="fuelLevel"]').value;
    let cargoLevel = document.querySelector('[name="cargoMass"]').value;
    //Function Execution
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);  
    
    });
 });