# Exercices sur les middlewares en JavaScript (Express.js)

Les **middlewares** sont des fonctions exécutées lors du traitement des requêtes dans **Express.js**. Ces exercices vous aideront à les comprendre et à les manipuler.

---

## Exercice 1 : Création d’un middleware simple

**Objectif :** Créer un middleware qui affiche un message à chaque requête.

1. Installez Express avec `npm install express` si ce n’est pas déjà fait.
2. Créez un serveur Express simple.
3. Ajoutez un middleware qui affiche `"Une requête a été reçue"` à chaque requête.

<details>
  <summary>💡 Astuce</summary>
  - Un middleware est une fonction qui prend trois arguments : `(req, res, next)`.
  - N'oubliez pas d'appeler `next()` pour passer au middleware suivant !
</details>

---

## Exercice 2 : Middleware pour logger les requêtes

**Objectif :** Créer un middleware qui affiche la méthode et l’URL des requêtes.

1. Modifiez le middleware précédent pour qu’il affiche la méthode HTTP (`req.method`) et l’URL (`req.url`).

<details>
  <summary>💡 Astuce</summary>
  - Utilisez `console.log()` pour afficher les informations des requêtes.
  - `new Date().toISOString()` permet d'afficher un horodatage précis.
</details>

---

## Exercice 3 : Middleware pour restreindre l’accès

**Objectif :** Bloquer l’accès à certaines routes selon une condition.

1. Créez un middleware qui vérifie si un utilisateur est **connecté** (exemple simple : si `req.headers.authorization` existe).
2. Appliquez ce middleware à une route `/dashboard`, mais pas à `/`.

<details>
  <summary>💡 Astuce</summary>
  - Vérifiez la présence de `req.headers.authorization` pour simuler une authentification.
  - En cas d’accès refusé, utilisez `res.status(403).send("Accès refusé")`.
</details>

---

## Exercice 4 : Middleware pour gérer les erreurs

**Objectif :** Créer un middleware de gestion des erreurs.

1. Ajoutez un middleware qui capture les erreurs et affiche `"Une erreur est survenue"` avec un code 500.
2. Testez-le en déclenchant une erreur volontaire (`throw new Error("Problème")` dans une route).

<details>
  <summary>💡 Astuce</summary>
  - Un middleware d'erreur prend **quatre** arguments : `(err, req, res, next)`.
  - Utilisez `console.error(err.message)` pour afficher les erreurs en console.
</details>

---

## Exercice 5 : Middleware pour parser le JSON

**Objectif :** Ajouter le middleware `express.json()` pour traiter les requêtes JSON.

1. Ajoutez `express.json()` pour permettre à votre serveur de lire le corps des requêtes JSON.
2. Créez une route `POST /data` qui affiche les données envoyées par le client.

<details>
  <summary>💡 Astuce</summary>
  - Le middleware `express.json()` est **intégré** dans Express.
  - Accédez aux données envoyées avec `req.body`.
</details>

---

## Exercice 6 : Chaînage de middlewares

**Objectif :** Exécuter plusieurs middlewares sur une même requête.

1. Créez deux middlewares :
   - Un premier qui ajoute `req.user = "Alice";`
   - Un deuxième qui affiche `req.user`.
2. Appliquez-les à la route `/profile`.

<details>
  <summary>💡 Astuce</summary>
  - Vous pouvez chaîner plusieurs middlewares en les ajoutant dans la route : `app.get("/profile", middleware1, middleware2)`.
  - `req` est un objet modifiable : vous pouvez y ajouter des propriétés personnalisées comme `req.user`.
</details>

---

Amusez-vous bien avec ces exercices et entraînez-vous à tester les middlewares dans Express.js ! 🚀