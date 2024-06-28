import { Character } from "./character.entity.js";
const characters = [
    new Character('Jingliu', 'Destruction', 80, 2800, 130, 3030, ['Ice Sword', 'Blindfold'], "b780c4c668c2"),
    new Character('Acheron', 'Nihility', 80, 3157, 9, 3814, ['Electric Sword', 'Crimson Blossom'], "8f4473bf6871")
];
export class CharacterRepository {
    async findAll() {
        return await characters;
    }
    async findOne(item) {
        return await characters.find((char) => char.id === item.codigo);
    }
    async add(item) {
        await characters.push(item);
        return item;
    }
    async update(item) {
        const charIndex = await characters.findIndex((char) => char.id === item.id);
        if (charIndex !== -1) {
            characters[charIndex] = { ...characters[charIndex], ...item };
        }
        return characters[charIndex];
    }
    async delete(item) {
        const charIndex = await characters.findIndex((char) => char.id === item.codigo);
        const deletedChar = characters[charIndex];
        characters.splice(charIndex, 1);
        return deletedChar;
    }
}
//# sourceMappingURL=character.repository.memory.js.map