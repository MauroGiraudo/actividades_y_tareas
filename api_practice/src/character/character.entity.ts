//import crypto from 'node:crypto'
import { customAlph } from '../shared/customAlphabet.js'

export class Character {
  constructor(
    public name:string, 
    public characterClass:string, 
    public level:number, 
    public hp:number, 
    public mana:number, 
    public attack:number, 
    public items:string[],
    public id = customAlph()
    //public id = crypto.randomUUID(),
  ) {}
}