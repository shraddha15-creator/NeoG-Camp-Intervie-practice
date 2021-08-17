const inputArea = document.querySelector('#input');

const redBtn = document.querySelector('#red');
const greenBtn = document.querySelector('#green');
const blueBtn = document.querySelector('#blue');

redBtn.addEventListener('click', red);
greenBtn.addEventListener('click', green);
blueBtn.addEventListener('click', blue);

function red(){
    inputArea.style.color = 'red';
}

function green(){
    inputArea.style.color = 'green';
}

function blue(){
    inputArea.style.color = 'blue';
}