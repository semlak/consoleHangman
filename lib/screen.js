'use strict'

// const inquirer = require("inquirer");
const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const lines = require('lines-js')
// const clui = require('clui')
// const chalkline = require('chalkline')
const keypress = require('keypress');
const boxen = require("boxen")
const wrapAnsi = require('wrap-ansi');

// Boxes is a coffee-script file, so require coffee-script/register
require("coffee-script/register");
const Boxes = require("./boxes");


var tty = require('tty');
var ttys = require('ttys');
var rl = require('readline');

require("timers");

const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);


var stdin = ttys.stdin;
var stdout = ttys.stdout;
const oct33 = '\x1B'


// let stout = process.stdout;

// I borrowed much of the code to manipulate the cursor position from https://github.com/asyncly/cdir/blob/223fe0039fade4fad2bb08c2f7affac3bdcf2f89/cdir.js#L11
// I used the code to create my own class, but the actual function definitions for write, up, right, are from that source

module.exports = class Screen {
	constructor(app, positions) {
		this.app = app
		this.positions = positions;
	}


	write (s) {
	  stdout.write(s);
	}


	position (line, col, save) {
		// this.write('' + oct33 + '[' + line + ';' + col + 'H')
		this.write('' + oct33 + '[' + line + ';' + col + 'H')
		return;
	      // this.write(!save ? '' + oct33 + '[K' + oct33 + '[1A\r' : '' + oct33 + '[1A\r');
	};


	//
	up (i, save) {

	  i = i || 1;

	  if (i > 0) {
	    while(i--) {
	      this.write(!save ? '' + oct33 + '[K' + oct33 + '[1A\r' : '' + oct33 + '[1A\r');
	    }
	  }
	};


	down (i, save) {

	  i = i || 1;

	  if (i > 0) {
	    while(i--) {
	      this.write(!save ? '' + oct33 + '[K' + oct33 + '[1B\r' : '' + oct33 + '[1B\r');
	    }
	  }
	};

	right (i) {

	  i = i || 1;

	  if (i > 0) {
	    while(i--) {
	      this.write('' + oct33 + '[1C\r');
	    }
	  }
	};


	get defaultMessage() { return "Guess a letter: "; }

	showMessage(message) {
		let messageToShow = (message|| this.defaultMessage)
		this.placeElement(this.positions.messageField.row, this.positions.messageField.col, messageToShow.toString(), true);
		// let mappedMessage =
		// this.position(this.positions.defaultCurserthis.Position.row, this.positions.defaultCurserthis.Position.col)
		// over curse to just after message
		this.position(this.positions.messageField.row, this.positions.messageField.col + messageToShow.length)
	}


	get splash() {
		return chalk.magenta.bold(
			figlet.textSync('Hangman!', {
				horizontalLayout: 'default'
			})
		)
	}

	getStatsBox() {
		let displayName = this.app.playerName.length < 25 ? this.app.playerName : this.app.playerName.slice(0,22)+"...";

		let winsBoxText = chalk.cyan("Player Name: ") + chalk.red.bold(displayName) +
			chalk.cyan("\nWins  : ") + chalk.red.bold(this.app.wins) +
			chalk.cyan("\nLosses: ") + chalk.red.bold(this.app.losses);
		let winsBox = boxen(winsBoxText, {padding: 1, borderStyle: "round"})
		return winsBox;
	}

	getHintBox(showHint) {
		// [this.positions.hintBox.row...this.positions.wordBox.row]
		let hintText = chalk.red.bold(showHint ? this.app.game.hint : "Press 'Ctrl + H' for a hint!")
		// showMessage(showHint);
		return (boxen(wrapAnsi(hintText, 70), {padding: 1, borderStyle: "round"}))
		// console.log("\n");


	}

	getWordBox() {
		let boxes = new Boxes(this.app.game.word.toString());
		return boxes.go().toString();
	}


	placeElement(row, col, element, clearRows) {
		// console.log("placing Element");
		element.split("\n").forEach((line, i)=> {
			this.position(row + i, col);
			this.write(line + (clearRows ?  oct33 + '[K' : ""));
		})

	}


	showSplash() {
		this.placeElement(this.positions.splash.row,this.positions.splash.col, this.splash);
	}


	updateStats() {
		// console.log(this.getStatsBox());
		this.placeElement(this.positions.statsBox.row, this.positions.statsBox.col, this.getStatsBox());
	}

	updateHint(showHint) {
		// new box might be smaller than old box, and so need to clear
		this.placeElement(this.positions.hintBox.row, this.positions.hintBox.col,
			Array(this.positions.wordBox.row - this.positions.hintBox.row).fill(0).map((_) => oct33 + '[K').join("\n"), true);
		this.placeElement(this.positions.hintBox.row, this.positions.hintBox.col, this.getHintBox(showHint),true);
	}

	updateWordBox() {
		// this.placeElement(this.positions.hintBox.row, this.positions.hintBox.col, this.getHintBox());
		this.placeElement(this.positions.wordBox.row,this.positions.wordBox.col, this.getWordBox(), true);
	}

	updateLetters() {
		// console.log(chalk.red("Letters guessaed:"));
		let userGuesses = "Letters guessed: " + chalk.cyan.bold(Object.keys(this.app.game.userGuesses).join(" "));
		// console.log(chalk.green(userGuesses));
		let guessesLeft = chalk.red.bold("Guesses left: " + this.app.game.guessesLeft);
		// console.log("\n");
		this.placeElement(this.positions.letters.row, this.positions.letters.col, userGuesses, true)
		this.placeElement(this.positions.letters.row, this.positions.letters.col + 54, guessesLeft, true)

	}


}
