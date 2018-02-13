'use strict';

let Letter = require("./letter.js");


module.exports = class Word {
	constructor(word) {
		// console.log("word", word);
		this.wordArr = word.split("").map(letter => new Letter(letter));
	}

	toString() {
		return this.wordArr.join("");
	}

	check(guess) {
		// console.log("checking guess", guess)
		this.wordArr.forEach(letter => letter.check(guess));
		let goodLetter = this.wordArr.some(letter=> letter.check(guess));
		// console.log("goodLetter", goodLetter);
		return goodLetter;
	}

	get isSolved() {
		return this.wordArr.every(letter => letter.passed);
	}
}



// let Word = module.exports ;

// let word = new Word("Xena isn't too silly!")
// // console.log(word);
// console.log(word);

// console.log(word.check("X"))
// console.log(word.toString());
// console.log(word.check("e"))
// console.log(word.toString());
// console.log(word.check("s"))
// console.log(word.check("t"))
// console.log(word.check("n"))
// console.log(word.check("o"))
// // word.wordArr[0].mask("!")
// // Letter.mask = "!"
// console.log(word.toString());
// console.log(word.check("i"))
// console.log(word.check("a"))
// console.log(word.check("l"))
// console.log(word.check("y"))
// console.log(word.toString());
// console.log(word);
