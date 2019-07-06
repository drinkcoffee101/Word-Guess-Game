
let pokemon = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","MrMime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

let pokemonUncapped = [];
//lowercasing the names
for (let i = 0; i < pokemon.length; i++){
    pokemonUncapped.push(pokemon[i].toLowerCase());
}

//assign the random number to the array to pass a random letter to computer choice
let computerChoice = pokemonUncapped[Math.floor(Math.random() * (pokemon.length))];
let nameToGuess = [];
//seperate word into array of letters
for(let i = 0; i < computerChoice.length; i++) {
    nameToGuess.push(computerChoice.slice(i,i+1));
}


console.log(nameToGuess);

function makeUnderscores() {
    for (let i = 0; i < nameToGuess.length; i++){
        let dashContiner = document.createElement("span");
        dashContiner.id = "pokeDash-" + i;

        let newDash = document.createTextNode("_ ");
        dashContiner.appendChild(newDash);
        
        let targetDiv = document.getElementById("div1");
        targetDiv.appendChild(dashContiner);
    }
};



//creates div elements based on the size of the nameToGuess array
$(document).ready(function() {
    makeUnderscores();
    
});



let usersGuesses = [];
let guessesLeft = nameToGuess.length;
let numberOfWins = 0;
let numberOfLosses = 0;
let correctGuess = 0;


//check if user typed a letter 
//function provided by https://stackoverflow.com/questions/16647404/javascript-function-to-enter-only-alphabets-on-keypress
function lettersOnly() {
    var charCode = event.keyCode;

    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8){
        return true;
    }
        else{
        return false;
        }
};

document.onkeyup = function(event){
        //text displaying game info
        let winDisplay = document.getElementById("wins");
        let lossDisplay = document.getElementById("loss");
        let guessDisplay = document.getElementById("current-guesses");
        let guessNumber = document.getElementById("guesses-left");
        let guessIndex = nameToGuess.indexOf(event.key);
           //function that resets the game
        function resetGame(){
            computerChoice = pokemonUncapped[Math.floor(Math.random() * (pokemon.length))];
            nameToGuess = [];
            //seperate word into array of letters
            for(let i = 0; i < computerChoice.length; i++) {
                nameToGuess.push(computerChoice.slice(i,i+1));
            }
            guessesLeft = nameToGuess.length;
            usersGuesses = [];
            guessDisplay.textContent = "Your guesses so far: ";
            guessNumber.textContent = "Guesses Left: " + guessesLeft;
            correctGuess = 0;
        };
        function deleteName() {
            for (let i = 0; i < nameToGuess.length; i++){
            let spanToRemove = document.getElementById("pokeDash-"+i);
                spanToRemove.parentNode.removeChild(spanToRemove);
            }
        }

  //only run the game if a letter was guessed
  if(lettersOnly()){
      if(guessesLeft > 0){
             //store users guess into an array
            usersGuesses.push(event.key);
            //update display with letter guesses 
            guessDisplay.textContent = "Your guesses so far: " + usersGuesses;
            //tick down guesses left
            
            //update display with number of guesses left 
             guessNumber.textContent = "Guesses Left: " + guessesLeft;

             if(guessIndex > -1){
                 let updateLetter = document.getElementById("pokeDash-"+guessIndex);
                 updateLetter.textContent = event.key;
                 correctGuess++;
                //  console.log(nameToGuess);
                 if (correctGuess === nameToGuess.length){
                     numberOfWins++;
                     winDisplay.textContent = "Wins: " + numberOfWins;
                     deleteName();
                     resetGame();
                     makeUnderscores();
                     console.log(nameToGuess);
                 }
             }
             else if(guessIndex === -1){
                guessesLeft--;
                guessNumber.textContent = "Guesses Left: " + guessesLeft;
             }
             
      }
  }


};

 //write something to change the content of a div with id = "pokeDash-"+nameToGuess.indexOf(letterGuessed) // if null subtract from guesses 