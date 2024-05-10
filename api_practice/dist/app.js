import express from 'express';
import { Character } from './character.js';
const port = 3000;
const app = express();
app.use(express.json());
//app.use('/', (req, res) => {
//  res.json({"message": "<h1>Hello!!</h1>"})
//})
const characters = [
    new Character('Jingliu', 'Destruction', 80, 2800, 130, 3030, ['Ice Sword', 'Blindfold'], "b780c4c6-68c2-4177-8371-af0102a99d38"),
    new Character('Acheron', 'Nihility', 80, 3157, 9, 3814, ['Electric Sword', 'Crimson Blossom'], "8f4473bf-6871-42c1-bbd6-f5cfaa859de1")
];
function sanitizeCharacterInput(req, res, next) {
    req.body.sanitizedCharacter = {
        name: req.body.name,
        characterClass: req.body.characterClass,
        level: req.body.level,
        hp: req.body.hp,
        mana: req.body.mana,
        attack: req.body.attack,
        items: req.body.items
    };
    Object.keys(req.body.sanitizedCharacter).forEach((key) => {
        if (req.body.sanitizedCharacter[key] === undefined) {
            delete req.body.sanitizedCharacter[key];
        }
    });
    next();
}
//get /api/characters/ -> obtener lista de characters
app.get('/api/characters', (req, res) => {
    return res.json({ data: characters });
});
//get /api/characters/:id -> obtener el character con id = :id
app.get('/api/characters/:id', (req, res) => {
    const character = characters.find((character) => character.id === req.params.id);
    if (!character) {
        return res.status(404).send({ message: 'characterNotFound' });
        //el "return" evita que continúe la ejecución hacia "res.json"
    }
    res.json({ data: character });
});
//post /api/character -> crear nuevos character
//user -> request -> express -> middleware que forme req.body (express.json()) -> app.post -> response -> user
app.post('/api/characters', sanitizeCharacterInput, (req, res) => {
    const input = req.body.sanitizedCharacter;
    const character = new Character(input.name, input.characterClass, input.level, input.hp, input.mana, input.attack, input.items);
    characters.push(character);
    return res.status(201).send({ message: 'Character created succesfully', data: character });
});
//put /api/characters/:id -> modificar character con id = :id (recurso completo e idempotente)
app.put('/api/characters/:id', sanitizeCharacterInput, (req, res) => {
    const charIndex = characters.findIndex((character) => character.id === req.params.id);
    if (charIndex === -1) {
        return res.status(404).send({ message: 'characterNotFound' });
    }
    Object.assign(characters[charIndex], req.body.sanitizedCharacter);
    //También podemos reasignar de la siguiente manera:
    //characters[charIndex] = {...characters[charIndex], ...req.body.sanitizedCharacter}
    return res.status(200).send({ message: 'Character modified succesfully', data: characters[charIndex] });
});
//patch /api/characters/:id -> modificar character con id = :id (recurso parcial)
app.patch('/api/characters/:id', sanitizeCharacterInput, (req, res) => {
    const charIndex = characters.findIndex((character) => character.id === req.params.id);
    if (charIndex === -1) {
        return res.status(404).send({ message: 'characterNotFound' });
    }
    characters[charIndex] = { ...characters[charIndex], ...req.body.sanitizedCharacter };
    return res.status(200).send({ message: 'Character modified succesfully', data: characters[charIndex] });
});
//detele /api/character/:id -> borrar character con id = :id
app.delete('/api/characters/:id', (req, res) => {
    const charIndex = characters.findIndex((character) => character.id === req.params.id);
    if (charIndex === -1) {
        res.status(404).send({ message: 'Character not found' });
    }
    else {
        characters.splice(charIndex, 1);
        res.status(200).send({ message: 'Character deleted succesfully' });
    }
});
app.use((req, res) => {
    return res.status(404).send({ message: 'Resource not found' });
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});
//# sourceMappingURL=app.js.map