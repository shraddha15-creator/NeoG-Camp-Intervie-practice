var red = document.querySelector(".red");
var cyan = document.querySelector(".cyan");
var violet = document.querySelector(".violet");
var orange = document.querySelector(".orange");
var pink = document.querySelector(".pink");

const center = document.querySelector(".center");

var getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}

// var color = getBGColor(selectedElement);

const magicColorChanger = (element, color) => {
    return element.addEventListener('click', () => {
        center.style.backgroundColor = color
    });
};

magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(violet, getBGColor(violet));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(pink, getBGColor(pink));
magicColorChanger(red, getBGColor(red));
