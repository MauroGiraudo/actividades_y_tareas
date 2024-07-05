import { Character } from "./character.entity.js";
import { orm } from "../shared/db/orm.js";
const em = orm.em;
function sanitizedCharacter(req, res, next) {
    req.body.sanitizedChar = {
        name: req.body.name,
        characterClass: req.body.characterClass,
        level: req.body.level,
        hp: req.body.hp,
        mana: req.body.mana,
        attack: req.body.attack,
        items: req.body.items,
    };
    Object.keys(req.body.sanitizedChar).forEach((key) => {
        if (req.body.sanitizedChar[key] === undefined) {
            delete req.body.sanitizedChar[key];
        }
    });
    next();
}
async function findAll(req, res) {
    try {
        const characters = await em.find(Character, {}, { populate: ['characterClass', 'items'] });
        res.status(200).json({ message: 'found all characters', data: characters });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
}
async function findOne(req, res) {
    try {
        const id = req.params.id;
        const character = await em.findOneOrFail(Character, { id }, { populate: ['characterClass', 'items'] });
        res.status(200).json({ message: 'character found', data: character });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
}
async function add(req, res) {
    try {
        const character = em.create(Character, req.body.sanitizedChar);
        await em.flush();
        res.status(201).json({ message: 'character created succesfully', data: character });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
}
async function update(req, res) {
    try {
        const id = req.params.id;
        const characterToUpdate = await em.findOneOrFail(Character, { id });
        em.assign(characterToUpdate, req.body.sanitizedChar);
        em.flush();
        res.status(200).send({ message: 'character updated succesfully' });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
}
async function remove(req, res) {
    try {
        const id = req.params.id;
        const character = em.getReference(Character, id);
        await em.removeAndFlush(character);
        res.status(200).send({ message: 'character removed succesfully' });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
}
export { sanitizedCharacter, findAll, findOne, add, update, remove };
//# sourceMappingURL=character.controler.js.map