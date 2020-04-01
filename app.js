import compareNumbers from './compareNumbers.js';
const correctNumber = Math.ceil(Math.random() * 10);

const numInput = document.getElementById('inputBox');

const triesLeftText = document.getElementById('triesLeft');
const highLowText = document.getElementById('tooHighLow');
const winLoseText = document.getElementById('winLose');
const mybutton = document.getElementById('submitButton');

let triesRemaining = 3;

mybutton.addEventListener('click', () => {
    let tries = triesRemaining--;
    triesLeftText.textContent = tries;
    const guess = Number(numInput.value); 
    const numCompared = compareNumbers(guess, correctNumber);
    
    if (numCompared === 1) {
        highLowText.textContent = `High`;
        mybutton.
    } else if (numCompared === -1) {
        highLowText.textContent = `Low`;
        
    } else if (numCompared === 0) {
        winLoseText.textContent = `You've won!`;
    } 
    
    if (tries === 0) {
        winLoseText.textContent = `Sorry! You've lost!`;
    }

});