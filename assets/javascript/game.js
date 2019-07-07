
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

//funciton to create a number underscores based on the lenght of the word to guess
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


//game variables 
let usersGuesses = [];
let guessesLeft = nameToGuess.length;
let numberOfWins = 0;
let numberOfLosses = 0;



//check if user typed a letter 
//function provided by https://stackoverflow.com/questions/16647404/javascript-function-to-enter-only-alphabets-on-keypress
function lettersOnly() {
    var charCode = event.keyCode;

    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)){
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
        //display number of guesses 
        guessNumber.textContent = "Guesses Left: " + guessesLeft;
        let youLose = document.getElementById("lostText");
        youLose.textContent = "";
        //checks to see if guess is in the array of the word to guess
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
        //gets rid of the previous answer 
        function deleteName() {
            for (let i = 0; i < nameToGuess.length; i++){
            let spanToRemove = document.getElementById("pokeDash-"+i);
                spanToRemove.parentNode.removeChild(spanToRemove);
            }
        }
        //find the duplicates in an array and store the index of each
        function getDuplicates(array1, value){
            let dups = [];
            for(let i = 0; i<array1.length;i++){
                if(array1[i] === value){
                    dups.push(i);
                    }
                }
            return dups;
        };
        
        //replace the values in target array with 0s using integer values from a passed in array
        function replace(anArray1,anArray2) {
            
            for (var i = 0; i < anArray1.length; i++){
                anArray2.splice(anArray1[i],1,0);
            }
            return anArray2;
        };

        //updates all the underscore which match the guessed letter
        function updateLetters(foundArray){
            for (let i = 0; i < foundArray.length;i++){
                let updateLetter = document.getElementById("pokeDash-"+foundArray[i]);
                 updateLetter.textContent = event.key;
            }
        };

        function checkWin(value){
            return value === 0;
        };
        console.log(nameToGuess);


  //only run the game if a letter was guessed
  if(lettersOnly()){
    console.log(guessesLeft);
        //if the user still have guess left,play game
      if(guessesLeft > 1){

             //store users guess into an array
            usersGuesses.push(event.key);
            //update display with letter guesses 
            guessDisplay.textContent = "Your guesses so far: " + usersGuesses;

            //if guess exsists, will be a positive number 
             if(guessIndex > -1){
 
                 //reveal the guessed letters
                 updateLetters(getDuplicates(nameToGuess,event.key));
                //find the duplicates (if any) and make an array of its indexs
                //then use that array to replace the values with 0 so we don't need to find them again
                replace(getDuplicates(nameToGuess, event.key),nameToGuess);
                console.log(nameToGuess);

                // when the user has as many correct guesses as the length of the the word to guess, end the game 
                 if (nameToGuess.every(checkWin)){
                     numberOfWins++;
                     winDisplay.textContent = "Wins: " + numberOfWins;
                     youLose.textContent = "Good Job! The pokemon was " + computerChoice;
                     deleteName();
                     resetGame();
                     makeUnderscores();
                    //  console.log(nameToGuess);
                 }
             }
             else if(guessIndex === -1){
                // console.log(guessIndex);
                guessesLeft--;
                guessNumber.textContent = "Guesses Left: " + guessesLeft;
               
                
             }
             
      }
      else{
        numberOfLosses++;
        lossDisplay.textContent = "Losses: " + numberOfLosses;
        youLose.textContent = "Sorry. The pokemon was " + computerChoice;
        deleteName();
        resetGame();
        makeUnderscores();
      }
  }


};

 //write something to change the content of a div with id = "pokeDash-"+nameToGuess.indexOf(letterGuessed) // if null subtract from guesses 