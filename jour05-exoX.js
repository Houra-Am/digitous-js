// 01
/*
function calculate(num1, operator, num2) {
    if (operator === "+") {
        console.log(num1 + num2);
    } else if (operator === "x") {
        console.log(num1 * num2)
    } else if (operator === "/") {
        console.log(num1 / num2)
    } else if (operator === "-") {
        console.log(num1 - num2)
    } else if (operator === "%") {
        console.log(num1 % num2)
    }
}
console.log(process.argv);
calculate(4, "x", 5);
calculate(4, "+", 5);
*/

// 02

function multiply(number) {
    var number = parseInt(number);
    var result = parseInt(result);
    for (let i = 1; i <= 10; i++) {
        var result = i * number;
        console.log(`${number} * ${i} = ${result}`);
    }
    return result;
}
console.log(multiply(process.argv[2], process.argv[3]))
console.log(process.argv);