function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackGroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-700');

}

function getARandomAlphabet() {

    // create alphabets arry
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    // get random alphabets

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    // console.log(index, alphabet);

    return alphabet;
}