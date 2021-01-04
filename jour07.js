// 01
var fs = require("fs");

fs.readFile("./jour07.txt", function(err, data) {
    if (err) {
        console.error(err);
        return;
    }

    console.log("The file contains these info: " + data.toString());
});

// 02 - Map Double

var array = [1, 2, 3, 4];
var double = array.map(function(number) {
    return number * 2;
});

console.log(double);

// 03 - Map Names

var longNames = [{
        firstName: "Jane",
        lastName: "Doe"
    },
    {
        firstName: "John",
        lastName: "Smith"
    }
];

var shortNames = longNames.map(function(fullName) {
    return "name: " + fullName.firstName + " " + fullName.lastName;

});

console.log(shortNames);


// 04 - Filter Numbers

var array = [1, "toto", 34, "javascript", 8];
var numbers = array.filter(function(num) {
    return typeof(num) === "number";
});

console.log(numbers);