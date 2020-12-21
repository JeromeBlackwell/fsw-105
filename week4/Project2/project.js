const readlineSync = require ("readline-sync");
const num1 = readlineSync.questionInt("provide first num ")
const num2 = readlineSync.questionInt("provide second num ")
var enteredOperator = readlineSync.question("what operation do you ant to perfor : add, sub, mul, div? ")

function add(num1, num2){
return "addition of number -1: " + num1 + " with number -2:: " + num2 + " returns a sum of: " + (num1 + num2);
}
function sub(num1, num2){
return "subtraction of number -1: " + num1 + " with number -2:: " + num2 + " returns a sum of: " + (num1 - num2);
}
function mul(num1, num2){
return "multiplication of number -1: " + num1 + " with number -2:: " + num2 + " returns a sum of: " + (num1 * num2);
}
function div(num1, num2){
return "division of number -1: " + num1 + " with number -2:: " + num2 + " returns a sum of: " + (num1 / num2);
}

if(enteredOperator == "add"){
    console.log(add (num1, num2));
}
else if(enteredOperator == "sub"){
    console.log(sub (num1, num2));
}
else if(enteredOperator == "mul"){
    consule.log(mul (num1, num2));
}
else if(enteredOperator == "div"){
    console.log(div (num1, num2));
}