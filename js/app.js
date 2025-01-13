import { pool } from './data.js';
import { tirerPersonnage } from './gacha.js';
import { afficherResultat } from './ui.js';

const menus = {
    home: document.getElementById("home-menu"),
    pull: document.getElementById("pull-menu"),
    collection: document.getElementById("collection-menu"),
};

const homeButton = document.getElementById("home-button");
const pullButton = document.getElementById("pull-button");
const collectionButton = document.getElementById("collection-button");

const singlePullButton = document.getElementById("single-pull");
const multiPullButton = document.getElementById("multi-pull");
const pullResultDiv = document.getElementById("pull-result");
const collectionDiv = document.getElementById("collection");

let collection = []; // Stocke les personnages obtenus

// Fonction pour basculer entre les menus
function showMenu(menuName) {
    Object.keys(menus).forEach(name => {
        menus[name].style.display = name === menuName ? "block" : "none";
    });
}

// Gestion des boutons de navigation
homeButton.addEventListener("click", () => showMenu("home"));
pullButton.addEventListener("click", () => showMenu("pull"));
collectionButton.addEventListener("click", () => {
    showMenu("collection");
    afficherCollection();
});

// Gestion des tirages
singlePullButton.addEventListener("click", () => {
    const personnage = tirerPersonnage(pool);
    collection.push(personnage); // Ajoute à la collection
    afficherResultat(personnage, pullResultDiv);
});

multiPullButton.addEventListener("click", () => {
    const personnages = []; // Déclarez le tableau une seule fois
    for (let i = 0; i < 10; i++) {
        const personnage = tirerPersonnage(pool);
        personnages.push(personnage); // Ajoutez chaque personnage au tableau
        collection.push(personnage); // Ajoutez chaque personnage à la collection
    }
    afficherResultat(personnages, pullResultDiv); // Passez le tableau de personnages à afficherResultat
});

// Fonction pour afficher la collection
function afficherCollection() {
    collectionDiv.innerHTML = ""; // Vide l'affichage précédent
    const counts = collection.reduce((acc, personnage) => {
        acc[personnage.name] = (acc[personnage.name] || 0) + 1;
        return acc;
    }, {});

    for (const [name, count] of Object.entries(counts)) {
        const div = document.createElement("div");
        div.textContent = `${name} (x${count})`;
        collectionDiv.appendChild(div);
    }
}
