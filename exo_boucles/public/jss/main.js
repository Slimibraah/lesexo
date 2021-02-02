// 1

// let classe = ['Bilal','Cem','Gauthier','Laurie','Nghia','Yahya','Yassin','Abdel','Mahad','Mohamed','Redwane','Camille','Amine','Antoine','Ayoub','Salim','Said','Yasmina'];


// for ( i = 0 ; i < classe.length; i++){
//   console.log("Bonjour "+ classe[i]);

// }

//1.2
// let nombre = parseInt(prompt("Insérez un nombre :"));


// for (let i = 1; i < nombre ; i++){
//   console.log(i);
// }

//2
// let classe = ['Bilal','Cem','Gauthier','Laurie','Nghia','Yahya','Yassin','Abdel','Mahad','Mohamed','Redwane','Camille','Amine','Antoine','Ayoub','Salim','Said','Yasmina'];


// for ( i = 0 ; i < classe.length; i++){
//   console.log("Bonjour "+ classe[i]);

// }
//2.1
// let classe = ["abdel","amine","antoine","ayoub","bilal","camille","cem", "gauthier","laurie","mahad","mufassa","nghia","redwane","salim","said","yahya","yasmina","yassin"];

// classe.forEach(element =>console.log(element));


//N1
// let multiplication = 5
// for (let i=0; i<=10; i++) 
// {
//     console.log(multiplication+" * " + i + " = " + multiplication*i);

// }

//N2

// let double = parseInt(prompt("donnez un nombre"))
// for (let i = 0; i < 11; i += 2){
//     console.log(double*i);
// }
//N3

// let maille = 20;
// for (let i = 0; i <= 20; i += 2){
//     console.log(maille-i);
// }
//N4

// let longPrenoms = ["Salim","Lui","Moi"]

// classe.forEach(element => {
//   if (element.length>5){
//     longPrenoms.push(element)
//   }

// });
// console.log(longPrenoms);
//N5

// let somme = [
//     14, 7, 97, 65, 247, 67, 101, 4, 34, 78, 1, 900, 0, 11, 32, 23, 61
//    ]
 
//  let grossesSommes = []
 
//  somme.forEach(element => {
//    if (element>60) {
//      grossesSommes.push(element)
 
//    }
 
//  }); 
//  console.log(grossesSommes)
//N6
// let bleta =  bbv




//ExO4 : 01

// let chiffre = parseInt(prompt("Choisissez un chiffre"))
// let compteur = 0


// while (compteur <= chiffre) {
    
//     console.log(compteur);
//     compteur++;
// }
// 02

// let c17= [
//         "abdel", "amine", "antoine", "ayoub", "bilal", "camille", "cem", "gauthier", "laurie", "mahad", "mufassa", "nghia", "redwane", "salim", "said", "yahya", "yasmina", "yassin"
//     ]
    
//     let bjr= "bonjour "
//     let i=0
    
//     while (c17.length > i ) {
        
//         i++;
    
//         console.log( bjr + c17[i] )
//     }
//03

// let c= [

// ]
// let x = parseInt(prompt("Choisissez un nombre max d'éleves dans la classe"));

// while (c.length < x) {
//     c.push(prompt("donne moi un nom a ajouté dans la classe"))
    
//     console.log(c);
// }
// Exo05 : 01
// let a = parseInt(prompt("Choisissez un chiffre"))
// let b = 0

// do {
//     console.log(b);
//     b++;
// } 
// while (b <= a);
// 02

// let a = [
//        "abdel", "amine", "antoine", "ayoub", "bilal", "camille", "cem", "gauthier", "laurie", "mahad", "mufassa", "nghia", "redwane", "salim", "said", "yahya", "yasmina", "yassin"
// ]

// let i=0
// let bjr= "Bonjour"

// do {console.log(bjr + a[i]);
//     i++;
    
// } while ( i < a.length);
// 03
// let x = [
//     "Banane",
//     "Pomme",
//     "Cerise",
//     "Peche",
//     "Poire",
//     "Orange",
// ]

// let i=0

// do { 
//     i--
//     console.log(x);
  

// } while (x.shift());

// Exo6 : 01
// let x = parseInt(prompt("Donne moi un chiffre"))

// while (!x  isNaN(x)) { 

//     x = prompt('Entrez un chiffre svp')

// }
// alert(x)
// 02
// while (!x   isNaN(x) || x < 10) { 

//     x = prompt('Entrez un chiffre svp')

// }
// alert(x)
// 3
// let = i  = 0
// while (i <= 20 ) {
//     console.log(i);
//     i++
// }
// 
// let i = 3
// while (i <= 6) {
//     console.log(i)
//     i++

// }

// let i = 0
// while (i <= 20) {
//     console.log(i)
//     i+=2
// }
// exo 2
let panierlegumes = [
    "Carotte",
    "Maïs",
    "Tomate",
    "Radis",
]
let caisseLegumes = []


while (panierlegumes.length>0) {
    caisseLegumes.push(panierlegumes.shift())
}
console.log(panierlegumes)
console.log(caisseLegumes)
//
// - ## Exo4

//   - Préparez une énigme, puis posez la à l'utilisateur via un prompt
//   - Faites une boucle `while` qui va vérifier si l'utilisateur répond correctement à l'énigme
//     - Tant qu'il se trompe, reposez la question.
//     - S'il a juste, faites une alerte qui le félicite.

// let riddle = prompt("Qu'est ce qui est jaune et qui attend ?")
// while (riddle!="Jonathan") {
//     riddle = prompt("wrong answer bruh")
// }
// alert("bien joué, malinx le lynx")


//v2
// let qst = prompt("Qui est le plus beau de la coding 17 ?")
// while (qst!= "Mahad") {
//     qst = prompt("reccomence qui est le plus beau de la C17 ?")
// }alert("Bien joué garçon")














// - ## Exo5

//   - Refaites l'exo 4 avec `do...while`

// let riddle 

// do {
//     riddle = prompt("Qu'est ce qui est jaune et qui attend ?")
    
// } while (riddle == "jonathan");
// alert("bien joué, malinx le lynx")


// - ## Exo6

//   - Créez une variable contenant l'année actuelle
//   - Créez un programme qui génère une année de façon aléatoire entre 1970 et 2018 (ex: -> `let randomYear`). L’utilisateur doit donner le bon âge en répondant à la question suivante :
//     > Si je suis né(e) en 1988(`randomYear`), quel âge ai-je aujourd’hui ?
//   - L’utilisateur a trois essais. S’il donne la bonne réponse ou qu’il échoue ses trois essais, on sort de la boucle
//   - Finir en affichant quelques chose de pertinant.

// let annee = 2021
// let randomYear = Math.floor(Math.random() * (annee - 1970 +1)) + 1970;




//  let question 

// let reponse = annee - randomYear
 
//  let i = 1;

// do {
//    question = prompt("Si je suis né(e) en "+randomYear+ " , quel âge ai-je aujourd’hui ?");
//   i++;

// } while (question != reponse && i<=3 ) 
 
//  if (question == reponse) {
//        alert("C'est pertinant")
//      } else {
//        alert("t'es con oux quoi?")
//      } 
