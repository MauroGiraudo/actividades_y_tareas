import { db } from "../shared/db/conn.js";
import { ObjectId } from "mongodb";
import { pool } from "../shared/db/conn.mysql.js";
const characters = db.collection('characters');
export class CharacterRepository {
    async findAll() {
        //MongoDB
        /*return await characters.find().toArray()*/
        //MySQL 
        const [characters] = await pool.query('select * from characters');
        for (const character of characters) {
            const [items] = await pool.query('select * from characterItems where itemName = ?', [character.id]);
            character.items = items.map((item) => item.itemName);
        }
        return characters;
    }
    async findOne(item) {
        //MongoDB
        /*const _id = new ObjectId(item.codigo)
        return (await characters.findOne({_id})) || undefined*/
        //MySQL
        const id = Number.parseInt(item.codigo);
        const [characters] = await pool.query('select * from characters = ?', [id]);
        if (characters.length === 0) {
            return undefined;
        }
        const character = characters[0];
        const [items] = await pool.query('select * from characterItems where itemName = ?', [character.id]);
        character.items = items.map((item) => item.itemName);
        return character;
    }
    async add(characterInput) {
        //MongoDB
        /*characterInput._id = (await characters.insertOne(characterInput)).insertedId
        return characterInput*/
        //MySQL
        const { id, items, ...characterRow } = characterInput;
        const [resultado] = await pool.query('insert into characters set ?', [characterRow]);
        characterInput.id = resultado.insertId;
        for (const item of items) {
            await pool.query('insert into characterItems set ?', { CharacterId: characterInput.id, ItemName: item });
        }
        return characterInput;
    }
    async update(codigo, characterInput) {
        //MongoDB
        /*const _id = new ObjectId(codigo)
        return (await characters.findOneAndUpdate({_id}, {$set: characterInput}, {returnDocument:'after'})) || undefined*/
        //MySQL
        const characterId = Number.parseInt(codigo);
        const { items, ...characterRow } = characterInput;
        await pool.query('update characters set ? where id = ?', [characterRow.id, characterId]);
        await pool.query('delete from characterItems where characterId = ?', [characterId]);
        if (items?.length > 0) {
            for (const itemName of items) {
                await pool.query('insert into characterItems set ?', { characterId, itemName });
            }
        }
        return characterInput;
    }
    async delete(item) {
        const _id = new ObjectId(item.codigo);
        return (await characters.findOneAndDelete({ _id })) || undefined;
    }
}
//# sourceMappingURL=character.repository.js.map