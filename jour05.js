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
var i = 0;
var sum = 0;

function addUp(num) {
    for (i = 0; i <= 12; i++) {
        sum = sum + i;
    }
}
addUp(12)
console.log(sum)


// 06 - Time

/*function format(num) {
    var hrs = Math.floor(num / 3600);
    var mins = Math.floor((num % 3600) / 60);
    var secs = Math.floor(num % 60);
    console.log(`${hrs}:${mins}:${secs}`)
}
format(3700)*/

// Bonus 01

function generatePassword(num) {
    var passWord = "";
    var characters = "abcdefghijklmnopqrstuvwxyz";
    var min = 0;
    var passwordLength = characters.length;

    for (i = 0; i < num; i++) {
        var randomPass = characters.charAt(Math.floor(Math.random() * (passwordLength - min + 1) + min));
        passWord = passWord + randomPass;
        //passWord.toLocaleUpperCase();
    }
    return passWord.toLocaleUpperCase();
}

console.log(generatePassword(2))
if (generatePassword() < 6 || generatePassword() > 12) {
    console.log("error")
}