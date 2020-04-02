function compareNumbers(guess, correctNumber) {
    if (guess === correctNumber) {
        return 0;
    } else if (guess < correctNumber && guess > 0) {
        return -1;
    } else if (guess > correctNumber && guess < 11) {
        return 1;
    } else {
        () => { throw new 'Error: Not a number between 1 and 10'; };
    }
}

export default compareNumbers; 