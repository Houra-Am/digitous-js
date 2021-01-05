/* ## 02 - Compter les voyelles

Créez une fonction `countvowels` qui prend une string en paramètre et qui retourne le nombre de voyelles contenues dans un texte. */

function countVowels(string) {
    var vowels = string.match(/[aieuo]/g).length;
    return console.log(vowels);
}
countVowels("keklr4iriekfo");

/* ## 03 - Langage codé

Créez une fonction `secretCode` qui prend une string en paramètre et qui remplace chaque lettre par leur ordre d'apparition dans l'alphabet + 10.

`A` devient `11`, `B` devient `12`, etc.

Retournez le résultat sous forme de string. */

function secretCode(myChar) {
    //var letters = [myChar.match(/[a-z]/i).length];

    letters = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 };

    for (var i = 0; i < myChar.length; i++) {

        if (letters[myChar[i]]) {
            myChar = myChar.replace(myChar[i], letters[myChar[i]] + 10);
        }
    }
    return myChar

}

console.log(secretCode("secret"));

// 04 - Répertoire musical
/* - Créez les objets `song1`, `song2` et `song3` contenant les clés suivantes : `title` pour le titre, `artist` pour le chanteur ou le groupe, et `year` pour l'année de sortie. Assignez comme valeurs celles de vos trois chansons préférées.
- Créez une variable `music` qui contient un tableau contenant ces trois variables.
- Affichez dans la console : la valeur `title` de `song1`, la valeur `artist` de `song3` et la valeur `year` de `song2`. */

song1 = {
    title: "Le temps de l'amour",
    artist: "Françoise Hardy",
    year: 1962,
};

song2 = {
    title: "I'll be seeing you",
    artist: "Billie Holiday",
    year: 1938,
};

song3 = {
    title: "Common People",
    artist: "Pulp",
    year: 1995,
};

var music = [song1, song2, song3]

console.log(music[0].title, music[2].artist, music[2].year);

// 05 - Habiller des personnages
/* Vous avez créé un jeu avec des personnages et vous voulez écrire un script qui sélectionne leurs vêtements.

1. Vous créez un tableau qui contient la tenue qu'ils doivent tous porter et un autre qui liste toutes les couleurs possibles. Copiez les deux tableaux ci-dessous :

    var clothes = ["chemise", "pantalon", "veste", "chaussures"];
    var colors = ["bleu", "rouge", "vert", "jaune"];

/* 2. Créez une fonction `displayOnShelves` qui prend deux parametres `clothes` et `colors` et qui retourne une liste de liste `shelves` représentant chacune des étagères de l'armoire. Cette fonction doit generer le résultat suivant :

    ```jsx
    [
    	["chemise bleu", "chemise rouge", "chemise vert", "chemise jaune"],
    	["pantalon bleu", "pantalon rouge", "pantalon vert", "pantalon jaune"],
    	["veste bleu", "veste rouge", "veste vert", "veste jaune"],
    	["chaussures bleu", "chaussures rouge", "chaussures vert", "chaussures jaune"],
    ]
    ```

3. Créez à présent une fonction `getDressed` qui sélectionne aléatoirement un vêtement de chaque étagère. Vous obtiendrez, par exemple :

    ```jsx
    var outfit = ["chemise rouge", "pantalon vert", "veste rouge", "chaussures bleu"]
    ```

4. Comme vous avez un minimum de bon goût, vous rajoutez des conditions :
    - Si `outfit` contient quatre couleurs différentes, affichez `"Trop de couleurs !"` et relancez la fonction.
    - Si `outfit` contient une seule couleur, affichez `"Pas assez de couleur !"` et relancez la fonction.
    - Si `outfit` contient deux couleurs, affichez `outfit` et `"Pas mal, let's go !"`.
    - Si `outfit` contient trois couleurs, affichez `outfit` et `"Parfait, let's go !"`. */
var clothes = ["chemise", "pantalon", "veste", "chaussures"];
var colors = ["bleu", "rouge", "vert", "jaune"];
var shelves = [];

function displayOnShelves(clothes, colors) {

    for (var i = 0; i < clothes.length; i++) {
        for (var j = 0; j < colors.length; j++) {
            shelves.push([]);
            var eachShelf = (clothes[i] + " " + colors[j]);
            shelves[shelves.length - 1].push(eachShelf);
        }
    }
    return shelves;
}

console.log(displayOnShelves(clothes, colors));