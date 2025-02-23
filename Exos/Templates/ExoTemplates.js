// exercice 1
// création de deux variable une avec du texte et l'autre avec un nombre
const prenom = "Alice";
const age = 25;
// affichage classique dans un console.log avec concaténation, pas pratique il faut mettre des espaces dans les string pour que ça soit lisible
console.log("Bonjour je m'appelle " + prenom + " et j'ai " + age + " ans.");
// affichage avec template litéral, ça permet d'afficher plus facilement avec variable à l'intérieur 
console.log(`Bonjour je m'appelle ${prenom} et j'ai ${age} ans.`);

// exercice 2 
// message classique
const message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n Suspendisse condimentum at magna at dapibus. \n Cras eu nulla sagittis, mattis mauris a, eleifend ligula. Aenean feugiat mauris finibus dui dictum condimentum."
console.log(message);
// message avec templates litéral
const messageWithTemplate = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Suspendisse condimentum at magna at dapibus. 
Cras eu nulla sagittis, mattis mauris a, eleifend ligula. Aenean feugiat mauris finibus dui dictum condimentum.`;
console.log(messageWithTemplate);

// exercice 3
const a = 10; 
const b = 5;
// je vais rien dire ici c'est clair mdr 
const calcul = `l'addition des deux variables font ${a + b}.`;
console.log(calcul);

// exercice 4 
function bonjour(prenom){
    return `Bonjour, ${prenom} ! `;
};

console.log(`Message du jour = ${bonjour("Clément")}`);


