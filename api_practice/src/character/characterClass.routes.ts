import { findAll, findOne, add, remove, update } from "./characterClass.controler.js";
import { Router } from "express";

export const charClassRouter = Router()

charClassRouter.get('/', findAll)
charClassRouter.get('/:id', findOne)
charClassRouter.post('/', add)
charClassRouter.put('/:id', update)
charClassRouter.delete('/:id', remove)