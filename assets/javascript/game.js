// List of words for game
var guessWord = ["Jigsaw","Blood","Game","Live", "Die", "Live or Die Make your Choice", "Game Over", "Pain", "Death"];

// Holds the solution word
var selectedWord ="";

// Breaks the selectedWord into individual characters and places it in array as indexed letters
var selectedWordLetters = [];

// This variable holds the number of characters for the selected Word
var numBlanks = 0;

// Hold all letters the user guessed incorrectly from the selected Word
var wrongGuess= [];

// Holds all letters chosen and not chosen by the user
var blanksandChosen = [];

// Split letters
var letterInGuess ="";

// Game Counters
var winCount = 0; 
var lossCount = 0;
var numGuesses = 9;


// Hangman game logic when game begins
function startGame() {
	// Sets the number of guesses to 9 every time the user starts the game
	numGuesses = 9;

	// For user input
	var userLetter ="";

	console.log(letterInGuess);

	

	// Stores correct user input
	var correctLetter ="";

	// Word the user has to guess from is randomly chosen from the array
	var randomWord = guessWord[Math.floor(Math.random()*(guessWord.length))]; 

	// Splits the guessWord into indiviual characters
	selectedWordLetters = randomWord.split("");

	// Counts and holds the amount of split letters from random array word
	numBlanks = selectedWordLetters.length;

	// Converts all letters entered into upper case. This allows the conditional statements to work regardless of case.
	userLetter = userLetter.toUpperCase();

	// Emptys the array of blank and chosesn letters 
	blanksandChosen = []; 

	// Sets wrong guesses to none
	wrongGuess = [];

	// Replaces the characters for the randomly chosen word from the array with underscores
	for (var i = 0; i < numBlanks; i++) {
		blanksandChosen.push("_ ");
	};

	// Displays the number of guesses on the DOM at beginning of round
	document.getElementById("guesses-remaining").innerHTML = numGuesses;

	// Displays the random word into split characters on the DOM at the beginning of round
	document.getElementById("blank-letters").innerHTML = blanksandChosen.join("");

	// Displays the number of incorrect attempts remaining before game is over
	document.getElementById("guesses-remaining").innerHTML = wrongGuess.join("");
	
}

//checks if the the letter provided by the user matches one or more of the letters in the word
	function checkLetters (letter) {
		var letterInGuess = false;
		for (var i = 0; i < numBlanks; i++) {
			if(selectedWordLetters[i] === userLetter) {
				correctLetter[i] = userLetter + " ";
				var letterInGuess = true;				

				}
			}
		}

	// if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and number of remaining guesses is reduced by 1.
	if(!letterInGuess) {
		var wrongLetter = document.getElementById("guessedLetter");
		var userGuess = document.createTextNode(" " + userGuess);
		guessedLetter.appendChild(userGuess); 
		numGuesses--;
	}
		
	
	//checks if all letters have been found
	var userWins = true;
	for (var i = 0; i < guessWord.length; i++) {
		if(guessWord[i] === "_ "){
			youWon = false;
		}
	}

	if(userWins){
		winCount++;
		startGame();
	}
	
	if (numBlanks === 9){
		var audio = new Audio('../images/gameOver.mp3');
		audio.play();
	}
	


