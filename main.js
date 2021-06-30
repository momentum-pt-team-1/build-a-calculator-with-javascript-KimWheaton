const calculator = document.querySelector("#calculator");
const numberKeys = calculator.querySelectorAll(".number");
const operatorKeys = calculator.querySelectorAll(".operator");
const decimalKey = calculator.querySelector(".decimal");
const equalKey = calculator.querySelector(".equal-sign");
const allClearKey = calculator.querySelector(".all-clear");
let display = document.querySelector("#calculator-screen");
let expression = ""

function enterNumber() {
    for (let key of numberKeys) {
        key.addEventListener('click', event => {
            display.textContent += event.target.value;
            });
        };
}

function enterOperator() {
    for (let key of operatorKeys) {
        key.addEventListener('click', event => {
            display.textContent += event.target.value;
            });
    };
}   

function enterDecimal() {
    decimalKey.addEventListener('click', event => {
        display.textContent += event.target.textContent;
    });
}

function enterEqual() {
    equalKey.addEventListener('click', event => {
        let solution = math.evaluate(display.textContent)
        display.textContent = solution
    });
}

function enterAllCLear() {
    allClearKey.addEventListener('click', event => {
        display.textContent=""; 
    });
}

function useCalculator() {
enterNumber()
enterOperator()
enterDecimal()
enterEqual()
enterAllCLear()
}

useCalculator()







