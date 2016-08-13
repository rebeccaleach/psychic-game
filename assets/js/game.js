// Psychic Game


var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


// computer randomly chooses a letter

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerChoice);


var wins = 0;
var losses = 0;
var guessesLeft = 9;



// player guesses the first letter and it is stored in the "playerGuess" variable

document.onkeyup = function(event) {
	var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
	totalPlayerGuesses.push(playerGuess);
	console.log(totalPlayerGuesses);
	document.getElementById("letterGuessed").innerHTML = totalPlayerGuesses;


	var restart = function () {

		wins = 0;
		losses = 0;
		guessesLeft = 9;
		computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log(computerChoice);
		document.getElementById("guessesLeft").innerHTML = guessesLeft--;


	}

	// if the player's letter matches the computer's letter, player wins and game resets (except for the wins/losses counter)

	if (computerChoice == playerGuess) {
		document.getElementById("message").innerHTML = "You Win!"
		document.getElementById("wins").innerHTML = (wins + 1);
		
	}

	else if (computerChoice !== playerGuess && guessesLeft > 0) {
		document.getElementById("guessesLeft").innerHTML = guessesLeft--;
	}

	else {
		document.getElementById("message").innerHTML = "Game Over"
		document.getElementById("losses").innerHTML = (losses + 1);
		
	}


};

var totalPlayerGuesses = [];
		

	