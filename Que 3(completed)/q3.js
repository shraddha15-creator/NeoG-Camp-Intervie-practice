const inputArea = document.querySelector('#input');

const h1Btn = document.querySelector('#h1');
const h2Btn = document.querySelector('#h2');
const h3Btn = document.querySelector('#h3');

h1Btn.addEventListener('click', h1);
h2Btn.addEventListener('click', h2);
h3Btn.addEventListener('click', h3);

function h1() {
    inputArea.style.fontSize = '32px';
}

function h2() {
    inputArea.style.fontSize = '24px';
}

function h3() {
    inputArea.style.fontSize = '18px';
}