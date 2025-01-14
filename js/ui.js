export function afficherResultat(personnages, container, rarity) {
    if (!Array.isArray(personnages)) {
        personnages = [personnages];
    }
    container.innerHTML = personnages
        .map(personnage => {
            const rarete = rarity.find(r => r.id === personnage.rarity);
            const rareteNom = rarete ? rarete.name : "Inconnue"; // Gestion de l'absence de rareté
            return `<p>Vous avez obtenu : <strong>${personnage.name}</strong> (${rareteNom})</p>`;
        })
        .join("");
}
