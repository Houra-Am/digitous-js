function calculate(num1, operator, num2) {
    if (operator === " + ") {
        console.log(num1 + num2);
    } else if (operator === " * ") {
        console.log(num1 * num2)
    } else if (operator === " / ") {
        console.log(num1 / num2)
    } else if (operator === " - ") {
        console.log(num1 - num2)
    } else if (operator === " % ") {
        console.log(num1 % num2)
    }
}
console.log(process.argv);
calculate(4, " * ", 5);
calculate(4, " + ", 5);