let number1,
    number2,
    result,
    operation;

function calculate(event) {
    number1 = Number(document.querySelector("input#number1").value);
    number2 = Number(document.querySelector("input#number2").value);
    operation = event.currentTarget.innerText;

    switch (operation) {
        case "+":
            result = number1 + number2;alert(result); printResult(result); break;
        case "-":
            result = number1 - number2; printResult(result); break;
        case "*":
            result = number1 * number2; printResult(result); break;
        case "/":
            result = number1 / number2; printResult(result); break;
        default:
            result = 0;
    }
}

function printResult(result) {
    let valueResult = document.querySelector("p#result");
    valueResult.innerText = result;
}