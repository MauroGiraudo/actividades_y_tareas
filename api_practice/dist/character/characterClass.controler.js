import { orm } from '../shared/db/orm.js';
import { CharacterClass } from './characterClass.entity.js';
const em = orm.em;
em.getRepository(CharacterClass);
async function findAll(req, res) {
    try {
        const characterClasses = await em.find(CharacterClass, {});
        res.status(200).json({ message: 'finded all character classes', data: characterClasses });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function findOne(req, res) {
    try {
        const id = req.params.id;
        const characterClass = await em.findOneOrFail(CharacterClass, { id });
        res.status(200).json({ message: 'found character class', data: characterClass });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function add(req, res) {
    try {
        const characterClass = em.create(CharacterClass, req.body);
        await em.flush();
        res.status(201).json({ message: 'character class created succesfully', data: characterClass });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function update(req, res) {
    try {
        const id = req.params.id;
        const characterClass = em.getReference(CharacterClass, id);
        em.assign(characterClass, req.body);
        await em.flush();
        res.status(200).json({ message: 'character class updated' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function remove(req, res) {
    try {
        const id = req.params.id;
        const characterClass = em.getReference(CharacterClass, id);
        await em.removeAndFlush(characterClass);
        res.status(200).send({ message: 'character class deleted' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export { findAll, findOne, add, update, remove };
//# sourceMappingURL=characterClass.controler.js.map