export function tirerPersonnage(character) {
    const total = character.reduce((sum, item) => sum + item.probability, 0);
    const rand = Math.random() * total;
    let cumulative = 0;

    for (const personnage of character) {
        cumulative += personnage.probability;
        if (rand <= cumulative) return personnage;
    }
    return null; // Au cas où (ne devrait jamais arriver)
}