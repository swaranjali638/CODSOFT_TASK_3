let display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = null;

function appendNumber(number) {
    if (currentInput.includes('.') && number === '.') return;
    currentInput += number;
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculateResult();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = null;
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.toString().slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                result = 'Error';
            } else {
                result = prev / current;
            }
            break;
        default:
            return;
    }
    currentInput = result;
    operator = null;
    previousInput = '';
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentInput || '0';
}
