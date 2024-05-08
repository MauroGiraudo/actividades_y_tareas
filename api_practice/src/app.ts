import express from 'express'
import { Character } from './character.js'

const app = express()

//app.use('/', (req, res) => {
//  res.json({"message": "<h1>Hello!!</h1>"})
//})

const characters = [
  new Character(
    'Jingliu',
    'Destruction',
    80,
    2800,
    130,
    3030,
    ['Ice Sword', 'Blindfold']
  )
]

app.get('/api/characters', (req, res) => {
  res.json(characters)
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000/')
})

//character -> /api/characters
//get /api/characters/ -> obtener lista de characters
//get /api/characters/:id -> obtener el character con id = :id
//post /api/character -> crear nuevos character
//detele /api/character/:id -> borrar character con id = :id
//put & patch /api/characters/:id -> modificar character con id = :id