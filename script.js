//const { myFetch, addDestinationInfo, pickPlanet, formSubmission } = require("./scriptHelper");

// Write your JavaScript code here!



window.addEventListener("load", function() {

    let launchForm = document.getElementById("launchForm");

    launchForm.addEventListener("submit", function() {
        //Do I need this? let launchForm = document.getElementById("launchForm");
        let list = document.getElementById("faultyItems");
        let pilot = document.querySelector('[name="pilotName"]').value;
        let copilot = document.querySelector('[name="copilotName"]').value;
        let fuelLevel = document.querySelector('[name="fuelLevel"]').value;
        let cargoLevel = document.querySelector('[name="cargoMass"]').value;
        //Function Execution
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        
    });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
        let marqueePlanet = pickPlanet(listedPlanets);
        let mPlanetName = marqueePlanet.name;
        let mPlanetDiameter = marqueePlanet.diameter;
        let mPlanetStar = marqueePlanet.star;
        let mPlanetDistance = marqueePlanet.distance;
        let mPlanetMoons = marqueePlanet.moons;
        let mPlanetImage = marqueePlanet.image;
        
        addDestinationInfo(document, mPlanetName, mPlanetDiameter, mPlanetStar, mPlanetDistance, mPlanetMoons, mPlanetImage);
        
    })
    
 });