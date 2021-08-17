const inputOne = document.querySelector('#input-one');
const inputTwo = document.querySelector('#input-two');
const output = document.querySelector('#output')

const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

function add() {
    output.innerText = (Number(inputOne.value) + Number(inputTwo.value));
}
function subtract() {
    output.innerText = (Number(inputOne.value) - Number(inputTwo.value));
}
function multiply() {
    output.innerText = (Number(inputOne.value) * Number(inputTwo.value));
}
function divide() {
    output.innerText = (Number(inputOne.value) / Number(inputTwo.value));
}

