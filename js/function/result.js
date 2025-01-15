export function afficherResultat(personnages, container, rarity) {
    // Vérifie si 'personnages' est un tableau, sinon le transforme en tableau
    if (!Array.isArray(personnages)) {
        personnages = [personnages];
    }
    
    // Vide le conteneur et affiche les résultats des personnages tirés
    container.innerHTML = personnages
        .map(personnage => {
            const rarete = rarity.find(r => r.id === personnage.rarity);
            const rareteNom = rarete ? rarete.name : "Inconnue"; // Gestion de l'absence de rareté
            return `<p>Vous avez obtenu : <strong>${personnage.name}</strong> (${rareteNom})</p>`;
        })
        .join("");
}
