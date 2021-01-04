var fs = require("fs");

fs.readFile("./jour07.txt", function(err, data) {
    if (err) {
        console.error(err);
        return;
    }

    console.log("The file contains these info: " + data.toString());

});