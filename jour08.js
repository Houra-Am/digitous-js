// 01

var request = require('request');
/*
var countriesNames = [];

request.get("https://restcountries.eu/rest/v1/all", function(error, response, body) {
    var getCountries = JSON.parse(body);
    console.log(getCountries[0].name);
    for (var i = 0; i < getCountries.length; i++) {
        countriesNames.push(getCountries[i].name);
    }
    console.log(countriesNames);
});
*/

// 02 - Chuck Norris

request.get("https://api.chucknorris.io/jokes/random", function(error, response, body) {
    console.log(response.statusCode);
    var getFact = JSON.parse(body);
    console.log(getFact.value);
});