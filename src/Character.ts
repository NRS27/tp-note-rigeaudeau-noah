export abstract class Character {
    public name: string;
    public health: number;
    public maxHealth: number;
    public baseAttack: number;
    public baseDefense: number;

    constructor(name: string, maxHealth: number, baseAttack: number, baseDefense: number) {
        this.name = name;
        this.health = maxHealth;
        this.maxHealth = maxHealth;
        this.baseAttack = baseAttack;
        this.baseDefense = baseDefense;
    }
}

