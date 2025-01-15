export function tirerPersonnage(character, rarity) {
    // Validation des paramètres
    if (!character || !rarity) {
        throw new Error("Les paramètres character et rarity sont requis");
    }

    if (!Array.isArray(character) || !Array.isArray(rarity)) {
        throw new Error("Les paramètres character et rarity doivent être des tableaux");
    }

    // Calcul du total des probabilités depuis rarity
    const total = rarity.reduce((sum, r) => sum + r.probability, 0);
    const rand = Math.random() * total;
    
    // Créer un mapping des probabilités
    const rarityMap = new Map(rarity.map(r => [r.id, r.probability]));
    
    // Mélanger le tableau de personnages pour plus d'aléatoire
    const shuffledCharacters = [...character].sort(() => Math.random() - 0.5);
    
    let cumulative = 0;
    for (const char of shuffledCharacters) {
        const prob = rarityMap.get(char.rarity);
        cumulative += prob;
        if (rand <= cumulative) {
            return char;
        }
    }
    
    // Si aucun personnage n'est sélectionné, retourner le dernier
    return shuffledCharacters[shuffledCharacters.length - 1];
}
