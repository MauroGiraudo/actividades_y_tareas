import { sanitizedCharacter, findAll, findOne, add, remove, update } from "./character.controler.mikroOrm.js";
import { Router } from "express";

export const charRouter = Router()

charRouter.get('/', findAll)
charRouter.get('/:id', findOne)
charRouter.post('/', sanitizedCharacter, add)
charRouter.put('/:id', sanitizedCharacter, update)
charRouter.patch('/:id', sanitizedCharacter, update)
charRouter.delete('/:id', remove)