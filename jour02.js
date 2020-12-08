//ex.01//
var integer = 102;
var float = 13.9;
console.log(integer, float);

//ex.02//
var basic = 24;
var stringified = basic.toString();
console.log(stringified);

//ex.03//
var num = 1.5;
var rounded = Math.round(num);
console.log(rounded);

//ex.04//
var test = 12;
var bis = 5;
console.log(test + bis);
console.log(test - bis);
console.log(test * bis);
console.log(test / bis);
console.log(test % bis);
console.log(test ** bis);

//ex.05//
var test = 143;
var bis = 219;
console.log(test > 219);
console.log(test >= 219);
console.log(test < 219);
console.log(test <= 219);
console.log(test === 219);
console.log(test == 219);
console.log(test != 219);
console.log(test !== 219);

//ex.06//
var limit = 50;
var score = 64;
if (score >= limit) {
    console.log("Ok good !")
} else {
    console.log("Oh nooo...")
}

var limit = 64;
var score = 50;
if (score >= limit) {
    console.log("Ok good !")
} else {
    console.log("Oh nooo...")
}

//ex.07//
var password = "azerty";
if (password.length > 5) {
    console.log("The password is secure!")
}

//ex.08//
var limit = 64;
var score = 50;
var password = "azerty";
if (score >= limit && password.length > 5) {
    console.log("Everything is good!")
} else if (score >= limit || password.length < 5) {
    console.log("Something is good!")
} else {
    console.log("Nothing is good!")
}

var limit = 64;
var score = 50;
var password = "azerty";
if (score >= limit && password.length > 5) {
    console.log("Everything is good!")
} else if (score >= limit || password.length > 5) {
    console.log("Something is good!")
} else {
    console.log("Nothing is good!")
}

var limit = 30;
var score = 50;
var password = "azerty";
if (score >= limit && password.length > 5) {
    console.log("Everything is good!")
} else if (score >= limit || password.length > 5) {
    console.log("Something is good!")
} else {
    console.log("Nothing is good!")
}

//Bonus I //
var random = 4;
if (random === 6) {
    console.log("Yes I won!")
} else {
    console.log("So close...")
}

//Bonus II.I //
var month = "January";
switch (month) {
    case "March":
    case "April":
    case "May":
        console.log("Spring");
        break;
    case "June":
    case "July":
    case "August":
        console.log("Summer");
        break;
    case "September":
    case "October":
    case "November":
        console.log("Fall");
        break;
    case "December":
    case "January":
    case "February":
        console.log("Winter");
        break;
    default:
        console.log("That's not a month!")
}

//Bonus II.II //
var month = "July";
switch (month) {
    case "March":
    case "April":
    case "May":
        console.log("Spring");
        break;
    case "June":
    case "July":
    case "August":
        console.log("Summer");
        break;
    case "September":
    case "October":
    case "November":
        console.log("Fall");
        break;
    case "December":
    case "January":
    case "February":
        console.log("Winter");
        break;
    default:
        console.log("That's not a month!")
}

//Bonus II.III //
var month = "October";
switch (month) {
    case "March":
    case "April":
    case "May":
        console.log("Spring");
        break;
    case "June":
    case "July":
    case "August":
        console.log("Summer");
        break;
    case "September":
    case "October":
    case "November":
        console.log("Fall");
        break;
    case "December":
    case "January":
    case "February":
        console.log("Winter");
        break;
    default:
        console.log("That's not a month!")
}

//Bonus II.IV //
var month = "December";
switch (month) {
    case "March":
    case "April":
    case "May":
        console.log("Spring");
        break;
    case "June":
    case "July":
    case "August":
        console.log("Summer");
        break;
    case "September":
    case "October":
    case "November":
        console.log("Fall");
        break;
    case "December":
    case "January":
    case "February":
        console.log("Winter");
        break;
    default:
        console.log("That's not a month!")
}


//Bonus III //
var roundedNumber = 3.6;
var float1 = roundedNumber - Math.floor(roundedNumber);
if (float1 < 0.5) {
    var roundedNumber = 3.6;
    console.log(Math.floor(roundedNumber));
} else {
    console.log(Math.ceil(roundedNumber));
}


var roundedNumber = 3.3;
var float1 = roundedNumber - Math.floor(roundedNumber);
if (float1 < 0.5) {
    var roundedNumber = 3.3;
    console.log(Math.floor(roundedNumber));
} else {
    console.log(Math.ceil(roundedNumber));
}


var roundedNumber = 3.8;
var float1 = roundedNumber - Math.floor(roundedNumber);
if (float1 < 0.5) {
    var roundedNumber = 3.8;
    console.log(Math.floor(roundedNumber));
} else {
    console.log(Math.ceil(roundedNumber));
}

var roundedNumber = 12.4;
var float1 = roundedNumber - Math.floor(roundedNumber);
if (float1 < 0.5) {
    var roundedNumber = 12.4;
    console.log(Math.floor(roundedNumber));
} else {
    console.log(Math.ceil(roundedNumber));
}