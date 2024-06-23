//import crypto from 'node:crypto'
import { customAlph } from '../shared/customAlphabet.js';
export class Character {
    constructor(name, characterClass, level, hp, mana, attack, items, id = customAlph()
    //public id = crypto.randomUUID(),
    ) {
        this.name = name;
        this.characterClass = characterClass;
        this.level = level;
        this.hp = hp;
        this.mana = mana;
        this.attack = attack;
        this.items = items;
        this.id = id;
    }
}
//# sourceMappingURL=character.entity.js.map