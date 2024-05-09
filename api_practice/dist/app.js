import express from 'express';
import { Character } from './character.js';
const port = 3000;
const app = express();
//app.use('/', (req, res) => {
//  res.json({"message": "<h1>Hello!!</h1>"})
//})
const characters = [
    new Character('Jingliu', 'Destruction', 80, 2800, 130, 3030, ['Ice Sword', 'Blindfold'])
];
//Función "Get All"
app.get('/api/characters', (req, res) => {
    res.json(characters);
});
app.get('/api/characters/:id', (req, res) => {
    const character = characters.find((character) => character.id === req.params.id);
    if (!character) {
        res.status(404).send({ message: 'characterNotFound' });
    }
    else {
        res.json(character);
    }
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});
//character -> /api/characters
//get /api/characters/ -> obtener lista de characters
//get /api/characters/:id -> obtener el character con id = :id
//post /api/character -> crear nuevos character
//detele /api/character/:id -> borrar character con id = :id
//put & patch /api/characters/:id -> modificar character con id = :id
//# sourceMappingURL=app.js.map