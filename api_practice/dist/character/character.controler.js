import { CharacterRepository } from "./character.repository.js";
import { Character } from "./character.entity.js";
const charRepository = new CharacterRepository;
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
    res.json({ data: await charRepository.findAll() });
}
async function findOne(req, res) {
    const idChar = req.params.id;
    const char = await charRepository.findOne({ codigo: idChar });
    if (!char) {
        res.status(404).send({ message: 'El id ingresado no corresponde a un personaje' });
    }
    res.json({ data: char });
}
async function add(req, res) {
    const input = req.body.sanitizedChar;
    const charInput = new Character(input.name, input.characterClass, input.level, input.hp, input.mana, input.attack, input.items, input.id);
    const char = await charRepository.add(charInput);
    res.status(201).send({ message: 'El personaje ha sido creado exitosamente', data: char });
}
async function update(req, res) {
    const updatedChar = await charRepository.update(req.params.id, req.body.sanitizedChar);
    if (!updatedChar) {
        res.status(404).send({ message: 'El id no corresponde a un personaje registrado' });
    }
    res.status(200).send({ message: 'El personaje ha sido actualizado con éxito', data: updatedChar });
}
async function remove(req, res) {
    const idChar = req.params.id;
    const deletedChar = await charRepository.delete({ codigo: idChar });
    if (!deletedChar) {
        res.status(404).send({ message: 'El id no corresponde a un personaje registrado' });
    }
    res.status(200).send({ message: 'El personaje ha sido eliminado con éxito' });
}
export { sanitizedCharacter, findAll, findOne, add, update, remove };
//# sourceMappingURL=character.controler.js.map