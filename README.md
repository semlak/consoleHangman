# consoleHangman
## A hangman game for the Node.js console terminal
![Welcome Screen](https://i.postimg.cc/hjvNJZJY/hangman-full.gif)

This is a basic Node console application for the game [Hangman](https://en.wikipedia.org/wiki/Hangman_(game)), created as an assignment for a educational program I was completing. It is not a web application; it only runs in a terrminal and accepts keyboard input. To run it (instructions below), you need to clone/download the repository to your machine, with node installed, and run.


All of the Hangman words are from from [Tolkien's Legendarium](https://en.wikipedia.org/wiki/Tolkien%27s_legendarium), (Lord of the Rings/Silmarillion)


### Quick note
Currently, the app does not run well with normal console dimensions. Increase console size to at least 30 rows by 100 colums (not very big, but bigger than the common 24x80). I had not noticed until mostly done that I did most of the development on a larger terminal display.



## Some Technologies Used
Main technology
- JavaScript/[Node.js](https://nodejs.org/en/)

Various modules
- [Inquirer](https://www.npmjs.com/package/inquirer) for user Input
- [keypress](https://www.npmjs.com/package/keypress) also for user Input
- [chalk](https://www.npmjs.com/package/chalk) to add color to console UI
- [figlet](https://www.npmjs.com/package/figlet) to make a application banner/splash
- [boxen](https://www.npmjs.com/package/boxen) for some of the box rendering
- [lines-js](https://www.npmjs.com/package/lines-js) for more  of the box rendering
- [coffee-script](https://www.npmjs.com/package/coffee-script) I'm not a coffee-script person, but I created a boxes module that uses lines-js, and most of their examples used coffeescript. It was easier to adapt the code keeping it in coffeescript rather than convert to JavaScript.
- [wrap-ansi](https://www.npmjs.com/package/wrap-ansi) to wrap text
- various others


## Some goals
I wanted to implement somewhat of a text-gui for the game. I looked at using an ncurses or blessed library to handle drawing the screen, but decided to try and draw my own elements (using the above libraries). I wanted to have some features:
- A splash screen
- Boxes around various screen elements, similar to a web application
- Have a hint option

I initially had the entire screen redraw after any game update, but this resulted in a fair amount of screen flickering as I added features to the game. Do avoid this, I worked on manipulating the cursor position to only update portions of the screen. I created a small module called screen.js based primarily on code from [https://github.com/asyncly/cdir/blob/223fe0039fade4fad2bb08c2f7affac3bdcf2f89/cdir.js#L11](https://github.com/asyncly/cdir/blob/223fe0039fade4fad2bb08c2f7affac3bdcf2f89/cdir.js#L11). I used the code to create my own class, but the actual function definitions (write, up, right), are from that source. My module has helper functions that jump to a row,col position on the terminal;


### Running the app yourself:

To run download and run the application, you need git, node and npm installed

```
git clone https://github.com/semlak/consoleHangman
#or using SSH
git clone git@github.com:semlak/consoleHangman.git
cd consoleHangman
npm install
npm start
```

### Playing the game
After installing using the above game, and running the `node index.js` command:
- The game displays a splash and prompts for you to enter your name.
- It then asks if you want to play a game. If you answer no, it exits.
![Start Screen](https://i.postimg.cc/5tnZ2Wtv/hangman-start.gif)

Assuming you choose to play the game:
- A box is rendered with smaller boxes inside, where each smaller box contains an underscore ('\_'). Those stand for letters you need to guess.
- To guess, you just type any letter while the console is in focus.
- The game should update all letters guessed, the correct letters filled into the boxes, and how many wrong guesses you have left.
- For a hint, type 'Ctrl+H'
- To exit, type 'Ctrl+C' or the escape key ('Esc')

##### Wrong Guesses:
![Wrong Guessing](https://i.postimg.cc/R0MkmZv4/hangman-wrong-guesses.gif)

##### Using the Hint options (press Ctrl + H to view first hint and then cycle through hints):
![Hints](https://i.postimg.cc/x1SrsP7k/hangman-hints.gif)
##### Try to guess the letters in the word (in this case, "Silmaril":
![Correct Guessing](https://i.postimg.cc/Qdg2vTGf/hangman-correct-guesses.gif)
