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
    let cumulative = 0;

    // Créer un mapping des probabilités
    const rarityMap = new Map(rarity.map(r => [r.id, r.probability]));
    
    // Filtrer et trier les personnages par probabilité
    const weightedCharacters = character.map(char => ({
        ...char,
        probability: rarityMap.get(char.rarity)
    }));

    for (const personnage of weightedCharacters) {
        cumulative += personnage.probability;
        if (rand <= cumulative) return personnage;
    }
    return null;
}