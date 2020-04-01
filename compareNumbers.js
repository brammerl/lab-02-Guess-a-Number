function compareNumbers(guess, correctNumber) {
    if (guess === correctNumber) {
        return 0;
    } else if (guess < correctNumber) {
        return -1;
    } else if (guess > correctNumber) {
        return 1;
    }

    try {
        if (isNaN(guess)) throw 'Error!';   
    }
    catch (err) {
        document.getElementById('errorMessage').textContent = err; 
    }
}


export default compareNumbers; 