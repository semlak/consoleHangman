const inquirer = require("inquirer");
const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const lines = require('lines-js')
const clui = require('clui')
const chalkline = require('chalkline')
const keypress = require('keypress');
const boxen = require("boxen")
const wrapAnsi = require('wrap-ansi');

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



var tty = require('tty');
var ttys = require('ttys');
var rl = require('readline');

require("timers");

const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);


var stdin = ttys.stdin;
var stdout = ttys.stdout;


// let stout = process.stdout;

var write = function write (s) {
  stdout.write(s);
}


//
// move the cursor upward on the screen
var position = function position (line, col, save) {
	write('\033[' + line + ';' + col + 'H')
	return;
      // write(!save ? '\033[K\033[1A\r' : '\033[1A\r');
};


//
var up = function up (i, save) {

  i = i || 1;

  if (i > 0) {
    while(i--) {
      write(!save ? '\033[K\033[1A\r' : '\033[1A\r');
    }
  }
};


var down = function down (i, save) {

  i = i || 1;

  if (i > 0) {
    while(i--) {
      write(!save ? '\033[K\033[1B\r' : '\033[1B\r');
    }
  }
};

var right = function right (i) {

  i = i || 1;

  if (i > 0) {
    while(i--) {
      write('\033[1C\r');
    }
  }
};


let positions = {
	splash : {row: 3, col: 2},
	statsBox: {row: 3, col: 55},
	// winsCount: {row: 12, col: 13},
	// lossesCount: {row: 13, col: 13},
	hintBox: {row: 10, col: 2},
	wordBox: {row: 17, col: 2},
	letters: {row: 25, col: 3},
	messageField: {row: 27, col: 3},
	// defaultCurserPosition: {row: 25, col: 20}
}

let defaultMessage = "Guess a letter: "

let showMessage = function(message) {
	let messageToShow = (message|| defaultMessage)
	placeElement(positions.messageField.row, positions.messageField.col, messageToShow.toString(), true);
	// let mappedMessage =
	// position(positions.defaultCurserPosition.row, positions.defaultCurserPosition.col)
	// over curse to just after message
	position(positions.messageField.row, positions.messageField.col + messageToShow.length)
}


const splash = chalk.yellow(
	figlet.textSync('Hangman!', {
		horizontalLayout: 'default'
	})
)

let getStatsBox = function() {
	let winsBoxText = chalk.cyan("Player Name: ") + chalk.red.bold(app.playerName) +
		chalk.cyan("\nWins  : ") + chalk.red.bold(app.wins) +
		chalk.cyan("\nLosses: ") + chalk.red.bold(app.losses);
	let winsBox = boxen(winsBoxText, {padding: 1, borderStyle: "round"})
	return winsBox;
}

let getHintBox = function(showHint) {
	// [positions.hintBox.row...positions.wordBox.row]
	let hintText = chalk.red.bold(showHint ? app.game.hint : "Press 'Ctrl + H' for a hint!")
	// showMessage(showHint);
	return (boxen(wrapAnsi(hintText, 70), {padding: 1, borderStyle: "round"}))
	// console.log("\n");


}

let getWordBox = function() {
	let boxes = new Boxes(app.game.word.toString());
	return boxes.go().toString();
}


let placeElement = function(row, col, element, clearRows) {
	// console.log("placing Element");
	element.split("\n").forEach((line, i)=> {
		position(row + i, col);
		write(line + (clearRows ? "\033[K" : ""));
	})

}


let showSplash = function() {
	placeElement(positions.splash.row,positions.splash.col, splash);
}


let updateLosses= function() {
	// position curser firsts
	process.stdin.write(app.losses);
}

let updateStats = function() {
	// console.log(getStatsBox());
	placeElement(positions.statsBox.row, positions.statsBox.col, getStatsBox());
}

let updateHint = function(showHint) {
	// new box might be smaller than old box, and so need to clear
	placeElement(positions.hintBox.row, positions.hintBox.col,
		Array(positions.wordBox.row - positions.hintBox.row).fill(0).map((_) => "\033[K").join("\n"), true);
	placeElement(positions.hintBox.row, positions.hintBox.col, getHintBox(showHint),true);
}

let updateWordBox = function() {
	// placeElement(positions.hintBox.row, positions.hintBox.col, getHintBox());
	placeElement(positions.wordBox.row,positions.wordBox.col, getWordBox(), true);
}

let updateLetters = function() {
	// console.log(chalk.red("Letters guessaed:"));
	let userGuesses = "Letters guessed: " + chalk.cyan.bold(Object.keys(app.game.userGuesses).join(" "));
	// console.log(chalk.green(userGuesses));
	let guessesLeft = chalk.red.bold("Guesses left: " + app.game.guessesLeft);
	// console.log("\n");
	placeElement(positions.letters.row, positions.letters.col, userGuesses, true)
	placeElement(positions.letters.row, positions.letters.col + 54, guessesLeft, true)


}



