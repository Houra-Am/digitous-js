// 01 - Alphabet
/* - Créer une fonction `sortLetters` qui reçoit une string en paramètre
- La fonction retourne une string avec les mêmes lettres, dans l'ordre alphabétique
- Ne pas utilisez la méthode .sort()
- Appelez votre fonction avec "konexio" comme argument et vérifiez que vous obtenez "eiknoox"
*/

function sortLetters(text) {
    var arr = text.split('');
    var alphabet = arr.sort();
    var sortAlpha = alphabet.join('');
    return sortAlpha;
}
console.log(sortLetters("konexio"));

// 02 - XOXO
/* - Créez une fonction `countEach` qui reçoit une string contenant des x et des o en paramètre
- La fonction retourne true si il y a autant de x que de o, sinon elle retourne false
- Vérifiez que l'argument "xxxoooox" déclenche un true, et que "xox" déclenche un false 
*/
function countEach(inputStr) {

    var matchCharX = inputStr.match(/x/g).length;
    var matchCharO = inputStr.match(/o/g).length;
    if (matchCharX === matchCharO) {
        console.log(true)
    } else {
        console.log(false)
    }
    return matchCharX === matchCharO;
}

countEach("xxxoooox");
countEach("xox")

//## 03 - Palindrome

/* - Créez une fonction `checkPal` qui reçoit une string en paramètre
- La fonction retourne "Palindrome !" si le mot se lit dans les deux sens, sinon elle retourne "Nope"
- Vérifiez que vous obtenez un positif avec l'argument "racecar" mais pas avec "laptop"
*/

function checkPal(str) {
    var lowStr = str.toLowerCase();
    var cleanStr = str.replace(/[\W_]/g, '');
    var reverseStr = cleanStr.split('').reverse().join('');
    //return cleanStr === reverseStr;
    if (cleanStr === reverseStr) {
        console.log("Palindrome !")
    } else {
        console.log("Nope")
    }
}

checkPal("racecar");
checkPal("laptop");