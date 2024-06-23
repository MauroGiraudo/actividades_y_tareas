import { CharacterRepository } from "./character.repository.js";
import { Request, Response, NextFunction } from 'express'
import { Character } from "./character.entity.js";

const charRepository = new CharacterRepository

function sanitizedCharacter(req: Request, res: Response, next: NextFunction) {
  req.body.sanitizedChar = {
    name: req.body.name,
    characterClass: req.body.characterClass,
    level: req.body.level,
    hp: req.body.hp,
    mana: req.body.mana,
    attack: req.body.attack,
    items: req.body.items,
  }

  Object.keys(req.body.sanitizedChar).forEach((key) => {
    if (req.body.sanitizedChar[key] === undefined) {
      delete req.body.sanitizedChar[key]
    }
  })
  next()
}

function findAll(req: Request, res: Response) {
  res.json({data: charRepository.findAll()})
}

function findOne(req: Request, res: Response) {
  const idChar = req.params.id
  const char = charRepository.findOne({codigo: idChar})
  if (!char) {
    res.status(404).send({message: 'El id ingresado no corresponde a un personaje'})
  }
  res.json({data: char})
}

function add(req: Request, res: Response) {
  const input = req.body.sanitizedChar
  const charInput = new Character (input.name, input.characterClass, input.level, input.hp, input.mana, input.attack, input.items, input.id)
  const char = charRepository.add(charInput)
  res.status(201).send({message: 'El personaje ha sido creado exitosamente', data: char})
}

function update(req: Request, res: Response) {
  req.body.sanitizedChar.id = req.params.id
  const updatedChar = charRepository.update(req.body.sanitizedChar)
  if (!updatedChar) {
    res.status(404).send({message: 'El id no corresponde a un personaje registrado'})
  }
  res.status(200).send({message: 'El personaje ha sido actualizado con éxito'})
}

function remove(req: Request, res: Response) {
  const idChar = req.params.id
  const deletedChar = charRepository.delete({codigo: idChar})
  if (!deletedChar) {
    res.status(404).send({message: 'El id no corresponde a un personaje registrado'})
  }
  res.status(200).send({message: 'El personaje ha sido eliminado con éxito'})
}

export {sanitizedCharacter, findAll, findOne, add, update, remove}

