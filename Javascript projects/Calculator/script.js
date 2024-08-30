// Function to perform the calculation
function calculate() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let operator = prompt("Enter an operator (+, -, *, /):");
    let num2 = parseFloat(prompt("Enter the second number:"));
    let result;

    // Switch case to handle the operation
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result = "Error: Division by zero!";
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = "Error: Invalid operator!";
            break;
    }

    // Display the result
    document.getElementById('result').innerHTML = `Result: ${result}`;
}

// Call the calculate function on page load
calculate();
