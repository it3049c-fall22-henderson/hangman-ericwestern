// START + DIFFICULTY SELECTION
const startWrapper = document.getElementById(`startWrapper`);
const difficultySelectForm = document.getElementById(`difficultySelect`);
const difficultySelect = document.getElementById(`difficulty`);

// GAME
const gameWrapper = document.getElementById(`gameWrapper`);
const guessesText = document.getElementById(`guesses`);
const wordHolderText = document.getElementById(`wordHolder`);

// GUESSING FORM
const guessForm = document.getElementById(`guessForm`);
const guessInput = document.getElementById(`guessInput`);
const guessButton = document.getElementById('guessSubmitButton');

// GAME RESET BUTTON
const resetGame = document.getElementById(`resetGame`);

// CANVAS
let canvas = document.getElementById(`hangmanCanvas`);

let hangman;

// The following Try-Catch Block will catch the errors thrown
try {
  // Instantiate a game Object using the Hangman class.

  // add a submit Event Listener for the to the difficultySelectionForm
  //    get the difficulty input
  //    call the game start() method, the callback function should do the following
  //       1. hide the startWrapper
  //       2. show the gameWrapper
  //       3. call the game getWordHolderText and set it to the wordHolderText
  //       4. call the game getGuessessText and set it to the guessesText
  difficultySelectForm.addEventListener(`submit`, function (event) {
    event.preventDefault();
    hangman = new Hangman(canvas);    
    hangman.start();
    startWrapper.classList.add('hidden');
    gameWrapper.classList.remove('hidden');
    wordHolderText.innerHTML = hangman.getWordHolderText();
    guessesText.innerText = hangman.getGuessesText();
  });

  // add a submit Event Listener to the guessForm
  //    get the guess input
  //    call the game guess() method
  //    set the wordHolderText to the game.getHolderText
  //    set the guessesText to the game.getGuessesText
  //    clear the guess input field
  // Given the Guess Function calls either the checkWin or the onWrongGuess methods
  // the value of the isOver and didWin would change after calling the guess() function.
  // Check if the game isOver:
  //      1. disable the guessInput
  //      2. disable the guessButton
  //      3. show the resetGame button
  // if the game is won or lost, show an alert.
  guessForm.addEventListener(`submit`, function (e) {
    e.preventDefault();
    hangman.guess(guessInput.value)
    wordHolderText.innerText = hangman.getWordHolderText();
    guessesText.innerText = hangman.getGuessesText();
    guessInput.value = '';

    if (hangman.isOver) {
      resetGame.classList.remove('hidden');
      guessInput.disabled = true;
      guessButton.disabled = true;

      if (hangman.didWin) {
        setTimeout(function() {
          alert("You win");
        }, 10);
      } else {
        setTimeout(function() {
          alert("You lose");
        }, 10);
      }
    }
    
  });

  // add a click Event Listener to the resetGame button
  //    show the startWrapper
  //    hide the gameWrapper
  resetGame.addEventListener(`click`, function (e) {
    e.preventDefault();
    guessInput.disabled = false;
    guessButton.disabled = false;
    resetGame.classList.add('hidden');
    hangman.start();    
    wordHolderText.innerHTML = hangman.getWordHolderText();
    guessesText.innerText = hangman.getGuessesText();
  });

} catch (error) {
  console.error(error);
  alert(error);
}
