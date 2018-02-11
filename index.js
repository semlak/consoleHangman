const Word = require("./lib/word.js");

// const inquirer = require("inquirer");
const inquirer = require("inquirer");
const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");

const GameData = require("./lib/game.js");
// console.log(GameData.words)

// let ui = new inquirer.ui.BottomBar();

// ui.log.write("Hangman Game");

let HangmanGame = class {
	constructor(playerName, word, maxGuesses) {
		console.log("Game is initializing.");
		// this.guesses = 0;
		this.word = new Word(word);
		this.maxGuesses = maxGuesses;

		this.userGuesses = {};
		this.wrongGuesses = {};
		this.rightGuesses = {};
		this.inProgress = true;

	}

	get guessesLeft() {
		return this.maxGuesses - this.wrongWholeWordGuesses - Object.keys(this.wrongGuesses).length;
	}

	guessLetter(guess) {
		let guessLowerCase = guess.toLowerCase();
		if (typeof (this.userGuesses[guessLowerCase]) === "undefined") {
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

// var keypress = require('keypress');

// // make `process.stdin` begin emitting "keypress" events
// keypress(process.stdin);

// // listen for the "keypress" event
// process.stdin.on('keypress', function (ch, key) {
//   console.log('got "keypress"', key);
//   if (key && key.ctrl && key.name == 'c') {
//     process.stdin.pause();
//   }
// });

// process.stdin.setRawMode(true);
// process.stdin.resume();

// function playGame() {

// }

let inquireGame = function(game) {
	if (!game.inProgress) {
		console.log("Game is over!");
	}
	else {
		console.log(game.word.toString());
		console.log("total", game.userGuesses);
		console.log("wrong", game.wrongGuesses);
		console.log("right", game.rightGuesses);
		const questions = [
		{
			name: 'guess',
			type: 'input',
			message: 'Guess a letter: '
		}];
		inquirer.prompt(questions).then(function(answers) {
			// let result = game.word.check(answers.guess);
			let result = game.guessLetter(answers.guess);
			console.log("word: " , game.word.toString());
			inquireGame(game);
		})
	}
}

let getPlayerInfo = function() {
	const questions = [
	{
		name: 'playerName',
		type: 'input',
		message: "Welcome to Hangman! Please tell me your name:",
		validate: function(value) {
			if (value.length) {
				return true;
			}
			else {
				return "Please enter at least something for a name."
			}
		},
	},{
		name: "playGame",
		type: 'list',
		message: "Would you like to play a game?",
		choices: ["Yes", "No"],
		default: "Yes"
	}];
	inquirer.prompt(questions).then(function(answers) {
		console.log(answers);
		let game = new HangmanGame(answers.playerName, "Xena is cuddly!", 10);
		inquireGame(game);

	});
}





let main = function () {
	clear();
	console.log(
		chalk.yellow(
			figlet.textSync('Hangman', { horizontalLayout: 'full' })
		)
	)
	// console.log(chalk.red("Starting new game!"));
	const run = () => {
		// console.log(Inquirer)
		getPlayerInfo();
		// console.log(userInfo);
	}
	run();
};



main();


// welcome the user.
// Ask for their name?
// that's pretty much it for the required user data.

// Ask if they want to play a game. Then start game.
