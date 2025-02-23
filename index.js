// Importation des modules nécessaires
import express from "express"; // Framework web Express


// Création d'une instance de l'application Express
const app = express();


// Définir EJS comme moteur de rendu pour les vues
app.set('view engine', 'ejs');

/*app.use(function(req, res, next){
    console.log("Une requête a été reçue");
    next();
});*/

app.use(function(req, res, next){
    console.log(new Date().toISOString());
    next();
});


app.get('/', function(req, res){
    res.send('Hello World');
});




// Définition du port et du nom d'hôte
const port = 8000; // Le port sur lequel le serveur va écouter
const hostname = 'localhost'; // Le nom d'hôte

// Démarrer le serveur et écouter les connexions sur le port et le nom d'hôte définis
app.listen(port, hostname, function() {
    console.log('Server listening on http://' + hostname + ':' + port); // Afficher un message dans la console lorsque le serveur est prêt
});