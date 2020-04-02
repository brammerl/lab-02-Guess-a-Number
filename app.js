import compareNumbers from './compareNumbers.js';
import { displayHigh, displayLow, youWin, youLose } from './functions.js';

const correctNumber = Math.ceil(Math.random() * 10);

const numInput = document.getElementById('inputBox');
const highLowText = document.getElementById('tooHighLow');
const triesLeftText = document.getElementById('triesLeft');

const mybutton = document.getElementById('submitButton');

let triesRemaining = 3;

mybutton.addEventListener('click', () => {
    let tries = triesRemaining--;
    triesLeftText.textContent = tries;
    const guess = Number(numInput.value); 
    const numCompared = compareNumbers(guess, correctNumber);
    console.log(correctNumber);
    
    if (numCompared === 1) {
        displayHigh();
        
    } else if (numCompared === -1) {
        displayLow();
          
    } else if (numCompared === 0) {
        youWin();
        mybutton.disabled = true;
        triesLeftText.style.visibility = 'hidden';
        highLowText.style.visibility = 'hidden';
    } 
    
    if (tries <= 0 && numCompared !== 0) {
        youLose();
        mybutton.disabled = true;
    }
});