var red = document.querySelector(".red");
var cyan = document.querySelector(".cyan");
var violet = document.querySelector(".violet");
var orange = document.querySelector(".orange");
var pink = document.querySelector(".pink");


const center = document.querySelector(".center");

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}


console.log(getBGColor(orange))