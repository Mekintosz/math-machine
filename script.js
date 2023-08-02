let numA = 0;
let numB = 0;
let operator = "";
let currentDisplay = 0;
let display = document.querySelector(".result")
display.innerText = currentDisplay

const num1 = document.querySelector(".b1")
const num2 = document.querySelector(".b2")
const num3 = document.querySelector(".b3")
const num4 = document.querySelector(".b4")
const num5 = document.querySelector(".b5")
const num6 = document.querySelector(".b6")
const num7 = document.querySelector(".b7")
const num8 = document.querySelector(".b8")
const num9 = document.querySelector(".b9")
const num0 = document.querySelector(".b0")



num1.addEventListener("click", () => updateDisplay(1))
num2.addEventListener("click", () => updateDisplay(2))
num3.addEventListener("click", () => updateDisplay(3))
num4.addEventListener("click", () => updateDisplay(4))
num5.addEventListener("click", () => updateDisplay(5))
num6.addEventListener("click", () => updateDisplay(6))
num7.addEventListener("click", () => updateDisplay(7))
num8.addEventListener("click", () => updateDisplay(8))
num9.addEventListener("click", () => updateDisplay(9))
num0.addEventListener("click", () => updateDisplay(0))

arrOfOperators = ["+", "-", "*", "/", "="]

const add = document.querySelector(".add")
const subtract = document.querySelector(".subtract")
const multiply = document.querySelector(".multiply")
const divide = document.querySelector(".divide")
const equal = document.querySelector(".equal")
add.addEventListener("click", () => )
equal.addEventListener("click", () =>)

function operate(numA, numB, operator) {

    switch(operator) {
        case "+": 
            numA+numB;
            break;
        case "-":
            numA-numB;
            break;
        case "*":
            numA*numB;
            break;
        case "/":
            numA/numB;
            break;
    };
}

function updateDisplay(call) {
    if (currentDisplay == 0) {
        display.innerText = `${call}`;
    } else {
        display.innerText = `${currentDisplay}${call}`
    }
currentDisplay = display.innerText
}

function equal() {}