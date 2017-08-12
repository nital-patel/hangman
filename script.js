var targetWord;
var guessedWord;
var wrongLetters;

function getRandomWord() {
    var gameWordArray = [
        'pie',
        'tree',
        'flower',
        'shirt',
        'mouse',
        'heart'
    ];

    var randNum;

    randNum = Math.floor(Math.random() * gameWordArray.length);
    return gameWordArray[randNum];
}

function checkIfUserWon () {
    return targetWord === guessedWord;
}

function checkIfUserLost () {
    if (wrongLetters.length === 6) {
        return true;
    }

    return false;
}

function findLetter(letter) {
    var letterFound = false;
    for (var i=0; i < targetWord.length; i++){
        if (targetWord.charAt(i)===letter ){
            letterFound = true;
            guessedWord = guessedWord.substr(0, i) + letter + guessedWord.substr(i + letter.length);
        }
    }

    if (!letterFound) {
        wrongLetters.push(letter);
    }

    console.log('Guessed Word' + guessedWord);
    console.log('User Won ? : ' + checkIfUserWon());
    console.log('Wrong Letters : ' + JSON.stringify(wrongLetters));
}

function reset() {
    targetWord = getRandomWord();
    guessedWord = "";
    wrongLetters = [];

    for (var i=0; i < targetWord.length; i++ ){
        guessedWord += "_";
    }

    console.log('Target Word : ' + targetWord);
    console.log('Guess Word : ' + guessedWord);

}

function updatePage() {

}

function initialBindings() {

}

reset();





