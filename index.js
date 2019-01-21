const inquirer = require("inquirer");
const chalk = require("chalk");
const clear = require("clear");
// const clui = require('clui')
// const chalkline = require('chalkline')
const keypress = require('keypress');

// require("coffee-script");
const HangmanApp = require("./lib/hangman")
const Screen = require("./lib/screen")

let app = null;


require("timers");

const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);



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


var screen = new Screen(app, positions);

let keypressGame = function() {
  keypress(process.stdin);
  clear();
  screen.showSplash();
  screen.updateStats();
  screen.updateHint();
  screen.updateWordBox();
  screen.updateLetters();
  screen.showMessage();
  // listen for the "keypress" event
  process.stdin.on('keypress', function(ch, key) {
    // console.log("in onKeypress event", key)
    // screen.showMessage(JSON.stringify(key));
    if (key && key.name === "escape" || (key && key.ctrl && (key.name === 'c' || key.name === "q"))) {
      // console.log("Caught a Ctrl+C. Exiting")
      process.stdin.pause();
      screen.showMessage("Exiting...");
      screen.down(10);
      // process.stdin.on('keypress', null);
      // process.stdin.off();
      // keypressGame();
    }
    else if ((key && key.ctrl && key.name === "h") || (key && key.sequence === "\b" && key.name === "backspace")) {
      // console.log("showing hint")
      // screen.showMessage("showing hint")
      // show hint
      app.game.showHint = true;
      app.game.currentHint++;
      // clear();
      screen.updateHint(true);

    }
    else if (key && (/[A-Za-z]/i).test(key.name) && key.name.length === 1) {
      // console.log ("in else if")
      process.stdin.pause();
      let result = app.game.guessLetter(key.name);
      screen.updateWordBox();
      screen.updateLetters();
      screen.showMessage();
      // console.log("result", result);
      if (!app.game.inProgress) {
        if (app.game.checkForWin()) {
          app.handleWin()
          screen.showMessage(chalk.magenta.bold.underline("You Won!") + chalk.red(" New game starting ..."));
          // app.wins++;
        }
        else {
          app.handleLoss()
          screen.showMessage(chalk.magenta.bold.underline("Sorry. You didn't get the word.") + chalk.red(" New game starting ..."));

          // screen.showMessage("Sorry. You didn't get the word. New game starting ...");
        }
        // game is over. show game one last time (to show final letter input if user won)
        // showGame();
        // up()
        process.stdin.pause();

        // inquirerPromptForNewGame(app.game.checkForWin())

        setTimeoutPromise(2001).then(() => {
          app.startGame();
          process.stdin.resume();
          screen.updateWordBox();
          screen.updateStats();
          screen.updateHint();
          screen.updateLetters();
          screen.showMessage();
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
      screen.app = app;
      app.startGame();
      // let game = app.game;
      // console.log("game", app.game);
      keypressGame(app.game);

    }
    else {
      console.log("Okay. Exiting app...");
      screen.down(10, false);
    }
  });
}


let main = function() {
  clear();
  screen.showSplash();
  screen.down(2);
  getPlayerInfo();

};

main();

