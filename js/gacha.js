export function tirerPersonnage(pool) {
    const total = pool.reduce((sum, item) => sum + item.probability, 0);
    const rand = Math.random() * total;
    let cumulative = 0;

    for (const personnage of pool) {
        cumulative += personnage.probability;
        if (rand <= cumulative) return personnage;
    }
    return null; // Au cas où (ne devrait jamais arriver)
}