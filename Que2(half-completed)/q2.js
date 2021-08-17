const inputArea = document.querySelector('#input');
const incBtn = document.querySelector('#increase-font-btn');
const decBtn = document.querySelector('#decrease-font-btn');

incBtn.addEventListener('click', increaseFontSize);
decBtn.addEventListener('click', decreaseFontSize);

function increaseFontSize(){
    inputArea.style.fontSize = "x-large";
}

function decreaseFontSize(){
    inputArea.style.fontSize = "small";
}

