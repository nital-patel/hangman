
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
    targetWord = Math.floor(Math.random() * gameWordArray.length);
    return gameWordArray[targetWord].toUpperCase();
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

    if (checkIfUserWon()) {
        alert("Congratulations you won!!!");
    }

    renderGuessedWord();
    console.log('Wrong Letters : ' + JSON.stringify(wrongLetters));
}

function init() {
    var lettersTable = $("#letters");
    var counter = 0;
    var row;
    var box;

    targetWord = getRandomWord();
    guessedWord = "";
    wrongLetters = [];
    for (var i=0; i < targetWord.length; i++ ){
        guessedWord += "_";
    }

    for (i=0; i<7; i++) {
        row = $("<tr></tr>");
        for (var j=0; j<4 && counter<26 ; j++, counter++) {
            box = $("<td class='box'><div class =\"boxes\">" + String.fromCharCode(65 + counter)+ "</div></td>");
            box.click(findLetter.bind(null, String.fromCharCode(65 +  counter)));
           row.append(box);
        }
        lettersTable.append(row);
    }

    renderGuessedWord();
    console.log('Target Word : ' + targetWord);
    console.log('Guess Word : ' + guessedWord);
    console.log("Incorrect, Try Again!");
    console.log("Correct, try Again!");
}

function renderGuessedWord() {
    var guessWordBox  = $("#guessed-word-boxes");
    guessWordBox.html("");

    for (var i=0; i < guessedWord.length; i++ ){
        guessWordBox.append($("<li class=\"guessed-letter\"><div class=\"box\">" + guessedWord.charAt(i) + "</div></li>"));
    }
}

function renderStrikedLetters() {
    

}


function updatePage() {

}

init();






