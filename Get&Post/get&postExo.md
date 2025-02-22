# Exercices sur les méthodes GET et POST en JavaScript (Express.js)

Les méthodes **GET** et **POST** sont les plus utilisées pour envoyer et récupérer des données d’un serveur. Ces exercices vous aideront à mieux comprendre leur fonctionnement dans **Express.js**.

---

## Exercice 1 : Création d’une route GET simple

**Objectif :** Créer une route GET qui renvoie un message de bienvenue.

1. Installez Express avec `npm install express` si ce n’est pas déjà fait.
2. Créez un serveur Express.
3. Ajoutez une route `GET /` qui renvoie `"Bienvenue sur mon serveur !"`.  
   
<details>
  <summary>💡 Astuce</summary>
  - Utilisez `app.get("/route", (req, res) => { ... })` pour définir une route GET.
  - La méthode `res.send("message")` permet d’envoyer une réponse texte.
</details>

---

## Exercice 2 : Route GET avec paramètres d’URL

**Objectif :** Créer une route GET qui prend un paramètre `nom` dans l’URL et affiche `"Bonjour, nom !"`.  

1. Ajoutez une route `GET /hello/:nom` où `nom` est un paramètre dynamique.
2. La route doit retourner `"Bonjour, nom !"` en remplaçant `nom` par la valeur passée dans l’URL.

<details>
  <summary>💡 Astuce</summary>
  - Récupérez le paramètre avec `req.params.nom`.
  - Utilisez les **backticks (`) et ${}`** pour insérer une variable dans une chaîne de caractères.
</details>

---

## Exercice 3 : Route GET avec query parameters

**Objectif :** Créer une route GET qui récupère des informations depuis l’URL avec des **query parameters**.

1. Ajoutez une route `GET /search` qui récupère un paramètre `query` dans l’URL (ex: `/search?query=voiture`).
2. Retournez `"Vous avez recherché : query"`.

<details>
  <summary>💡 Astuce</summary>
  - Récupérez le paramètre avec `req.query.query`.
  - Vérifiez si le paramètre existe avec `if (!req.query.query)`.
</details>

---

## Exercice 4 : Création d’une route POST simple

**Objectif :** Créer une route POST qui reçoit des données et les affiche dans la réponse.

1. Ajoutez le middleware `express.json()` pour gérer les requêtes JSON.
2. Créez une route `POST /data` qui renvoie `"Données reçues"` avec les données envoyées.

<details>
  <summary>💡 Astuce</summary>
  - `express.json()` doit être ajouté avec `app.use(express.json())` pour permettre la lecture du JSON.
  - Récupérez les données envoyées avec `req.body`.
</details>

---

## Exercice 5 : Vérification des données dans une requête POST

**Objectif :** Vérifier si un utilisateur a envoyé un champ obligatoire (`nom`) dans le corps de la requête.

1. Modifiez la route `POST /user` pour vérifier si `req.body.nom` existe.
2. Si `nom` est absent, renvoyez un statut **400** et un message `"Nom requis"`.
3. Sinon, affichez `"Utilisateur : nom ajouté"`.

<details>
  <summary>💡 Astuce</summary>
  - Vérifiez avec `if (!req.body.nom)`.
  - Utilisez `res.status(400).send("Message d’erreur")` pour renvoyer une erreur.
</details>

---

## Exercice 6 : Association d’un formulaire HTML avec une requête POST

**Objectif :** Créer un formulaire HTML qui envoie des données avec **POST**.

1. Créez un fichier HTML contenant un `<form>` avec un champ `nom` et un bouton **Envoyer**.
2. Configurez le formulaire pour qu’il envoie ses données vers `/submit` en **POST**.
3. Ajoutez une route `POST /submit` dans Express qui affiche `"Données reçues : nom"`.

<details>
  <summary>💡 Astuce</summary>
  - Dans HTML, utilisez `<form action="/submit" method="POST">`.
  - Ajoutez `app.use(express.urlencoded({ extended: true }))` pour gérer les **formulaires** en `x-www-form-urlencoded`.
</details>

---

Ces exercices vous aideront à mieux comprendre **GET** et **POST** dans Express.js ! 🚀