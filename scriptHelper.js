// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget")
    missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                   <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                   </ol>
                   <img src="${imageUrl}">`
 }
 
 
 function validateInput(testInput) {
    let input = testInput;
    let response = "";

    if (String(input) === "") {
        response = "Empty";
    }

    if (isNaN(Number(input))) {
        response = "Not a Number";
    }
    
    if (isNaN(Number(input)) === false && input !== "") {
        response = "Is a Number";
        //Here would be a good spot to potentially add a check if the number is >=0
    }

    return response;
 }
 
 //TODO Refactor formSubmission
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!");
       
        //do I need to do something else?
        //Below might not be able to be an else if statement, or should be nested?
    } else if (validateInput(pilot) !== "Not a Number" || validateInput(copilot) !== "Not a Number" || validateInput(fuelLevel) !== "Is a Number" || validateInput(cargoLevel) !== "Is a Number") {
        alert("Make sure to enter valid information for each field!");
       
    }

    //do I need to declare list to be document.getElementById("faultyItems"); here when doing so in script.js?
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let listVisibility = list;//document.getElementById("faultyItems")
    let launchStatus = document.getElementById("launchStatus");
    let fuelNum = Number(fuelLevel);
    let cargoNum = Number(cargoLevel);
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    //Ensures passing defaults - could be refactored to use "list" argument
    //Need to prevent saying pilot/copilot reday if empty strings
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";

    //Shuttle Requirement Checks
    //I think the text strings for all the status checks need to have revert options
    //If user enters valid data, change HTML strings back after invalid submission
    if (fuelNum < 10000) {
        fuelStatus.innerHTML = "Fuel level too low for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        listVisibility.style.visibility = "visible";
    }
        
    if (cargoNum > 10000) {
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        listVisibility.style.visibility = "visible";
    }
    //Account for empty strings? But that should be handled by validateInput above?
    if (typeof pilot === "string" && typeof copilot === "string" && fuelNum >= 10000 && cargoNum <= 10000) {
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "green";
    }

 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let selectedPlanet = Math.floor(Math.random() * planets.length);

    return planets[selectedPlanet];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;  