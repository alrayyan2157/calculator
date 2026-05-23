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

var operand1;
var operand2;
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