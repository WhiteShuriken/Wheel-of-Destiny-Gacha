export function afficherResultat(personnages, container) {
    if (!Array.isArray(personnages)) {
        personnages = [personnages];
    }
    container.innerHTML = personnages
        .map(personnage => `<p>Vous avez obtenu : <strong>${personnage.name}</strong> (${personnage.rarity})</p>`)
        .join("");
}