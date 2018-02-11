const inquirer = require("inquirer");


module.exports = class Inquirer {
	constructor() {

	}

	getPlayerInfo() {
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
					return "Please enter at least something for a name:"
				}
			},
			name: "playGame",
			type: 'confirm',
			message: "Would you like to play a game?",
			default: true
		}];
		return inqurier.prompt(questions);
	}



}
