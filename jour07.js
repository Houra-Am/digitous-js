var fs = require("fs");

fs.readFile("./jour07.txt", function(err, data) {
    if (err) {
        console.error(err);
        return;
    }

    console.log("The file contains these info: " + data.toString());

});

// 02 - Map Double
/*
- Créez une variable `array` contenant un tableau qui contiendra les valeurs `1`, `2`, `3`, `4` et `5`
- Créez une variable `double` qui appellera la méthode `.map()` pour contenir les doubles des valeurs de `array`
- Affichez les valeurs de `double` dans la console
*/

var array = [1, 2, 3, 4];
var double = array.map(function(number) {
    return number * 2;
});

console.log(double);