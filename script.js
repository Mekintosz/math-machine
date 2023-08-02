let numA = 0;
let numB = 0;
let operator = "";

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