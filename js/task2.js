document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = '';

    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const operation = document.getElementById('operation').value;

    if (isNaN(number1) || isNaN(number2) || !operation) {
        resultDiv.textContent = 'Пожалуйста, введите оба числа и выберите операцию.';
        return;
    }

    let result;

    switch (operation) {
        case 'add':
            result = number1 + number2;
            break;
        case 'subtract':
            result = number1 - number2;
            break;
        case 'multiply':
            result = number1 * number2;
            break;
        case 'divide':
            if (number2 === 0) {
                resultDiv.textContent = 'На ноль делить нельзя!';
                return;
            }
            result = number1 / number2;
            break;
        default:
            resultDiv.textContent = 'Неизвестная операция.';
            return;
    }

    resultDiv.textContent = `Результат: ${result}`;
});