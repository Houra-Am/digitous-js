console.log("Hello World !");

var test = "My name is Houra";
console.log(test);

var name = "Houra";
console.log("Nice to meet you " + name + "!");

var testLength = "I'm very long !";
console.log(testLength.length);

var food = "Croissant is meh";
console.log(food.replace("meh", "so good"));

var basic = "This is cool";
var basicUp = basic.toUpperCase();
console.log(basicUp);

var basicDown = basic.toLocaleLowerCase();
console.log(basicDown);

console.log(basic, basicUp, basicDown);

var word = "banana";
var letters = word.split("");
console.log(letters);

var age = "34";
var template = `I'm ${age} years old`;
console.log(template);