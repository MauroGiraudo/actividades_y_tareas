import { findAll, findOne, add, remove, update } from "./item.controler.js";
import { Router } from "express";

export const itemRouter = Router()

itemRouter.get('/', findAll)
itemRouter.get('/:id', findOne)
itemRouter.post('/', add)
itemRouter.put('/:id', update)
itemRouter.delete('/:id', remove)