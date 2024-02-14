// Without utility function....................
// function play() {
//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden');

//     const playSection = document.getElementById('play');
//     playSection.classList.remove('hidden');

// }
// Without utility function....................

function handleKeyboardButtonPress(event) {
    const playerPressed = event.key
    // console.log('Player pressed', playerPressed);

    if (playerPressed === 'Escape') {
        gameOver();
    }
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);



    if (playerPressed === expectedAlphabet) {
        // console.log('You Win');

        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);


        const newScore = currentScore + 1;


        currentScoreElement.innerText = newScore;



        continueGame()
        removeBackGroundColorById(expectedAlphabet);
    } else {
        console.log('You are Wrong And lost a life');

        const currentLifeElement = document.getElementById('Current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);



        const newLife = currentLife - 1;


        currentLifeElement.innerText = newLife;

        if (newLife === 0) {
            gameOver();
        }
    }
}

document.addEventListener('keyup', handleKeyboardButtonPress)


function continueGame() {
    const alphabet = getARandomAlphabet()
    // console.log('your random alphabet is :', alphabet)

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackGroundColorById(alphabet);
}

function play() {
    hideElementById('home')
    hideElementById('final-score')
    setTextElementById('Current-life', 5);
    setTextElementById('current-score', 0);
    showElementById('play')
    continueGame()
}

function gameOver() {
    hideElementById('play');
    showElementById('final-score');

    const lastScore = getTextElementValueById('current-score');
    setTextElementById('last-score', lastScore);

    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackGroundColorById(currentAlphabet);

}