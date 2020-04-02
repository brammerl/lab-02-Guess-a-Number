import compareNumbers from '../compareNumbers.js';

const test = QUnit.test;

test('testing that returns are 0, 1 and -1', function(assert) {
    const guess1 = 9;
    const guess2 = 4;
    const guess3 = 7;
    const number = 7;
    const badNumber = 13;
    
    const answer = compareNumbers(guess1, number);
    const answer2 = compareNumbers(guess2, number);
    const answer3 = compareNumbers(guess3, number);
    const answer4 = compareNumbers(badNumber, number);
    
    assert.equal(answer, 1);
    assert.equal(answer2, -1);
    assert.equal(answer3, 0);
    assert.throws(answer4, 'Error');
    
});
