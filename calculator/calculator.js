function calculate() {
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);
  var operation = document.getElementById('operation').value;
  var resultElement = document.getElementById('result');

  if (isNaN(num1) || isNaN(num2)) {
    resultElement.textContent = 'Please enter valid numbers.';
    return;
  }

  var result;
  switch(operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      if (num2 === 0) {
        resultElement.textContent = 'Cannot divide by zero.';
        return;
      }
      result = num1 / num2;
      break;
    default:
      resultElement.textContent = 'Invalid operation selected.';
      return;
  }

  resultElement.textContent = result;
}