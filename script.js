let currentDisplay = 0;
let display = document.querySelector(".result")
display.innerText = currentDisplay

let numFirst = "";
let operators = "";

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

const add = document.querySelector(".add")
const subtract = document.querySelector(".subtract")
const multiply = document.querySelector(".multiply")
const divide = document.querySelector(".divide")
const equal = document.querySelector(".equal")



add.addEventListener("click", () => gatherData("+"))
subtract.addEventListener("click", () => gatherData("-"))
multiply.addEventListener("click", () => gatherData("*"))
divide.addEventListener("click", () => gatherData("/"))
equal.addEventListener("click", () => operate(numFirst, currentDisplay, operators))

const clear = document.querySelector(".clear")
const reset = document.querySelector(".reset")

clear.addEventListener("click", () => clearLast())
reset.addEventListener("click", () => resetAll())


function operate(numA, numB, operator) {
    let result = 0;
    switch(operator) {
        case "+": 
            result = +numA + +numB;
            break;
        case "-":
           result = +numA - +numB;
           break;
        case "*":
           result = +numA * +numB;
           break;
        case "/":
           result = +numA / +numB;
           break;
    };

    result = result.toString()
    display.innerText = `${result}`;
    currentDisplay = result
}

function updateDisplay(call) {
    if (currentDisplay == 0) {
        display.innerText = `${call}`;
    } else {
        display.innerText = `${currentDisplay}${call}`
    }
    currentDisplay = display.innerText
}

function gatherData(oper) {
    numFirst = currentDisplay
    display.innerText = 0
    currentDisplay = 0;
    operators = oper
}

function clearLast() {
    if (currentDisplay > 9) {
        currentDisplay = currentDisplay.slice(0, -1);
    } else if (currentDisplay > 0 && currentDisplay <=9)
        currentDisplay = 0;
    display.innerText = `${currentDisplay}`
}

function resetAll() {
    numFirst = "";
    operators = "";
    currentDisplay = 0;
    display.innerText = 0;
}