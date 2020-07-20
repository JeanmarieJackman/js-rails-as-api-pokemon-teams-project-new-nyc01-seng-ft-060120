document.addEventListener("DOMContentLoaded",function(e){



    const BASE_URL = "http://localhost:3000"
    const TRAINERS_URL = `${BASE_URL}/trainers`
    const POKEMONS_URL = `${BASE_URL}/pokemons`
    const main = document.querySelector("main")
    
    
    // When a user loads the page, they should see all trainers, 
    // with their current team of Pokemon.
    
    getTrainers()
    function getTrainers (){
        fetch(TRAINERS_URL)
        .then(res => res.json())
        .then(trainers => renderTrainers(trainers)
        
        )}
        
        
        
        function renderTrainers(trainers){
            trainers.forEach(element => {
                 let trainerDiv = document.createElement("div") 
                     trainerDiv.className = "card"
                     trainerDiv.dataset.id = `${element.id}`
                     trainerDiv.innerHTML =
                     `<p> ${element.name}</p>
                      <button data-trainer-id=${element.id}> Add Pokemon </button>
                      <ul> </ul>
                     `
           


            
        
        
             console.log(trainerDiv)  
        //  console.log(element["id"])
        }) 
     };
        
        
        
        // console.log(trainers[1].name)
        
    })
    
    // renderTrainers()
    
    
    
    // for (let i = 0; i < trainers.length; i++) {
    //     trainerDiv.innerHTML = `
    //          <p> ${trainers[i].name}</p>
    //          <ul>
    //         </ul>
    //         `

    //     }
    //     main.append(trainerDiv)
    
// Whenever a user hits "Add Pokemon" and they have space on their team, 
// they should get a new Pokemon.









// Whenever a user hits "Release Pokemon" on a specific Pokemon team, 
// that specific Pokemon should be released from the team.




