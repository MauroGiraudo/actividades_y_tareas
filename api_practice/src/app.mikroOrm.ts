import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express'
import { charRouter } from './character/character.routes.js'
import { orm } from './shared/db/ormMySQL.js'
import { RequestContext } from '@mikro-orm/core'
import { charClassRouter } from './character/characterClass.routes.js'
import { itemRouter } from './character/item.routes.js'

const port = 3000
const app = express()
app.use(express.json())

//luego de los middleware base, como express.json o course

app.use((req, res, next) => {
  RequestContext.create(orm.em, next)
})

//antes de las rutas y middleware de nuestro negocio

app.use('/api/characters/classes', charClassRouter)

app.use('/api/characters', charRouter)

app.use('/api/items', itemRouter)

app.use((req: Request, res: Response) => {
  return res.status(404).send({message: 'Resource not found'})
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`)
})

