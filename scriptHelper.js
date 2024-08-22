// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    let input = testInput;
    let response = "";

    if (input === "") {
        response = "Empty";
    }

    if (isNaN(input)) {
        response = "Not a Number";
    }
    
    if (isNaN(Number(input)) === false && input !== "") {
        response = "Is a Number";
        //Should we also check if it's a number >= 0? Don't want negative mass or negative fuel levels working
    }

    return response;
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!");
        Event.preventDefault();
        //do I need to do something else?
        //Below might not be able to be an else if statement, or should be nested?
    } else if (validateInput(pilot) !== "Not a Number" || validateInput(copilot) !== "Not a Number" || validateInput(fuelLevel) !== "Is a Number" || validateInput(cargoLevel) !== "Is a Number") {
        window.alert("Make sure to enter valid information for each field!");
        Event.preventDefault();
        //IDK if I need the window. part  
        //do I need to do something else? event.preventDefault(); Or does that go in script.js?
    }

    //do I need to declare list to be document.getElementById("faultyItems");?
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let listVisibility = document.getElementById("faultyItems");
    let launchStatus = document.getElementById("launchStatus");
    let fuelNum = Number(fuelLevel);
    let cargoNum = Number(cargoLevel);
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    //Ensures passing defaults - could be refactored to use "list" argument
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";

    //Shuttle Requirement Checks
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

    if (typeof pilot === "string" && typeof copilot === "string" && fuelNum >= 10000 && cargoNum <= 10000) {
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "green";
    }

 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;