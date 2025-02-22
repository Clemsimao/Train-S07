# Exercices pour débutants sur les tableaux en JavaScript

Ces exercices sont conçus pour vous aider à vous familiariser avec la manipulation des tableaux en JavaScript. Essayez de les résoudre et n'hésitez pas à expérimenter !

---

## Exercice 1 : Création et accès aux éléments

**Objectif :** Créer un tableau et accéder à ses éléments.

1. Créez un tableau `fruits` contenant les éléments : `"pomme"`, `"banane"`, `"cerise"`.
2. Affichez le premier élément du tableau dans la console.
3. Affichez le dernier élément du tableau en utilisant la propriété `.length`.

<details>
  <summary>💡 Indice</summary>
  Utilisez `console.log(fruits[0])` pour le premier élément et `console.log(fruits[fruits.length - 1])` pour le dernier.
</details>

---

## Exercice 2 : Modification d’un tableau

**Objectif :** Modifier des éléments d’un tableau.

1. Remplacez `"banane"` par `"orange"` dans le tableau `fruits`.
2. Ajoutez `"mangue"` à la fin du tableau.
3. Ajoutez `"kiwi"` au début du tableau.
4. Supprimez le dernier élément du tableau.

<details>
  <summary>💡 Indice</summary>
  - Pour ajouter un élément à la fin : `fruits.push("mangue")`  
  - Pour ajouter un élément au début : `fruits.unshift("kiwi")`  
  - Pour supprimer le dernier élément : `fruits.pop()`
</details>

---

## Exercice 3 : Parcourir un tableau

**Objectif :** Utiliser une boucle pour afficher les éléments d’un tableau.

1. Créez un tableau `nombres` contenant `[10, 20, 30, 40, 50]`.
2. Utilisez une boucle `for` pour afficher chaque élément dans la console.
3. Faites la même chose avec la méthode `.forEach()`.

<details>
  <summary>💡 Indice</summary>

  - Boucle `for` :  
    ```javascript
    for (let i = 0; i < nombres.length; i++) {
        console.log(nombres[i]);
    }
    ```
  - Méthode `.forEach()` :  
    ```javascript
    nombres.forEach(function(nombre) {
        console.log(nombre);
    });
    ```
</details>

---

## Exercice 4 : Recherche dans un tableau

**Objectif :** Trouver un élément dans un tableau.

1. Vérifiez si `"pomme"` est présent dans le tableau `fruits` avec `.includes()`.
2. Trouvez l’index de `"cerise"` dans `fruits` avec `.indexOf()`.
3. Trouvez le premier nombre supérieur à `25` dans `nombres` avec `.find()`.

<details>
  <summary>💡 Indice</summary>

  - Pour vérifier la présence : `console.log(fruits.includes("pomme"));`  
  - Pour trouver l’index : `console.log(fruits.indexOf("cerise"));`  
  - Pour trouver un élément avec une condition :  
    ```javascript
    let resultat = nombres.find(function(nombre) {
        return nombre > 25;
    });
    console.log(resultat);
    ```
</details>

---

## Exercice 5 : Filtrage et transformation

**Objectif :** Filtrer et modifier un tableau.

1. Filtrez les nombres pairs du tableau `nombres` avec `.filter()`.
2. Multipliez chaque nombre de `nombres` par 2 avec `.map()`.

<details>
  <summary>💡 Indice</summary>

  - Pour filtrer les nombres pairs :  
    ```javascript
    let pairs = nombres.filter(function(nombre) {
        return nombre % 2 === 0;
    });
    console.log(pairs);
    ```
  - Pour multiplier chaque nombre par 2 :  
    ```javascript
    let multiplies = nombres.map(function(nombre) {
        return nombre * 2;
    });
    console.log(multiplies);
    ```
</details>

---

## Exercice 6 : Somme et réduction

**Objectif :** Utiliser `.reduce()` pour faire une somme.

1. Calculez la somme des nombres dans `nombres` avec `.reduce()`.

<details>
  <summary>💡 Indice</summary>

  ```javascript
  let somme = nombres.reduce(function(accumulateur, valeurCourante) {
      return accumulateur + valeurCourante;
  }, 0);
  console.log(somme);