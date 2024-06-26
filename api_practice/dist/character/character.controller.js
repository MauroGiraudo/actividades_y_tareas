import { CharacterRepository } from "./character.repository.js";
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
        id: req.body.id
    };
    Object.keys(req.body.sanitizedChar).forEach((key) => {
        if (req.body.sanitizedChar[key] === undefined) {
            delete req.body.saniitizedChar[key];
        }
    });
    next();
}
function findAll(req, res) {
    res.json({ data: charRepository.findAll() });
}
function findOne(req, res) {
    const idChar = req.params.id;
    const char = charRepository.findOne({ codigo: idChar });
    if (!char) {
        res.status(404).send({ message: 'El id ingresado no corresponde a un personaje' });
    }
    res.json({ data: char });
}
function add(req, res) {
    const input = req.body.sanitizedChar;
    const char = charRepository.add(input);
    res.status(201).send({ message: 'El personaje ha sido creado exitosamente', data: char });
}
function update(req, res) {
    req.body.sanitizedChar.id = req.params.id;
    const updatedChar = charRepository.update(req.body.sanitizedChar);
    if (!updatedChar) {
        res.status(404).send({ message: 'El id no corresponde a un personaje registrado' });
    }
    res.status(200).send({ message: 'El personaje ha sido actualizado con éxito' });
}
function remove(req, res) {
    const idChar = req.params.id;
    const deletedChar = charRepository.delete({ codigo: idChar });
    if (!deletedChar) {
        res.status(404).send({ message: 'El id no corresponde a un personaje registrado' });
    }
    res.status(200).send({ message: 'El personaje ha sido eliminado con éxito' });
}
export { sanitizedCharacter, findAll, findOne, add, update, remove };
//# sourceMappingURL=character.controller.js.map