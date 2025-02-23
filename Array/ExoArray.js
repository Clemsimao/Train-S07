// exercice 1 :
// création du tableau fruits avec à l'interieur des frutis
let fruits = ["pomme", "banane", "cerise"];
// affichage du premier élement du tableau dans la console
console.log(fruits[0]);
// affichage du dernier élement du tableau en utilisanr length
console.log(fruits[fruits.length - 1]);

// exercice 2 : 
// j'utilise splice et je remplace 1 élément de l'index 2 par orange
fruits.splice(2, 1, "orange");
// j'utilise push pour rajouter un élément à la fin du tableau
fruits.push("mangue");
// j'utilise unshift pour rajouter un éléement au début du tableau
fruits.unshift("kiwi");
// j'utilise pop pour supprimer le dernier élément du tableau
fruits.pop();

// exercice 3 :
// création du tableau nombres 
const nombres = [10, 20, 30, 40, 50];
// utilisation d'une boucle for pour afficher le contenu du tableau nombres
for(let i=0; i < nombres.length; i++){
    console.log(nombres[i]);
};
// utilisation d'une boucle forEach pour afficher le contenu du tableau nombres
nombres.forEach(function(x){
    console.log(x);
});

// exercice 4 : 
// j'utilise includes pour voir si pomme est dans le tableau fruits
console.log(fruits.includes("pomme"));
// j'utilise indexOf pour connaitre l'index de l'élement cerise mais il n'est plus présent dans le tableau
console.log(fruits.indexOf("cerise"));
console.log(fruits.indexOf("banane"));
// j'utilise find avec une fonction pour trouver le premier nombre < 25 dans le tab nombres
const found = nombres.find(function(element) {
    return element > 25;
});
console.log(found);

// exercice 5 : 
// j'utilise filter avec une fonction pour afficher que les nombres pair du tableau
let pairNumbers = nombres.filter(function (number){
    return number % 2 === 0
})
console.log(pairNumbers);

// exercice 6 : 
const initialValue = 0;
const totalNombres = nombres.reduce(
    function (accumulator, currentValue){
        return accumulator + currentValue;
    },
    initialValue
);
console.log(totalNombres);

