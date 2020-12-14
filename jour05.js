// 01 - Object
var cat = {
    name: "Garfield",
    age: 3,
    isCute: true
}
console.log(cat.isCute)
if (cat.isCute === true) {
    console.log("So cute!")
}

// 02 - Combine
var cat2 = {
    name: "Felix",
    age: 7,
    isCute: true
}

var cats = [cat, cat2];

console.log(cat.age)
console.log(cat2.isCute)

// 03 - Even
function checkIfEven(num) {
    if (num % 2 === 0) {
        console.log("even")
    } else if (num % 2 === 1) {
        console.log("odd")
    }
}
checkIfEven(76)

// 04 - Compare
function compare(num1, num2) {
    if (num1 > num2) {
        console.log("num1 is bigger")
    } else if (num2 > num1) {
        console.log("num2 is bigger")
    } else {
        console.log("both are the same")
    }
}

compare(645, 883)

// 05 - Add Up
function addUp(num) {

}