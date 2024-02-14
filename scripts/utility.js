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

function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}



function removeBackGroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-700');

}

function setTextElementById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
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