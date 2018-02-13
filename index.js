const inquirer = require("inquirer");
const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const lines = require('lines-js')
const clui = require('clui')
const chalkline = require('chalkline')
const keypress = require('keypress');
const boxen = require("boxen")

// require("coffee-script");
require("coffee-script/register");
const Boxes = require("./lib/boxes");
const HangmanApp = require("./lib/hangman")

let app = null;
// let boxes = new Boxes("Xena is cuddly!");
// console.log(boxes.go().toString());

// let Person = require("./person.coffee") // [Function: Person]
// console.log(Person);
// console.log(Word);
// let p = new Person ("Emma") // { name: 'Emma' }
// p.talk();


// console.log(boxes.greet());keypress

// console.log(GameData.words)

// let ui = new inquirer.ui.BottomBar();

// ui.log.write("Hangman Game");
// console.log(boxen('unicorn', {padding: 1, borderStyle: "round", float: "left"}))
// console.log(boxen('unicorn', {padding: 1, margin: 10, borderStyle: "round", float: "left"}))
// console.log(boxen('unicorn', {padding: 1, margin: 20, borderStyle: "round", float: "left"}))
// console.log( boxen(chalk.bold('unicorn'), {padding: 1, borderStyle: "round", float: "left"}))



let showGame = function() {
	drawBanner()
	let winsBoxText = chalk.cyan("Player Name: ") + chalk.red.bold(app.playerName) +
		chalk.cyan("  Wins: ") + chalk.red.bold(app.wins) +
		chalk.cyan("  Losses: ") + chalk.red.bold(app.losses);
	let winsBox = boxen(winsBoxText, {padding: 1, borderStyle: "round"})
	// console.log(chalk.cyan("Number of Wins: ") + chalk.red(app.wins))
	console.log("\n");
	console.log(winsBox);
	console.log("\n");
	let boxes = new Boxes(app.game.word.toString());
	console.log(boxes.go().toString());

	console.log("\n");

	console.log(chalk.red("Letters guessaed:"));
	let userGuesses = Object.keys(app.game.userGuesses).join(" ")
	console.log(chalk.green(userGuesses));
	console.log(chalk.red("Guesses left: " + app.game.guessesLeft))
	console.log("\n");
	console.log('Guess a letter: ');

}


let keypressGame = function() {
	keypress(process.stdin);
	// listen for the "keypress" event
	process.stdin.on('keypress', function(ch, key) {
		// let inquirerPromptForNewGame = function(wonGame) {
		// 	let newMessage = (wonGame ? "You Won! " : "Sorry. You lost" ) +
		// 		" Would you like to play another round?"
		// 	const questions = [{
		// 		name: "playGame",
		// 		type: 'list',
		// 		message: newMessage,
		// 		choices: ["Yes", "No", "Maybe", "Xena"],
		// 		default: "Yes"
		// 	}];

		// 	inquirer.prompt(questions).then(function(answers) {
		// 		console.log(answers);
		// 		// app = new HangmanApp(10, "tolkien")
		// 		// callback(answers.playGame === "Yes");
		// 		if (answers.playGame === "Yes") {
		// 			app.startGame();
		// 			process.stdin.resume();
		// 			showGame();
		// 		}


		// 	});
		// }

		console.log("in onKeypress event", key)
		if (key && key.ctrl && key.name == 'c') {
			console.log("Caught a Ctrl+C. Exiting")
			process.stdin.pause();
			// process.stdin.on('keypress', null);
			// process.stdin.off();
			// keypressGame();
		}
		else if (key && (/[A-Za-z]/i).test(key.name) && key.name.length === 1) {
			console.log ("in else if")
			process.stdin.pause();
			let result = app.game.guessLetter(key.name);
			console.log("result", result);
			if (!app.game.inProgress) {
				if (app.game.checkForWin()) {
					app.handleWin()
					// app.wins++;
				}
				else {
					app.handleLoss()
				}
				// game is over. show game one last time (to show final letter input if user won)
				showGame();
				process.stdin.pause();

				// inquirerPromptForNewGame(app.game.checkForWin())
				app.startGame();
				process.stdin.resume();
				showGame();

			}
			else {
				console.log("in else if -> else")
				process.stdin.resume();
				// showGame();
				showGame();
			}
		}
		else {
			process.stdin.pause();
			console.log("in else")
			if (!app.game.inProgress) {
				showGame();
				process.stdin.pause();
			}
			else {
				process.stdin.resume();
				showGame();
			}
		}
	});

	process.stdin.setRawMode(true);
	process.stdin.resume();
	showGame(app.game);
}



let drawBanner = function() {
	clear();
	console.log(
		chalk.yellow(
			figlet.textSync('Hangman!', {
				horizontalLayout: 'full'
			})
		)
	)
	let tee = lines()
		tee.line({
			from: [0,0],
			to:[4,0],
			style: 'bold'
		})
		tee.line({
			from: [2,0],
			to: [2,3]
		});
		// console.log("\n");
		// console.log(tee.toString());
}

let getPlayerInfo = function() {
	const questions = [{
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
	}, {
		name: "playGame",
		type: 'list',
		message: "Would you like to play a game?",
		choices: ["Yes", "No"],
		default: "Yes"
	}];

	inquirer.prompt(questions).then(function(answers) {
		console.log(answers);
		if (answers.playGame === "Yes") {
			app = new HangmanApp(answers.playerName, 10, "tolkien")
			app.startGame();
			// let game = app.game;
			console.log("game", app.game);
			keypressGame(app.game);
		}
		else {
			console.log("Okay. Exiting app...");
		}
	});
}


let main = function() {
	drawBanner()
	getPlayerInfo();
};



main();


// console.log(boxen('unicorn', {padding: 1, borderStyle: "round", float: "left"}))
// console.log(boxen('unicorn', {padding: 1, margin: 10, borderStyle: "round", float: "left"}))
// console.log(boxen('unicorn', {padding: 1, margin: 20, borderStyle: "round", float: "left"}))
// console.log( boxen(chalk.bold('unicorn'), {padding: 1, borderStyle: "round", float: "left"}))


// welcome the user.
// Ask for their name?
// that's pretty much it for the required user data.

// Ask if they want to play a game. Then start game.
// After game is over, tell player that they won/lost, ask if they want to play again
