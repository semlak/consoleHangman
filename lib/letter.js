'use strict';

const defaultMaskChar = "_"
const regEx = /[A-Za-z]/ig;



class Letter {
	constructor(val) {
		// this.val = val;
		this.actualVal = val
		// this.passed = 	(/A-Z/ig).test(val);

		// console.log(val.match(/[A-Z]/))
		this.passed = 	!(/[A-Za-z]/ig).test(val) ;
	}

	get val() {
		return this.passed ? this.actualVal : Letter.maskChar;
	}

	check(guess) {
		if (this.actualVal.toUpperCase() === guess.toUpperCase()) {
			this.passed = true;
			return true;
		}
		else {
			return false;

		}
	}

	toString() {
		return this.val;
	}
}

// set the class variable 'maskChar', the character to return if letter shouuld be masked

Letter.maskChar = defaultMaskChar;

module.exports = Letter
// let Letter = module.exports;

// let a = new Letter ("a");
// console.log(a.toString());
// a.passed = true;
// console.log(a.toString());
