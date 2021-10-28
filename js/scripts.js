function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1/number2;
}

const number1 = parseInt(prompt("Enter the first number"));
const number2 = parseInt(prompt("Enter the second number"));

const resultAdd = add(number1, number2);
const resultSub = subtract(number1,number2);
const resultMult = multiply(number1,number2);
const resultDiv = divide(number1, number2);


alert("addition: " + resultAdd + ", " + "subtraction: " + resultSub + ", " +
"multiplication: " + resultMult + ", " + "division: " + resultDiv);