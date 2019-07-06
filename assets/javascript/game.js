let pokemon = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

let pokemonUncapped = [];
//lowercasing the names
for (let i = 0; i < pokemon.length; i++){
    pokemonUncapped.push(pokemon[i].toLowerCase());
}

//assign the random number to the array to pass a random letter to computer choice
let computerChoice = pokemonUncapped[Math.floor(Math.random() * (26))];
let nameToGuess = [];
//seperate word into array of letters
for(let i = 0; i < computerChoice.length; i++) {
    nameToGuess.push(computerChoice.slice(i,i+1));
}


console.log(nameToGuess);

// let usersGuess = "";
// let guessesLeft = 
// let numberOfWins = 0;
// let numberOfLosses = 0;



//creates div elements based on the size of the nameToGuess array
$(document).ready(function() {
    for (let i = 0; i < nameToGuess.length; i++){
        let dashContiner = document.createElement("span");
        dashContiner.id = "pokeDash-" + i;
        
        let newDash = document.createTextNode("_ ");
        dashContiner.appendChild(newDash);
        
        let targetDiv = document.getElementById("div1");
        targetDiv.appendChild(dashContiner);
    }
});
