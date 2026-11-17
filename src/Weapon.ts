export type WeaponKind = 'sword' | 'axe' | 'bow' | 'dagger';

export class Weapon {
    public name: string;
    public kind: WeaponKind
    public attackBonus: number;

    public constructor (name: string, kind: WeaponKind, attackBonus: number) {
        if (attackBonus < 0 ){
            throw new Error('The attackBonus of ' + name + ' cannot be negative.');
        }
        this.name = name;
        this.kind = kind;
        this.attackBonus = attackBonus;
    }
    public describe(): string {
        return `Weapon: ${this.name}, Kind: ${this.kind}, Attack Bonus: ${this.attackBonus}`;
    }
}