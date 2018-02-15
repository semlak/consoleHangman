const GameData = require("./game.js");
const Word = require("./word.js");



let HangmanGame = class {
	constructor(word, maxGuesses) {
		console.log("Game is initializing.");
		// this.guesses = 0;
		this.actualWord  = word;
		this.word = new Word(word);
		this.maxGuesses = maxGuesses;

		this.userGuesses = {};
		this.wrongGuesses = {};
		this.rightGuesses = {};
		this.inProgress = true;
		this.showHint = false;
		this.currentHint = -1;

	}

	get hint() {
		let hintsAndAliases =  GameData.words[this.actualWord].hints.map(hint=> "Hint: " + hint)
		.concat(GameData.words[this.actualWord].aliases.map(alias => "Alias: " + alias))

		let numHints = hintsAndAliases.length;
		return hintsAndAliases[this.currentHint % numHints ]
	}

	get guessesLeft() {
		return this.maxGuesses - Object.keys(this.wrongGuesses).length;
	}

	guessLetter(guess) {
		let guessLowerCase = guess.toLowerCase();
		if (typeof(this.userGuesses[guessLowerCase]) === "undefined") {
			console.log("checking")
			// user had not already guessed this letter. Add it to userGuesses

			this.userGuesses[guessLowerCase] = guessLowerCase;

			// now, check if it is in word
			if (this.word.check(guess)) {
				this.rightGuesses[guessLowerCase] = guessLowerCase;
				if (this.word.isSolved) {
					this.inProgress = false;
					console.log("You won!")
				}
			}
			else {
				this.wrongGuesses[guessLowerCase] = guessLowerCase;
				if (this.checkForLoss()) {
					this.inProgress = false;
					console.log("You Lost!");
				}
			}

		}
		return true;
	}

	checkForWin() {
		return this.word.isSolved;
	}

	checkForLoss() {
		return Object.keys(this.wrongGuesses).length >= this.maxGuesses;
	}
}



let HangmanApp = class {
	constructor(playerName, maxGuesses, theme) {
		console.log("Initializing App");
		this.playerName = playerName;
		this.game;
		this.theme = theme;
		this.maxGuesses = maxGuesses;
		this.wins = 0;
		this.losses = 0;
		// keep track of last word used. For a given game, we don't want to use the last word used for the next word
		this.lastWordUsed = "";

		this.possibleWords = this.getPossibleWords(this.theme);

		let me = this;

		// at start of app, load all of the possibleWords into the unused word collection. They will be removed as they are used.
		this.unusedWords = this.possibleWords.slice(0);  //this clones array by taking slice from first element to end
	}


	getPossibleWords(theme) {
		// convert the "keys" of GameData.words object into an array. They are the possible hangman words
		let words = Object.keys(GameData.words);
		// let words = ["Gandalf", "Fingolfin"];
		return words;
	}



	startGame() {
		console.log("App is starting game");
		// get unused word from unusedWords. However, if all unused words are used, reset all unused words with the possible words
		let me = this;
		// potential words used is simply the array of unusedWords, but filtered to remove the word just played.
		// note that the word just played won't be in there if the player won. However, if the player lost, we want to avoid the same word coming up again.
		let filteredUnusedWords = this.unusedWords.filter(word => word !== this.lastWordUsed);
		// Now, if filteredUnusedWords is of length 0, then just reset the word list.

		if (filteredUnusedWords.length < 1) {
			this.unusedWords = this.possibleWords.slice(0);
			// refilter to remove last word played
			// let filteredUnusedWords = this.unusedWords.filter(word => word !== this.lastWordUsed);
			return me.startGame();
		}


		this.word = filteredUnusedWords[Math.floor(Math.random()*filteredUnusedWords.length)];
		console.log("Word is: " , this.word);
		// this.word = "Fingolfin";
		this.game = new HangmanGame(this.word, this.maxGuesses);
		this.lastWordUsed = this.word;
		//We don't remove word from unusedWord list yet, because we only remove when player wins on that word

	}


	guessLetter(letter) {
		let output = this.game.guessLetter(letter);
		// return (output);
		// update game's display

	}

	get guessesLeft() {
		return this.game.guessesLeft;
	}

	handleWin() {
		let me = this;
		// remove the word just completed from the array of unused words (used filter)
		this.unusedWords = this.unusedWords.filter( word => word !== me.word);
		me.wins++;
	}

	handleLoss() {
		// let me = this;
		me.losses++;
	}


}


module.exports = HangmanApp;