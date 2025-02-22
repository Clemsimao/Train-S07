# Exercices pour débutants sur les templates en JavaScript

Ces exercices vous aideront à comprendre et utiliser les **templates literals** en JavaScript, qui permettent d'insérer des variables et d'écrire des chaînes multi-lignes plus facilement.

---

## Exercice 1 : Utilisation basique des templates literals

**Objectif :** Remplacer la concaténation classique par des backticks `` ` ``.

1. Créez deux variables `prenom` et `age` contenant respectivement `"Alice"` et `25`.
2. Affichez une phrase de présentation en utilisant une concaténation classique avec `+`.
3. Refaites la même chose en utilisant un template literal.

<details>
  <summary>💡 Indice</summary>

  - Concaténation classique :  
    ```javascript
    console.log("Je m'appelle " + prenom + " et j'ai " + age + " ans.");
    ```
  - Avec un template literal :  
    ```javascript
    console.log(`Je m'appelle ${prenom} et j'ai ${age} ans.`);
    ```
</details>

---

## Exercice 2 : Template literals et multi-lignes

**Objectif :** Utiliser les templates literals pour écrire un texte sur plusieurs lignes.

1. Créez une variable `message` contenant une phrase sur **plusieurs lignes** en utilisant `\n` avec une chaîne classique.
2. Faites la même chose avec un template literal.

<details>
  <summary>💡 Indice</summary>

  - Chaîne classique avec `\n` :  
    ```javascript
    let message = "Bonjour,\nBienvenue sur notre site.\nBonne journée !";
    ```
  - Avec un template literal :  
    ```javascript
    let message = `Bonjour,
    Bienvenue sur notre site.
    Bonne journée !`;
    ```
</details>

---

## Exercice 3 : Insérer des expressions dans un template

**Objectif :** Insérer des calculs et des expressions dans un template literal.

1. Créez deux variables `a = 10` et `b = 5`.
2. Affichez une phrase contenant le résultat de leur addition **directement dans le template**.

<details>
  <summary>💡 Indice</summary>

  - Exemple attendu :  
    ```javascript
    console.log(`La somme de ${a} et ${b} est égale à ${a + b}.`);
    ```
</details>

---

## Exercice 4 : Utilisation avec des fonctions

**Objectif :** Intégrer le retour d'une fonction dans un template literal.

1. Créez une fonction `bonjour(prenom)` qui retourne `"Bonjour, [prenom] !"`.
2. Utilisez un template literal pour afficher un message contenant le retour de cette fonction.

<details>
  <summary>💡 Indice</summary>

  ```javascript
  function bonjour(prenom) {
      return `Bonjour, ${prenom} !`;
  }

  console.log(`Message du jour : ${bonjour("Alice")}`);