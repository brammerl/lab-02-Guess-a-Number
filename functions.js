const highLowText = document.getElementById('tooHighLow');
const winLoseText = document.getElementById('winLose');

export function displayHigh() {
    highLowText.textContent = `High`;

}

export function displayLow() {
    highLowText.textContent = `Low`;

}

export function youLose() {
    winLoseText.textContent = `Sorry! You've lost!`;

}

export function youWin() {
    winLoseText.textContent = `You've won!`;
    
}