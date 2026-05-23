function add(x,y){
    return x+y;
}

function subtract(x,y){

    return x-y;
}

function multiply(x,y){
    return x*y;
}

function divide(x,y){
    return x/y;
}

var operand1 = 0;
var operand2 = 0;
var operator;
var result = 0;

function operate(operand1, operator, operand2){
    if (operator == "+") {
        result = add(operand1, operand2);
    } else if (operator == "-") {
        result = subtract(operand1, operand2);
    } else if (operator == "*") {
        result = multiply(operand1, operand2);
    } else if (operator == "/") {
        result = divide(operand1, operand2);
    }
}

var numpad = document.getElementById("numbers");
var operators = document.getElementById("operators");
let flag = 0;

function updateValue(i){
    if (flag = 0){
        operand1 = operand1*10 + i;
        display.textContent += i;
    } else if (flag = 1){
        operator = i;
        display.textContent += " "+i+" ";
    } else if (flag = 2){
        operand2 = operand2*10 + i;
        display.textContent += i;
    }
}

function createNumbers() {
    for (let i = 0; i < 10; i++){
        let number = document.createElement("button");
        number.textContent = i;
        number.addEventListener("click",() => {
            updateValue(i);
        })
        numpad.appendChild(number);
    }
}

function createOperators(){
    for (let i in ["+","-","/","*"]){
        let operatorButton = document.createElement("button");
        operatorButton.textContent = i;
        operatorButton.addEventListener("click",() => {
            flag = 1;
            updateValue(i);
            flag = 2;
        })
        operators.appendChild(operatorButton);
    }
}

createNumbers();
createOperators();