let keypressGame = function() {
	keypress(process.stdin);
	clear();
	showSplash();
	updateStats();
	updateHint(false);
	updateWordBox();
	updateLetters();
	showMessage();
	// listen for the "keypress" event
	process.stdin.on('keypress', function(ch, key) {
		// console.log("in onKeypress event", key)
		// showMessage(JSON.stringify(key));
		if (key && key.name === "escape" || (key && key.ctrl && (key.name === 'c' || key.name === "q"))) {
			// console.log("Caught a Ctrl+C. Exiting")
			process.stdin.pause();
			showMessage("Exiting...");
			down(10);
			// process.stdin.on('keypress', null);
			// process.stdin.off();
			// keypressGame();
		}
		else if ((key && key.ctrl && key.name === "h") || (key && key.sequence === "\b" && key.name === "backspace")) {
			// console.log("showing hint")
			// showMessage("showing hint")
			// show hint
			app.game.showHint = true;
			app.game.currentHint++;
			// clear();
			updateHint(true);

		}
		else if (key && (/[A-Za-z]/i).test(key.name) && key.name.length === 1) {
			// console.log ("in else if")
			process.stdin.pause();
			let result = app.game.guessLetter(key.name);
			updateWordBox();
			updateLetters();
			showMessage();
			// console.log("result", result);
			if (!app.game.inProgress) {
				if (app.game.checkForWin()) {
					app.handleWin()
					showMessage(chalk.magenta.bold.underline("You Won!") + chalk.red(" New game starting ..."));
					// app.wins++;
				}
				else {
					app.handleLoss()
					showMessage(chalk.magenta.bold.underline("Sorry. You didn't get the word.") + chalk.red(" New game starting ..."));

					// showMessage("Sorry. You didn't get the word. New game starting ...");
				}
				// game is over. show game one last time (to show final letter input if user won)
				// showGame();
				// up()
				process.stdin.pause();

				// inquirerPromptForNewGame(app.game.checkForWin())

				setTimeoutPromise(2001).then(() => {
					app.startGame();
					process.stdin.resume();
					updateWordBox();
					updateStats();
					updateHint();
					updateLetters();
					showMessage();
				})

				// showGame();

			}
			else {
				// console.log("in else if -> else")
				process.stdin.resume();
				// console.log(process.stdin);
				// showGame();
				// showGame();
			}



		}
		else {
			process.stdin.pause();
			// console.log("in else")
			if (!app.game.inProgress) {
				// showGame();
				process.stdin.pause();
			}
			else {
				process.stdin.resume();
				// showGame();
			}
		}
	});

	process.stdin.setRawMode(true);
	process.stdin.resume();
	// showGame(app.game);
}



let drawBanner = function() {
	// clear();


	// splash.split("\n").forEach((line, i) => console.log(i+ ": " + line))
	console.log(splash)
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
			// console.log("game", app.game);
			keypressGame(app.game);

		}
		else {
			console.log("Okay. Exiting app...");
			down(10, false);
		}
	});
}


let main = function() {
	clear();
	showSplash();
	// position(positions.splash.row + 4, positions.splash.col)
	down(2);
	// console.log("\n");
	// drawBanner()
	getPlayerInfo();

	// showGame();
};

main();


//
// generate whitespace
//
var ws = function ws (i, multiplier) {

  var s = '';

  if (multiplier) {
    i = i * 2;
  }

  while(i--) {
    s += ' ';
  }
  return s;
};




// console.log(boxen('unicorn', {padding: 1, borderStyle: "round", float: "left"}))
// console.log(boxen('unicorn', {padding: 1, margin: 10, borderStyle: "round", float: "left"}))
// console.log(boxen('unicorn', {padding: 1, margin: 20, borderStyle: "round", float: "left"}))
// console.log( boxen(chalk.bold('unicorn'), {padding: 1, borderStyle: "round", float: "left"}))


// welcome the user.
// Ask for their name?
// that's pretty much it for the required user data.

// Ask if they want to play a game. Then start game.
// After game is over, tell player that they won/lost, ask if they want to play again

// process.stdin.setRawMode(true);
let demo = function() {
	write("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut " +
		"labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
		"nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit " +
		"esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in " +
		"culpa qui officia deserunt mollit anim id est laborum.")


	require("timers");

	const util = require('util');
	const setTimeoutPromise = util.promisify(setTimeout);

	let count = 5;
	let loop = function() {
		if (count < 1) {
			down(6, true);
			return;
		}

		setTimeoutPromise(300, 'foobar').then((value) => {
			up(1, true)
			// write('')
			write("X");
			count-- && loop();
		});

	  // value === 'foobar' (passing values is optional)
	  // This is executed after about 40 milliseconds.
	};

	// loop();
	setTimeoutPromise(500).then(() => {
		write('\033[s');
		position(1, 2);
		write("Xena!!!\033[K")
		write('\033[u')
		write("She is cuddly!!!")
		down(2);


	})

}
// demo();
// for (let i = 0; i < 3; i++) {
// 	up(1)
// 	write("X");
// }
