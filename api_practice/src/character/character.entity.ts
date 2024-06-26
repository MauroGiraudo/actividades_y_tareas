//import crypto from 'node:crypto'
import { ObjectId } from 'mongodb';
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
    public id: number,
    public _id?: ObjectId
    //public id = crypto.randomUUID(),
  ) {}
}