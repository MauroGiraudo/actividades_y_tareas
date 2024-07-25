import { Request, Response, NextFunction } from 'express'
import { CharacterMKORM } from "./character.entity.mikroOrm.js";
import { orm } from "../shared/db/ormMongo.js";

const em = orm.em

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

async function findAll(req: Request, res: Response) {
  try {
    const characters = await em.find(CharacterMKORM, {}, {populate: ['characterClass', 'items']})
    res.status(200).json({message: 'found all characters', data: characters})
  } catch (error: any) {
    res.status(500).send({message: error.message})
  }
}

async function findOne(req: Request, res: Response) {
  try {
    const id = req.params.id
    const character = await em.findOneOrFail(CharacterMKORM, { id }, {populate: ['characterClass', 'items']})
    res.status(200).json({message: 'character found', data: character})
  } catch (error: any) {
    res.status(500).send({message: error.message})
  }
}

async function add(req: Request, res: Response) {
  try {
    const character = em.create(CharacterMKORM, req.body.sanitizedChar)
    await em.flush()
    res.status(201).json({message: 'character created succesfully', data: character})
  } catch (error: any) {
    res.status(500).send({message: error.message})
  }
}

async function update(req: Request, res: Response) {
  try {
    const id = req.params.id
    const characterToUpdate = await em.findOneOrFail(CharacterMKORM, { id })
    em.assign(characterToUpdate, req.body.sanitizedChar)
    em.flush()
    res.status(200).send({message: 'character updated succesfully'})
  } catch (error: any) {
    res.status(500).send({message: error.message})
  }
}

async function remove(req: Request, res: Response) {
  try {
    const id = req.params.id
    const character = em.getReference(CharacterMKORM, id)
    await em.removeAndFlush(character)
    res.status(200).send({message: 'character removed succesfully'})
  } catch (error: any) {
    res.status(500).send({message: error.message})
  }
}

export {sanitizedCharacter, findAll, findOne, add, update, remove}

