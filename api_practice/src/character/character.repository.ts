import { Character } from "./character.entity.js";
import { Repository } from "../shared/repository.js"; 
import { db } from "../shared/db/conn.js";
import { ObjectId } from "mongodb";
import { pool } from "../shared/db/conn.mysql.js";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import { Item } from "./item.entity.js";

const characters = db.collection<Character>('characters')

export class CharacterRepository implements Repository<Character> {

  public async findAll(): Promise<Character[] | undefined> {
   //MongoDB
   /*return await characters.find().toArray()*/
   //MySQL 
   const [characters] = await pool.query('select * from characters')
    for(const character of characters as Character[]){
      const [items] = await pool.query('select * from characterItems where itemName = ?', [character.id])
      //CONSULTAR CÓMO RESOLVER EL PROBLEMA DE TIPOS (string[] - Item[]) 
      //character.items = (items as {itemName:string}[]).map((item) => item.itemName)
    }
    return characters as Character[]
  }

  public async findOne(item: { codigo: string }): Promise<Character | undefined> {
    //MongoDB
    /*const _id = new ObjectId(item.codigo)
    return (await characters.findOne({_id})) || undefined*/
    //MySQL
    const id = Number.parseInt(item.codigo)
    const [characters] = await pool.query<RowDataPacket[]>('select * from characters = ?', [id])
    if (characters.length === 0){
      return undefined
    }
    const character = characters[0] as Character
      const [items] = await pool.query('select * from characterItems where itemName = ?', [character.id])
      //CONSULTAR CÓMO RESOLVER EL PROBLEMA DE TIPOS (string[] - Item[]) 
      //character.items = (items as {itemName:string}[]).map((item) => item.itemName)
      return character
  }

  public async add(characterInput: Character): Promise<Character | undefined> {
   //MongoDB
    /*characterInput._id = (await characters.insertOne(characterInput)).insertedId
    return characterInput*/
   //MySQL
   const {id, items, ...characterRow} = characterInput 
   const [resultado] = await pool.query<ResultSetHeader>('insert into characters set ?', [characterRow])
   characterInput.id = resultado.insertId
   for(const item of items){
    await pool.query('insert into characterItems set ?', {CharacterId:characterInput.id, ItemName:item})
   }
   return characterInput
  }

  public async update(codigo:string, characterInput: Character): Promise<Character | undefined> {
    //MongoDB
    /*const _id = new ObjectId(codigo)
    return (await characters.findOneAndUpdate({_id}, {$set: characterInput}, {returnDocument:'after'})) || undefined*/
    //MySQL
    const characterId = Number.parseInt(codigo)
    const {items, ...characterRow} = characterInput
    await pool.query('update characters set ? where id = ?', [characterRow.id, characterId])
    
    await pool.query('delete from characterItems where characterId = ?', [characterId]) 

    if(items?.length>0){
      for(const itemName of items){
        await pool.query('insert into characterItems set ?', {characterId, itemName})
      }
    }
    return await this.findOne({codigo})
  }

  public async delete(item: { codigo: string }):Promise<Character | undefined> {
    //MongoDB
    /*const _id = new ObjectId(item.codigo)
    return (await characters.findOneAndDelete({_id})) || undefined*/
    //MySQL
    try {
    const characterToDelete = await this.findOne(item)
    const characterId = Number.parseInt(item.codigo)
    await pool.query('delete from characterItems where characterId = ?', characterId)
    await pool.query('delete from characters where id = ?', characterId)
    return characterToDelete
    } catch (error: any) {
      throw new Error('unable to delete character')
    }
  }
}