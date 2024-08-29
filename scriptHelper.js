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
 
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    const launchStatus = document.getElementById("launchStatus");
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");

    //List reverts to hidden if pilot/copilot added then deleted in resubmission of form, could possibly set HTML to different text string
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        launchStatus.innerHTML = "Awaiting Information Before Launch";
        launchStatus.style.color = "black"
        list.style.visibility = "hidden";
        alert("All fields are required!");
    } else if (validateInput(pilot) !== "Not a Number" || validateInput(copilot) !== "Not a Number" || validateInput(fuelLevel) !== "Is a Number" || validateInput(cargoLevel) !== "Is a Number") {
        launchStatus.innerHTML = "Awaiting Information Before Launch";
        launchStatus.style.color = "black"
        list.style.visibility = "hidden";
        alert("Make sure to enter valid information for each field!");
    } else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

        //(Nested) Shuttle Requirement Checks
        if (fuelLevel >= 10000) {
            fuelStatus.innerHTML = "Fuel level high enough for launch";
        } else {
            fuelStatus.innerHTML = "Fuel level too low for launch";
        }

        if (cargoLevel <= 10000) {
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        } else {
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        }

        if (fuelLevel < 10000 || cargoLevel > 10000) {
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
            list.style.visibility = "visible";
        } else if (validateInput(pilot) === "Not a Number" && validateInput(copilot) === "Not a Number" && fuelLevel >= 10000 && cargoLevel <= 10000) {
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            launchStatus.style.color = "green";
        }

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