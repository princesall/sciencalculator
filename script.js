let display = document.getElementById('display');
let expression = '';

function appendNumber(num) {
    expression += num;
    display.value = expression;
}

function appendOperator(op) {
    expression += op;
    display.value = expression;
}

function clearDisplay() {
    expression = '';
    display.value = '';
}

function calculate(func) {
    switch(func) {
        case 'sin':
            expression += 'Math.sin(';
            break;
        case 'cos':
            expression += 'Math.cos(';
            break;
        case 'tan':
            expression += 'Math.tan(';
            break;
        case '√':
            expression += 'Math.sqrt(';
            break;
        case 'log':
            expression += 'Math.log10(';
            break;
        case 'exp':
            expression += 'Math.exp(';
            break;
        case 'x²':
            expression += '**2';
            break;
        case '1/x':
            expression += '1/';
            break;
    }
    display.value = expression;
}

function evaluateExpression() {
    try {
        const result = eval(expression);
        expression = String(result);
        display.value = expression;
    } catch (error) {
        display.value = 'Erreur';
        expression = '';
    }
}
