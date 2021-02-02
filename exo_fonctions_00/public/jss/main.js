//exo 1

// let nombre = (chiffre1, chiffre2) => {
// return chiffre1+chiffre2
// }
// console.log(nombre(12, 13))

// exo 2

// let nombre = (chiffre1, chiffre2) => {
//  return chiffre1-chiffre2
//  }
// console.log(nombre(12, 13))

// exo 3

// let nombre = (chiffre1, chiffre2) => {
// return chiffre1*chiffre2
// }
// console.log(nombre(12, 13))

// exo 4

// let nombre = (chiffre1, chiffre2) => {
// return chiffre1/chiffre2
// }
// console.log(nombre(12, 13))

// exo 5

// let nombre = (chiffre1, chiffre2) => {
// return chiffre1%chiffre2
// }
// console.log(nombre(12, 13)) /

// Exo6

// function carre(nombre) {
//  return nombre * nombre;
// };
// console.log(carre(5));

// Exo7

// function exposant(nombre, nombre1) {
//     return  Math.pow(nombre,nombre1);
// };
// console.log(exposant(2,3));

// exo8
// function capitalize(a){
//     return a.charAt(0).toUpperCase()+a.substr(1);
// }
// console.log(capitalize("test"));

//exo9

// let nombre = (chiffre1, chiffre2, chiffre3) => {
// return chiffre1/chiffre2+chiffre3
// }
// console.log(nombre(12, 13, 45))
// ____________________________________________________

// Exo01 :01
// EXO 1

// let reverseNumber = (nombre) => {
//     let tab = [];
//     let nvxNombre = '';

//     for (let i = 0; i < nombre.length; i++) {
//         tab.push(nombre.charAt(i));
//     }
//     for (let i = 0; i < tab.length; i++) {
//         nvxNombre = nvxNombre + tab[(tab.length-1 - i)];
//     }
//     nvxNombre = nvxNombre;
//     return nvxNombre;
// }

// console.log(reverseNumber('853'));

// EXO 2

// let estPair = (num) => {
//     switch (num % 2) {
//         case 0:
//         return Est pair
//             break;
//         case 1:
//         return Est impair
//             break;
//         default:
//         return C'est pas un nombre enflure
//             break;
//     }
// }

// console.log(estPair('p'));

// EXO 3


let logIn = (mdp) => {
    let mdpp;
    do {
        mdpp = prompt(Entrez votre mdp);
    } while (mdpp != 'mahad');

    alert(Vous êtes connecté);
}

alert[""]
logIn();
