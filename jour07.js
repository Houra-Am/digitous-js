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