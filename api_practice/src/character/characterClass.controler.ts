
import { Request, Response } from 'express'
import { orm } from '../shared/db/ormMySQL.js'
import { CharacterClass } from './characterClass.entity.js'

const em = orm.em

em.getRepository(CharacterClass)


async function findAll(req: Request, res: Response) {
  try {
    const characterClasses = await em.find(CharacterClass, {})
    res.status(200).json({message: 'found all character classes', data: characterClasses})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
}

async function findOne(req: Request, res: Response) {
  try {
    const id = Number.parseInt(req.params.id)
    const characterClass = await em.findOneOrFail(CharacterClass, { id })
    res.status(200).json({message: 'found character class', data: characterClass})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
}

async function add(req: Request, res: Response) {
  try {
    const characterClass = em.create(CharacterClass, req.body)
    await em.flush()
    res.status(201).json({message: 'character class created succesfully', data: characterClass})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
}

async function update(req: Request, res: Response) {
  try {
    const id = Number.parseInt(req.params.id)
    const characterClass = em.getReference(CharacterClass, id)
    em.assign(characterClass, req.body)
    await em.flush()
    res.status(200).json({message: 'character class updated', data: characterClass})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
}

async function remove(req: Request, res: Response) {
  try {
    const id = Number.parseInt(req.params.id)
    const characterClass = em.getReference(CharacterClass, id)
    await em.removeAndFlush(characterClass)
    res.status(200).send({message: 'character class deleted'})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
}

export {findAll, findOne, add, update, remove}

