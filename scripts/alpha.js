// Without utility function....................
// function play() {
//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden');

//     const playSection = document.getElementById('play');
//     playSection.classList.remove('hidden');

// }
// Without utility function....................

function continueGame() {
    const alphabet = getARandomAlphabet()
    console.log('your random alphabet is :', alphabet)

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackGroundColorById(alphabet);
}

function play() {
    hideElementById('home')
    showElementById('play')
    continueGame()
}