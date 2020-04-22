const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const popup = document.getElementById("popup-container");
const finalMessage = document.getElementById("final-message");
const playAgainBtn = document.getElementById("play-button");
const notification = document.getElementById("notification-container");

const figureParts = document.querySelectorAll('.figure-part');

const words = ['maminka','tatinek','breberka','hovno'];

let selectedWord = words[Math.floor(Math.random()*words.length)];

const correctLetters = [];
const wrongLetters = [];

// Show hidden word
function displayWord() {
    wordEl.innerHTML = `
    ${selectedWord
        .split('')
        .map(
            letter =>`
            <span class= "letter">
            ${correctLetters.includes(letter) ? letter : '' }
            </span>
            `
        )
        .join('')
    }`;
    console.log(wordEl.innerText);
}

displayWord();
