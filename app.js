document.addEventListener('DOMContentLoaded', (event) => {
    const calculatorScreen = document.getElementById('calculator-screen');
    const buttons = document.querySelectorAll('.calculator-keys button');
    let currentInput = '';
    let operator = '';
    let firstOperand = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.value;

            switch (value) {
                case 'all-clear':
                    currentInput = '';
                    operator = '';
                    firstOperand = '';
                    calculatorScreen.value = '';
                    break;
                case '=':
                    if (firstOperand !== '' && currentInput !== '') {
                        try {
                            calculatorScreen.value = eval(firstOperand + operator + currentInput);
                            firstOperand = calculatorScreen.value;
                        } catch {
                            calculatorScreen.value = "Error";
                        }
                        currentInput = '';
                    }
                    break;
                default:
                    if (button.classList.contains('operator')) {
                        if (currentInput !== '') {
                            firstOperand = currentInput;
                            currentInput = '';
                            operator = value;
                        }
                    } else {
                        currentInput += value;
                        calculatorScreen.value = currentInput;
                    }
                    break;
            }
        });
    });
});
