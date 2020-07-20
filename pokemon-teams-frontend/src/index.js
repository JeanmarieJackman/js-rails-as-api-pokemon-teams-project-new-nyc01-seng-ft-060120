document.addEventListener("DOMContentLoaded", function(e){

const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

// When a user loads the page, they should see all trainers, 
// with their current team of Pokemon.
getTrainers()

function getTrainers (){
fetch(TRAINERS_URL)
.then(res => res.json())
.then(trainers => console.log(trainers))
}

// Whenever a user hits "Add Pokemon" and they have space on their team, 
// they should get a new Pokemon.



// Whenever a user hits "Release Pokemon" on a specific Pokemon team, 
// that specific Pokemon should be released from the team.






});