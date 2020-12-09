// 01 - Array

var fruits = ["mango", "lemon", "blueberry"];
console.log(fruits);
console.table(fruits);

// 02 - Access

var ingredients = ["eggs", "milk", "butter"];
console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"));

// 03 - Access

var objects = ["pen", "book", "lamp"];
objects.unshift("chair");
console.log(objects);

// 04 - Order

var numbers = [4, 10, 8, 12, 6];
numbers.reverse();
console.log(numbers);

// 05 - Boucle

var total = 0;
var limit = 10;
for (var i = 1; i <= limit; i++) {
    total += i;
    console.log("total= ", total);
}
console.log("result= " + total);



// 06 - Reverse

var sentence = "Hello Konexio !";
var reversedSentence = "";
for (var i = sentence.length - 1; i >= 0; i--) {
    reversedSentence += sentence[i];

}
console.log(reversedSentence);